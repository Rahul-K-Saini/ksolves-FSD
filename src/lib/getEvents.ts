import { cache } from 'react';
import { Event } from '@/types/event';

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Tech Conference 2023',
    date: '2023-09-15',
    location: 'San Francisco, CA',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
    description: 'A conference showcasing the latest in technology trends and innovations.',
    isPast: false,
  },
  {
    id: '2',
    title: 'Web Development Workshop',
    date: '2023-10-01',
  
    location: 'New York, NY',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    description: 'Hands-on workshop covering modern web development techniques and best practices.',
    isPast: false,
  },
  {
    id: '3',
    title: 'AI Symposium',
    date: '2023-11-12',
  
    location: 'London, UK',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    description: 'An in-depth exploration of artificial intelligence and its applications across various industries.',
    isPast: false,
  },
  {
    id: '4',
    title: 'Data Science Summit 2023',
    date: '2023-06-20',
  
    location: 'Boston, MA',
    imageUrl: 'https://images.unsplash.com/photo-1509869175650-a1d97972541a',
    description: 'A summit focused on the latest trends and advancements in data science and analytics.',
    isPast: true,
  },
  {
    id: '5',
    title: 'Cybersecurity Conference',
    date: '2023-07-05',
   
    location: 'Washington, D.C.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
    description: 'An event dedicated to exploring current cybersecurity challenges and solutions.',
    isPast: true,
  },
  {
    id: '6',
    title: 'Mobile App Development Workshop',
    date: '2023-08-18',
 
    location: 'Seattle, WA',
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
    description: 'A hands-on workshop covering the latest techniques in mobile app development.',
    isPast: true,
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