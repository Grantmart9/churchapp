"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, Users, Heart, MapPin } from "lucide-react";
import { useSupabase } from "./providers";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

interface EventCard {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  date: string;
  location: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Events() {
  const [events, setEvents] = useState<EventCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextEvent, setNextEvent] = useState<Event | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const { supabase } = useSupabase();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from("events")
          .select("*")
          .order("date", { ascending: true });

        if (error) {
          console.error("Error fetching events:", error);
          // Fallback to mock data if database is not set up
          setEvents([
            {
              id: "1",
              title: "Sunday Service",
              description: "Join us for our weekly service at 10 AM",
              image:
                "https://images.unsplash.com/photo-1515943073294-77dfc14c7a7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
              icon: <Calendar className="h-5 w-5" />,
              date: new Date(
                Date.now() + 7 * 24 * 60 * 60 * 1000
              ).toISOString(),
              location: "Main Sanctuary",
            },
            {
              id: "2",
              title: "Community Outreach",
              description: "Serving our community with love and compassion",
              image:
                "https://images.unsplash.com/photo-1559027615-cd4628192c4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
              icon: <Heart className="h-5 w-5" />,
              date: new Date(
                Date.now() + 14 * 24 * 60 * 60 * 1000
              ).toISOString(),
              location: "Community Center",
            },
            {
              id: "3",
              title: "Youth Ministry",
              description: "Engaging activities for young people",
              image:
                "https://images.unsplash.com/photo-1529156069898-49953e39b3fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
              icon: <Users className="h-5 w-5" />,
              date: new Date(
                Date.now() + 21 * 24 * 60 * 60 * 1000
              ).toISOString(),
              location: "Youth Hall",
            },
            {
              id: "4",
              title: "Volunteer Day",
              description: "Help us make a difference",
              image:
                "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
              icon: <Clock className="h-5 w-5" />,
              date: new Date(
                Date.now() + 28 * 24 * 60 * 60 * 1000
              ).toISOString(),
              location: "Various Locations",
            },
          ]);
        } else if (data) {
          const formattedEvents: EventCard[] = data.map((event: Event) => ({
            id: event.id,
            title: event.title,
            description: event.description,
            image:
              event.image_url ||
              "https://images.unsplash.com/photo-1515943073294-77dfc14c7a7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
            icon: <Calendar className="h-5 w-5" />,
            date: event.date,
            location: event.location || "TBD",
          }));
          setEvents(formattedEvents);

          // Set next upcoming event for countdown
          const upcomingEvents = data
            .filter((event: Event) => new Date(event.date) > new Date())
            .sort(
              (a: Event, b: Event) =>
                new Date(a.date).getTime() - new Date(b.date).getTime()
            );

          if (upcomingEvents.length > 0) {
            setNextEvent(upcomingEvents[0]);
          }
        }
      } catch (error) {
        console.error("Error in fetchEvents:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [supabase]);

  useEffect(() => {
    if (!nextEvent) {
      // Fallback countdown to next Sunday service
      const calculateTimeLeft = () => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + (7 - targetDate.getDay())); // Next Sunday
        targetDate.setHours(10, 0, 0, 0); // 10:00 AM

        const difference = targetDate.getTime() - new Date().getTime();

        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);

          setTimeLeft({ days, hours, minutes, seconds });
        }
      };

      calculateTimeLeft();
      const timer = setInterval(calculateTimeLeft, 1000);

      return () => clearInterval(timer);
    } else {
      // Countdown to next event from database
      const calculateTimeLeft = () => {
        const targetDate = new Date(nextEvent.date);
        const difference = targetDate.getTime() - new Date().getTime();

        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);

          setTimeLeft({ days, hours, minutes, seconds });
        }
      };

      calculateTimeLeft();
      const timer = setInterval(calculateTimeLeft, 1000);

      return () => clearInterval(timer);
    }
  }, [nextEvent]);

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
        </motion.div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2">
                      {event.icon}
                      <span className="text-sm font-medium">{event.title}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-2">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 text-center">
                    {event.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {nextEvent
                ? `Next Event: ${nextEvent.title}`
                : "Next Sunday Service Starts In"}
            </h3>
            {nextEvent && (
              <p className="text-gray-600">
                {new Date(nextEvent.date).toLocaleDateString()} at{" "}
                {new Date(nextEvent.date).toLocaleTimeString()}
              </p>
            )}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-4 text-center"
              >
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
