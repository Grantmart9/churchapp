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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MessageCircle,
  Heart,
  Users,
  Calendar,
  MapPin,
  Clock,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-green-600 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Connect With Us
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Join our community and discover meaningful connections and
              relationships
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Follow Us Online
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay connected and engaged with our community through social media
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                platform: "Facebook",
                icon: <Facebook className="h-8 w-8" />,
                color: "from-blue-500 to-blue-600",
                followers: "2.5K",
                description:
                  "Weekly updates, event photos, and community discussions",
              },
              {
                platform: "Instagram",
                icon: <Instagram className="h-8 w-8" />,
                color: "from-pink-500 to-purple-600",
                followers: "1.8K",
                description:
                  "Daily inspiration, worship moments, and behind-the-scenes",
              },
              {
                platform: "Twitter",
                icon: <Twitter className="h-8 w-8" />,
                color: "from-sky-400 to-blue-500",
                followers: "950",
                description:
                  "Real-time updates, prayer requests, and quick announcements",
              },
            ].map((social, index) => (
              <motion.div
                key={social.platform}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}
                >
                  {social.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {social.platform}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {social.description}
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-4">
                  <span>{social.followers} followers</span>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Follow {social.platform}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full"
                />
              </div>

              <div>
                <Label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number (Optional)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full"
                />
              </div>

              <div>
                <Label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  className="w-full"
                />
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more..."
                  rows={6}
                  className="w-full"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <Label htmlFor="newsletter" className="text-sm text-gray-600">
                  Subscribe to our newsletter for updates and inspiration
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Small Groups */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join a Small Group
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Grow deeper in faith through meaningful relationships and shared
              study
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Men's Bible Study",
                day: "Tuesday",
                time: "7:00 AM",
                location: "Church Library",
                leader: "John Smith",
                members: "12 men",
                description:
                  "Weekly study of biblical manhood and discipleship",
              },
              {
                name: "Women's Fellowship",
                day: "Wednesday",
                time: "10:00 AM",
                location: "Fellowship Hall",
                leader: "Sarah Johnson",
                members: "18 women",
                description: "Bible study, prayer, and mutual support",
              },
              {
                name: "Young Adults",
                day: "Thursday",
                time: "7:00 PM",
                location: "Youth Room",
                leader: "Michael Chen",
                members: "25 members",
                description: "College and career focused discussion group",
              },
              {
                name: "Marriage Ministry",
                day: "Saturday",
                time: "6:00 PM",
                location: "Conference Room",
                leader: "David & Lisa Thompson",
                members: "8 couples",
                description: "Strengthening marriages through God's word",
              },
              {
                name: "Senior Saints",
                day: "Monday",
                time: "1:00 PM",
                location: "Sanctuary",
                leader: "Robert Williams",
                members: "15 seniors",
                description: "Fellowship and study for our mature members",
              },
              {
                name: "Youth Group",
                day: "Friday",
                time: "7:00 PM",
                location: "Youth Center",
                leader: "Emily Rodriguez",
                members: "30 teens",
                description: "Bible study, games, and discipleship for teens",
              },
            ].map((group, index) => (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {group.name}
                  </h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {group.members}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-green-600" />
                    <span>{group.day}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-green-600" />
                    <span>{group.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-green-600" />
                    <span>{group.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-green-600" />
                    <span>Leader: {group.leader}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {group.description}
                </p>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Join This Group
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Serve our community and make a difference through your gifts and
              talents
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-6 w-6 text-green-600 mr-3" />
                  Community Outreach
                </CardTitle>
                <CardDescription>
                  Serve local families and organizations in need
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Food distribution program</li>
                  <li>• Homeless ministry outreach</li>
                  <li>• Senior citizen assistance</li>
                  <li>• Community clean-up events</li>
                </ul>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  Sunday Service Teams
                </CardTitle>
                <CardDescription>
                  Help make our weekend services amazing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Welcome team greeters</li>
                  <li>• Audio/visual technicians</li>
                  <li>• Worship team musicians</li>
                  <li>• Children's ministry helpers</li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Involved
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We'd love to have you join us for worship and fellowship
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Location
              </h3>
              <p className="text-gray-600">
                123 Church Street
                <br />
                Faith City, FC 12345
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Phone
              </h3>
              <p className="text-gray-600">
                (555) 123-4567
                <br />
                Office Hours: 9AM-5PM
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Email
              </h3>
              <p className="text-gray-600">
                info@faithconnect.org
                <br />
                office@faithconnect.org
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
