"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Users, HelpingHand, Award } from "lucide-react";

interface Opportunity {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const opportunities: Opportunity[] = [
  {
    id: 1,
    title: "Teaching Ministry",
    description:
      "Share your knowledge and help others grow in their faith journey through Sunday school and Bible study groups.",
    icon: <Award className="h-6 w-6" />,
    color: "text-purple-600",
  },
  {
    id: 2,
    title: "Community Service",
    description:
      "Make a difference in our local community through outreach programs and volunteer initiatives.",
    icon: <Heart className="h-6 w-6" />,
    color: "text-red-600",
  },
  {
    id: 3,
    title: "Youth Mentorship",
    description:
      "Guide and inspire the next generation through our youth ministry programs.",
    icon: <Users className="h-6 w-6" />,
    color: "text-blue-600",
  },
  {
    id: 4,
    title: "Event Support",
    description:
      "Help organize and run our church events, from services to special celebrations.",
    icon: <HelpingHand className="h-6 w-6" />,
    color: "text-green-600",
  },
];

export default function GetInvolved() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Involved
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover ways to contribute your time and talents to our community.
            Every contribution helps us spread hope and make a positive impact.
          </p>
        </motion.div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
                className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4 ${opportunity.color}`}
              >
                {opportunity.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {opportunity.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {opportunity.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full text-left text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors duration-200"
              >
                Learn More →
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-12 shadow-lg max-w-2xl mx-auto">
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-6"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpingHand className="h-10 w-10 text-blue-600" />
              </div>
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Join our team of dedicated volunteers and help us create a
              positive impact in our community. Your time and talents can change
              lives.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Volunteer Now
              </Button>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 text-sm text-gray-500"
          >
            Not sure where to start?{" "}
            <a
              href="#contact"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Contact our volunteer coordinator
            </a>{" "}
            for guidance.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
