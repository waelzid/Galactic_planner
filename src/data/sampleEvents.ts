import type { Event } from '../types';

export const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Team Meeting',
    date: new Date(2025, 9, 22),
    color: 'bg-blue-500',
    location: 'Conference Room A',
    description: 'Weekly team sync'
  },
  {
    id: '2',
    title: 'Project Deadline',
    date: new Date(2025, 9, 25),
    color: 'bg-red-500',
    description: 'Final submission'
  },
  {
    id: '3',
    title: 'Client Call',
    date: new Date(2025, 9, 23),
    color: 'bg-green-500',
    location: 'Zoom',
    description: 'Q4 planning discussion'
  },
  {
    id: '4',
    title: 'Design Review',
    date: new Date(2025, 9, 28),
    color: 'bg-purple-500',
    description: 'Review new mockups'
  },
  {
    id: '5',
    title: 'Launch Party',
    date: new Date(2025, 9, 30),
    color: 'bg-orange-500',
    location: 'Downtown Office',
    description: 'Celebrate product launch'
  },
];