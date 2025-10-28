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
  BookOpen,
  Video,
  Music,
  FileText,
  Download,
  Play,
  Calendar,
  Clock,
  Users,
  Heart,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-purple-600 to-pink-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Spiritual Resources
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Access inspiring content, sermons, and tools to deepen your faith
              journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hand-picked content to inspire and guide your spiritual growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Daily Devotional",
                description:
                  "Start your day with God's word and inspiring reflections",
                icon: <BookOpen className="h-8 w-8 text-blue-600" />,
                category: "Devotionals",
                duration: "5 min read",
                featured: true,
              },
              {
                title: "Sunday Sermon Series",
                description: "Latest messages from our weekly worship services",
                icon: <Video className="h-8 w-8 text-purple-600" />,
                category: "Sermons",
                duration: "45 min",
                featured: true,
              },
              {
                title: "Worship Music Playlist",
                description: "Contemporary and traditional worship songs",
                icon: <Music className="h-8 w-8 text-green-600" />,
                category: "Music",
                duration: "60 min",
                featured: true,
              },
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  resource.featured ? "border-purple-200" : "border-gray-100"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                    {resource.icon}
                  </div>
                  {resource.featured && (
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{resource.category}</span>
                  <span>{resource.duration}</span>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  {resource.icon ===
                  <Music className="h-8 w-8 text-green-600" />
                    ? "Listen Now"
                    : "View Resource"}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find resources tailored to your specific needs and interests
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Sermons",
                icon: <Video className="h-6 w-6" />,
                count: "45 Messages",
                description: "Weekly messages and teachings",
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "Bible Studies",
                icon: <BookOpen className="h-6 w-6" />,
                count: "12 Series",
                description: "Deep dive into scripture",
                color: "from-green-500 to-green-600",
              },
              {
                title: "Worship",
                icon: <Music className="h-6 w-6" />,
                count: "8 Playlists",
                description: "Music and worship resources",
                color: "from-purple-500 to-purple-600",
              },
              {
                title: "Devotionals",
                icon: <FileText className="h-6 w-6" />,
                count: "30 Days",
                description: "Daily spiritual reflections",
                color: "from-pink-500 to-pink-600",
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
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
                <p className="text-gray-600 text-sm mb-3">
                  {category.description}
                </p>
                <p className="text-sm font-medium text-gray-500">
                  {category.count}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Sermons */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Sermons
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful messages from our teaching team
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                title: "Finding Purpose in a Chaotic World",
                speaker: "Sarah Johnson",
                date: "December 15, 2024",
                duration: "42:15",
                description:
                  "Discover how to find your true purpose and meaning in today's fast-paced world through biblical principles.",
              },
              {
                title: "The Power of Community",
                speaker: "Michael Chen",
                date: "December 8, 2024",
                duration: "38:30",
                description:
                  "Exploring how authentic community transforms our faith and helps us grow together in Christ.",
              },
              {
                title: "Overcoming Fear and Anxiety",
                speaker: "Emily Rodriguez",
                date: "December 1, 2024",
                duration: "45:22",
                description:
                  "Practical biblical strategies for overcoming fear and finding peace in uncertain times.",
              },
            ].map((sermon, index) => (
              <motion.div
                key={sermon.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Play className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {sermon.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {sermon.speaker}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {sermon.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {sermon.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{sermon.description}</p>
                    <div className="flex space-x-3">
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                        <Play className="h-4 w-4 mr-2" />
                        Watch Now
                      </Button>
                      <Button
                        variant="outline"
                        className="border-purple-300 text-purple-600 hover:bg-purple-50"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bible Reading Plans */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bible Reading Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Structured reading plans to help you engage with God's word daily
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "New Testament in 90 Days",
                description:
                  "Read through the entire New Testament in just three months",
                duration: "90 days",
                difficulty: "Moderate",
                progress: 65,
              },
              {
                title: "Gospel Focus",
                description: "A 30-day journey through the life of Jesus",
                duration: "30 days",
                difficulty: "Easy",
                progress: 100,
              },
              {
                title: "Proverbs Wisdom",
                description: "Daily wisdom from the book of Proverbs",
                duration: "31 days",
                difficulty: "Easy",
                progress: 45,
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {plan.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{plan.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="font-medium">{plan.difficulty}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress:</span>
                    <span className="font-medium">{plan.progress}%</span>
                  </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${plan.progress}%` }}
                  ></div>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  {plan.progress === 100 ? "Restart Plan" : "Continue Reading"}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prayer Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prayer Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tools and guides to strengthen your prayer life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-6 w-6 text-pink-600 mr-3" />
                  Prayer Request Form
                </CardTitle>
                <CardDescription>
                  Submit your prayer requests and join our community in prayer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our prayer team is here to lift you up in prayer. Share your
                  requests and experience the power of community prayer.
                </p>
                <Button className="bg-pink-600 hover:bg-pink-700 text-white">
                  Submit Prayer Request
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
                  Prayer Guide PDF
                </CardTitle>
                <CardDescription>
                  Download our comprehensive prayer guide
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  A 20-page guide covering different types of prayer, biblical
                  examples, and practical prayer strategies.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Download Guide
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
