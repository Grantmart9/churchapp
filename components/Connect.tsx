"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Twitter } from "lucide-react";

interface PlatformCard {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  hoverColor: string;
}

const platforms: PlatformCard[] = [
  {
    id: 1,
    name: "Facebook",
    description: "Stay updated with our latest news and events",
    icon: <Facebook className="h-8 w-8" />,
    color: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
  },
  {
    id: 2,
    name: "Instagram",
    description: "Follow us for daily inspiration and community highlights",
    icon: <Instagram className="h-8 w-8" />,
    color: "bg-pink-600",
    hoverColor: "hover:bg-pink-700",
  },
  {
    id: 3,
    name: "Twitter",
    description: "Join the conversation and share your thoughts",
    icon: <Twitter className="h-8 w-8" />,
    color: "bg-sky-500",
    hoverColor: "hover:bg-sky-600",
  },
];

export default function Connect() {
  return (
    <section id="connect" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Connect With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our online community and stay connected with fellow members
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              className="group"
            >
              <Card className="h-full text-center transition-all duration-300 hover:shadow-xl cursor-pointer">
                <CardHeader className="pb-4">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`mx-auto w-16 h-16 rounded-full ${platform.color} ${platform.hoverColor} flex items-center justify-center text-white transition-colors duration-300`}
                  >
                    {platform.icon}
                  </motion.div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                    {platform.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {platform.description}
                  </CardDescription>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4"
                  >
                    <button
                      className={`w-full py-2 px-4 rounded-lg ${platform.color} ${platform.hoverColor} text-white font-medium transition-colors duration-300`}
                    >
                      Follow {platform.name}
                    </button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            Can't find what you're looking for?{" "}
            <a
              href="#contact"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Contact us directly
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
