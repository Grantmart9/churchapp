"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Heart,
  Share2,
  Plus,
  Filter,
  Search,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-orange-600 to-red-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Church Events
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Join us for worship, fellowship, and community events that inspire
              and transform
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find events that match your interests and schedule
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Worship Services",
                icon: <Heart className="h-6 w-6" />,
                count: "12 Events",
                color: "from-red-500 to-pink-600",
              },
              {
                title: "Bible Studies",
                icon: <Calendar className="h-6 w-6" />,
                count: "8 Events",
                color: "from-blue-500 to-indigo-600",
              },
              {
                title: "Community Outreach",
                icon: <Users className="h-6 w-6" />,
                count: "6 Events",
                color: "from-green-500 to-teal-600",
              },
              {
                title: "Social Events",
                icon: <Share2 className="h-6 w-6" />,
                count: "10 Events",
                color: "from-purple-500 to-pink-600",
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600">{category.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't miss these upcoming special events and gatherings
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Christmas Eve Candlelight Service",
                date: "December 24, 2024",
                time: "7:00 PM",
                location: "Main Sanctuary",
                type: "Worship Service",
                featured: true,
                description:
                  "Join us for a beautiful candlelight service celebrating the birth of Christ with special music and communion.",
                image:
                  "https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?w=400&h=300&fit=crop",
              },
              {
                title: "New Year's Eve Celebration",
                date: "December 31, 2024",
                time: "8:00 PM",
                location: "Fellowship Hall",
                type: "Social Event",
                featured: true,
                description:
                  "Ring in the new year with food, fellowship, and worship as we celebrate God's faithfulness.",
                image:
                  "https://images.unsplash.com/photo-1511795409834-ef14cced192c?w=400&h=300&fit=crop",
              },
              {
                title: "Winter Retreat 2025",
                date: "January 17-19, 2025",
                time: "All Weekend",
                location: "Mountain View Lodge",
                type: "Retreat",
                featured: true,
                description:
                  "A weekend of spiritual renewal, fellowship, and outdoor activities in the beautiful mountains.",
                image:
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
              },
            ].map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {event.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {event.description}
                  </p>

                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white">
                      Register Now
                    </Button>
                    <Button
                      variant="outline"
                      className="border-orange-300 text-orange-600 hover:bg-orange-50"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Weekly Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Regular gatherings that happen every week
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                day: "Sunday",
                title: "Morning Worship Service",
                time: "10:00 AM - 12:00 PM",
                location: "Main Sanctuary",
                description:
                  "Join us for our main weekly worship service with praise band, message, and communion.",
                color: "from-red-500 to-orange-600",
              },
              {
                day: "Wednesday",
                title: "Prayer Meeting",
                time: "7:00 PM - 8:00 PM",
                location: "Prayer Chapel",
                description:
                  "A time of corporate prayer, worship, and sharing for our church family.",
                color: "from-blue-500 to-indigo-600",
              },
              {
                day: "Friday",
                title: "Youth Group",
                time: "7:00 PM - 9:00 PM",
                location: "Youth Center",
                description:
                  "Bible study, games, and fellowship for middle and high school students.",
                color: "from-green-500 to-teal-600",
              },
              {
                day: "Saturday",
                title: "Men's Breakfast",
                time: "8:00 AM - 9:30 AM",
                location: "Fellowship Hall",
                description:
                  "Monthly gathering for men to share breakfast, study God's word, and build relationships.",
                color: "from-purple-500 to-pink-600",
              },
            ].map((event, index) => (
              <motion.div
                key={event.day}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${event.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}
                  >
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {event.day}
                      </h3>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        Weekly
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h4>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {event.description}
                    </p>
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event Calendar
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              View all upcoming events and add them to your personal calendar
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="flex items-center space-x-2">
                  <Filter className="h-5 w-5 text-gray-500" />
                  <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                    <option>All Categories</option>
                    <option>Worship Services</option>
                    <option>Bible Studies</option>
                    <option>Community Outreach</option>
                    <option>Social Events</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <Search className="h-5 w-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm w-48"
                  />
                </div>
              </div>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add Event
              </Button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mb-6">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="text-center py-2 text-sm font-medium text-gray-500"
                >
                  {day}
                </div>
              ))}

              {/* Calendar days with events */}
              {Array.from({ length: 35 }, (_, i) => {
                const day = i - 2; // Start from December 1st
                const hasEvent = [5, 7, 12, 14, 19, 21, 24, 26, 28].includes(
                  day
                );
                const isToday = day === 15;

                return (
                  <div
                    key={i}
                    className={`min-h-24 p-2 border border-gray-200 rounded-lg ${
                      isToday ? "bg-orange-100 border-orange-300" : ""
                    }`}
                  >
                    <div className="text-sm font-medium mb-1">
                      {day > 0 && day <= 31 ? day : ""}
                    </div>
                    {hasEvent && (
                      <div className="space-y-1">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span>Worship Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Bible Study</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Community Event</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Registration */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Want to Host an Event?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have an idea for a church event? We'd love to help you organize
              it!
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Plus className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Submit Your Event Proposal
            </h3>
            <p className="text-gray-600 mb-6">
              Whether it's a small Bible study group or a large community
              outreach event, we want to hear your ideas!
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Propose an Event
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
