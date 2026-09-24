export interface Tick { id: string; time: string; price: number; }
export interface PipelineState { seen: string[]; accepted: number; duplicate: number; late: number; candle: { open: number; high: number; low: number; close: number } | null; }
export const sampleTicks: Tick[] = [
  { id: 'T01', time: '09:15:01', price: 101 },
  { id: 'T02', time: '09:15:12', price: 103 },
  { id: 'T03', time: '09:15:25', price: 102 },
  { id: 'T02', time: '09:15:12', price: 103 },
  { id: 'T04', time: '09:14:59', price: 99 },
  { id: 'T05', time: '09:15:48', price: 104 },
];
export const initialState = (): PipelineState => ({ seen: [], accepted: 0, duplicate: 0, late: 0, candle: null });
export function processTick(state: PipelineState, tick: Tick): { state: PipelineState; message: string; outcome: 'accepted' | 'duplicate' | 'late' } {
  if (state.seen.includes(tick.id)) return { state: { ...state, duplicate: state.duplicate + 1 }, message: `${tick.id} · ${tick.time} · Duplicate event ignored. The candle stays unchanged.`, outcome: 'duplicate' };
  if (tick.time < '09:15:00' || tick.time >= '09:16:00') return { state: { ...state, seen: [...state.seen, tick.id], late: state.late + 1 }, message: `${tick.id} · ${tick.time} · Outside this minute. The candle stays unchanged.`, outcome: 'late' };
  const candle = state.candle ? { open: state.candle.open, high: Math.max(state.candle.high, tick.price), low: Math.min(state.candle.low, tick.price), close: tick.price } : { open: tick.price, high: tick.price, low: tick.price, close: tick.price };
  return { state: { ...state, seen: [...state.seen, tick.id], accepted: state.accepted + 1, candle }, message: `${tick.id} · ${tick.time} · Price ${tick.price} accepted. ${state.candle ? 'The minute candle is updated.' : 'A new minute candle is opened.'}`, outcome: 'accepted' };
}
