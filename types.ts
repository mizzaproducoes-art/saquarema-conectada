export enum AppTab {
  HOME = 'HOME',
  TRANSPORT = 'TRANSPORT',
  HEALTH = 'HEALTH',
  PANIC = 'PANIC',
  EVENTS = 'EVENTS',
  EXPLORE = 'EXPLORE'
}

export type UserRole = 'resident' | 'tourist';

export interface User {
  name: string;
  cpf?: string;
  balance?: number;
  role: UserRole;
}

export interface BusLine {
  id: string;
  route: string;
  status: 'ontime' | 'delayed' | 'stopped';
  nextArrival: string;
  location: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}