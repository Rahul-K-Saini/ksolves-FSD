import React, { Suspense } from "react";
import { getEvents } from "@/lib/getEvents";
import EventCard from "@/components/Events/event-card";
import { Event } from "@/types/event";
import { Loader2 } from "lucide-react";


const Loader = () => (
  <div className="flex justify-center items-center h-64">
    <Loader2 className="w-8 h-8 animate-spin" />
    <span className="ml-2">Loading events...</span>
  </div>
);


const EventsList = async () => {
  let events: Event[];
  try {
    events = await getEvents();
  } catch (e: any) {
    return <div className="text-center text-red-500">Error: {e.message}</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {events.map((event) => (
        <EventCard 
          key={event.id} 
          id={event.id}
          title={event.title}
          date={event.date}
          
          location={event.location}
          imageUrl={event.imageUrl}
          description={event.description}
          isPast={event.isPast}
        />
      ))}
    </div>
  );
};

export default function EventsPage() {
  return (
    <div className="mt-16 container mx-auto px-6">
      <h1 className="text-3xl font-bold mb-8">Events</h1>
      <Suspense fallback={<Loader />}>
        <EventsList />
      </Suspense>
    </div>
  );
}