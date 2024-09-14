import React from "react";
import { getEvents } from "@/lib/getEvents";
import EventCard from "@/components/Events/event-card";

export default async function FeaturedEvents() {
  const events = await getEvents();
  const featuredEvents = events.slice(0, 3);

  return (
    <div className="container my-16 px-4">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        Featured Events
      </h2>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredEvents.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              imageUrl={event.imageUrl}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
