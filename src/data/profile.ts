export const profile = {
  name: 'Dharmil Virani',
  role: 'Software developer',
  email: 'dharmilvirani@gmail.com',
  github: 'https://github.com/DharmilVirani',
  linkedin: 'https://www.linkedin.com/in/dharmil-virani-07937426a/',
  resume: '/Dharmil_Resume.pdf',
  location: 'Ahmedabad, India',
  description: 'Software developer connecting real-time systems with thoughtful interfaces. Explore selected work in Rust, full-stack development, and desktop applications.',
  experience: [
    {
      company: 'Young Turtle LLP', role: 'Software Developer', period: 'Nov 2025 — Present', current: true,
      description: 'Building algorithmic trading infrastructure, seasonality analysis, and real-time market data systems. Working across Rust services, WebSocket pipelines, strategy workflows, and the interfaces that bring them together.',
      tags: ['Rust', 'WebSockets', 'Redis', 'PostgreSQL', 'Docker'],
    },
    {
      company: 'ISRO · Space Applications Centre', role: 'Software Development Intern', period: 'Jun — Sep 2025', current: false,
      description: 'Contributed to internal full-stack tools, developing backend features with Java Servlets and DAO patterns. Worked on application logic, database integration, and debugging alongside the team.',
      tags: ['Java', 'Servlets', 'SQL', 'Full-stack development'],
    },
  ],
  capabilities: [
    { number: '01', title: 'Systems that stay in sync.', description: 'Moving data from event to interface, with attention to state, timing, and the boundaries between services.', tags: ['Rust', 'WebSockets', 'Redis', 'PostgreSQL'], project: 'signal-platform', link: 'Explore the signal platform' },
    { number: '02', title: 'Interfaces with intention.', description: 'Turning a complex workflow into a clear next step. From a desktop reference tool to a carefully considered typing experience.', tags: ['React', 'Next.js', 'JavaScript', 'Electron'], project: 'turbotypist', link: 'Explore TurboTypist' },
    { number: '03', title: 'The whole path to delivery.', description: 'Connecting application logic, data storage, and deployment. Thinking beyond the component to the system it lives in.', tags: ['Node.js', 'Express', 'Docker', 'Nginx'], project: 'veterinary-drug-index', link: 'Explore the desktop application' },
  ],
};
