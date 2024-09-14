import { getEvents } from "@/lib/getEvents";
import EventCard from "@/components/Events/event-card";

export default async function FeaturedEvents() {
  const events = await getEvents();

  const upcomingEvents = events.filter((event) => !event.isPast).slice(0, 3);

  const pastEvents = events.filter((event) => event.isPast).slice(0, 3);

  const EventSection = ({ title, events, isPast }) => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            date={event.date}
          
            location={event.location}
            imageUrl={event.imageUrl}
            description={event.description}
            isPast={isPast}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="container my-16 px-4">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        Featured Events
      </h2>
      <div className="mx-auto max-w-7xl">
        <EventSection
          title="Upcoming Events"
          events={upcomingEvents}
          isPast={false}
        />
        <EventSection title="Past Events" events={pastEvents} isPast={true} />
      </div>
    </div>
  );
}
