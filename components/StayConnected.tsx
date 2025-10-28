"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Send, CheckCircle } from "lucide-react";

export default function StayConnected() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubscribed(true);
    setIsLoading(false);
    setEmail("");
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Stay Connected
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Sign up for our newsletter to receive updates and announcements. Be
            the first to know about upcoming events and community news.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-lg">
            {!isSubscribed ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center mb-8"
                >
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Never Miss an Update
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Join our community of faith-filled individuals and receive
                    weekly inspiration, event notifications, and spiritual
                    guidance.
                  </p>
                </motion.div>

                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 min-w-[140px]"
                      >
                        {isLoading ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-5 h-5 border-2 border-white/30 border-t-transparent rounded-full"
                          />
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Subscribe
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </div>
                </motion.form>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-sm text-gray-500 text-center mt-6"
                >
                  We respect your privacy. Unsubscribe at any time.
                </motion.p>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Successfully Subscribed!
                </h3>
                <p className="text-gray-600 mb-8">
                  Thank you for joining our community. Check your email for a
                  confirmation message and welcome to FaithConnect!
                </p>
                <Button
                  onClick={() => setIsSubscribed(false)}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Subscribe Another Email
                </Button>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900">Weekly Newsletter</h4>
            <p className="text-sm text-gray-600">
              Get weekly devotionals and community updates
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Send className="h-6 w-6 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900">Event Reminders</h4>
            <p className="text-sm text-gray-600">
              Never miss important church events and activities
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900">Exclusive Content</h4>
            <p className="text-sm text-gray-600">
              Access special resources and member-only content
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
