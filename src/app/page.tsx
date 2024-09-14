import Hero from "@/components/hero/hero";
import FeaturedEvents from "@/components/Events/featured-events"

export default function Home() {
  return (
    <main className="mt-16">
      <Hero/>
      <FeaturedEvents/>
    </main>
  );
}
