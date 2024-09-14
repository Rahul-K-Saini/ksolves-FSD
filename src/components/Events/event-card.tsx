import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import { Event } from "@/types/event";

const EventCard: React.FC<Event> = ({
  title,
  date,
  location,
  imageUrl,
  description,
  isPast,
}) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
          <div className="absolute top-2 right-2">
            <Badge variant={isPast ? "secondary" : "default"}>
              {isPast ? "Past" : "Upcoming"}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-bold mb-2">{title}</CardTitle>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {description}
        </p>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <CalendarDays className="mr-2 h-4 w-4" />
            <span>{date}</span>
          </div>
          {/* <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Clock className="mr-2 h-4 w-4" />
            <span>{time}</span>
          </div> */}
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <MapPin className="mr-2 h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-gray-50 dark:bg-gray-800">
        <Button className="w-full">{isPast ? "See Details":"Register Now"}</Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;