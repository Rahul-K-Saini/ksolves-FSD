import { cache } from 'react';
import { Event } from '@/types/event';

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Tech Conference 2023',
    date: '2023-09-15',
    time: '09:00 AM',
    location: 'San Francisco, CA',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
    description: 'A conference showcasing the latest in technology trends and innovations.',
    isPast: false,
  },
  {
    id: '2',
    title: 'Web Development Workshop',
    date: '2023-10-01',
    time: '10:30 AM',
    location: 'New York, NY',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    description: 'Hands-on workshop covering modern web development techniques and best practices.',
    isPast: false,
  },
  {
    id: '3',
    title: 'AI Symposium',
    date: '2023-11-12',
    time: '02:00 PM',
    location: 'London, UK',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    description: 'An in-depth exploration of artificial intelligence and its applications across various industries.',
    isPast: false,
  },
];
async function fetchEvents(): Promise<Event[]> {
  // to see the cards faking the api call
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockEvents;
}

export const getEvents = cache(async () => {
  const events = await fetchEvents();
  return events;
});