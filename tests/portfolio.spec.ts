import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const featuredTitles = ['Market Signal Platform', 'Veterinary Drug Index', 'TurboTypist', 'Foodie'];

test.describe('portfolio experience', () => {
  test('home presents positioning, featured work, contact, and resume', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /complex systems/i })).toBeVisible();
    await expect(page.getByText('Dharmil Virani').first()).toBeVisible();
    await expect(page.getByRole('link', { name: /^download resume$/i }).first()).toHaveAttribute('href', '/Dharmil_Resume.pdf');
    await expect(page.getByRole('link', { name: /dharmilvirani@gmail.com/i })).toHaveAttribute('href', 'https://mail.google.com/mail/?view=cm&fs=1&to=dharmilvirani%40gmail.com');
    for (const title of featuredTitles) await expect(page.getByRole('heading', { name: title })).toBeVisible();
  });

  test('project filters keep the selected work understandable', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /systems/i }).click();
    await expect(page.getByRole('heading', { name: 'Market Signal Platform' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Foodie' })).toBeHidden();
    await expect(page.locator('[data-filter-status]')).toContainText('1 project shown');
    await page.getByRole('button', { name: /interfaces/i }).click();
    await expect(page.getByRole('heading', { name: 'Market Signal Platform' })).toBeHidden();
    await expect(page.getByRole('heading', { name: 'Foodie' })).toBeVisible();
    await expect(page.locator('[data-filter-status]')).toContainText('3 projects shown');
  });

  test('signal case study includes a deterministic pipeline demonstration', async ({ page }) => {
    await page.goto('/work/signal-platform/');
    await expect(page.getByRole('heading', { name: /six events/i })).toBeVisible();
    const next = page.locator('[data-next-event]');
    for (let i = 0; i < 6; i += 1) await next.click();
    await expect(page.locator('[data-value="open"]')).toHaveText('101');
    await expect(page.locator('[data-value="high"]')).toHaveText('104');
    await expect(page.locator('[data-value="low"]')).toHaveText('101');
    await expect(page.locator('[data-value="close"]')).toHaveText('104');
    await expect(next).toBeDisabled();
    await page.getByRole('button', { name: 'Reset' }).click();
    await expect(page.locator('[data-value="open"]')).toHaveText('—');
  });

  test('typing case study exposes a working mini interaction', async ({ page }) => {
    await page.goto('/work/turbotypist/');
    const input = page.getByLabel('Your turn');
    await input.fill('good systems make complex things feel simple.');
    await expect(page.locator('#typing-status')).toContainText('Sentence complete');
    await expect(input).toHaveAttribute('readonly', '');
    await page.getByRole('button', { name: /start again/i }).click();
    await expect(input).toHaveValue('');
  });

  test('all public pages have no detectable axe violations', async ({ page }) => {
    for (const path of ['/', '/work/signal-platform/', '/work/turbotypist/']) {
      await page.goto(path);
      const result = await new AxeBuilder({ page }).analyze();
      expect(result.violations).toEqual([]);
    }
  });

  test('layouts do not create horizontal overflow', async ({ page }) => {
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: width < 700 ? 844 : 1000 });
      await page.goto('/');
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow).toBeLessThanOrEqual(1);
    }
  });

  test('reduced motion disables authored transitions and keeps controls usable', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    if ((page.viewportSize()?.width || 0) < 700) {
      await expect(page.getByRole('button', { name: /process/i })).toBeHidden();
      return;
    }
    await page.getByRole('button', { name: /process/i }).click();
    await expect(page.locator('[data-scene-description]')).toContainText('Turn a stream');
  });
});

test.describe('fallbacks', () => {
  test.use({ javaScriptEnabled: false });

  test('no-JS output still exposes content, case studies, contact, and demo summaries', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Market Signal Platform' })).toBeVisible();
    await expect(page.getByRole('link', { name: /dharmilvirani@gmail.com/i })).toBeVisible();
    await page.goto('/work/signal-platform/');
    await expect(page.getByText(/Final sample candle: open 101, high 104, low 101, close 104/)).toBeVisible();
    await page.goto('/work/turbotypist/');
    await expect(page.getByText(/Enable JavaScript to try the optional typing interaction/)).toBeVisible();
  });
});
