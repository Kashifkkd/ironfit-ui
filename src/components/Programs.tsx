"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Dumbbell, 
  Heart, 
  Users, 
  Target, 
  Clock, 
  Trophy,
  ArrowRight 
} from "lucide-react";

const Programs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const programs = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Build muscle and increase your overall strength with our comprehensive weight training programs.",
      features: ["Free weights", "Machines", "Personal guidance", "Progress tracking"],
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Heart,
      title: "Cardio Workouts",
      description: "Improve your cardiovascular health and endurance with our varied cardio programs.",
      features: ["Treadmills", "Ellipticals", "Cycling", "HIIT classes"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "Join our energetic group classes and workout with like-minded fitness enthusiasts.",
      features: ["Yoga", "Pilates", "Zumba", "CrossFit"],
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Target,
      title: "Personal Training",
      description: "Get one-on-one attention from our certified trainers to achieve your specific goals.",
      features: ["Custom programs", "Nutrition guidance", "Form correction", "Goal tracking"],
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Work out on your schedule with our round-the-clock gym access for premium members.",
      features: ["Keycard access", "Security cameras", "Emergency support", "Flexible hours"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Trophy,
      title: "Competition Prep",
      description: "Prepare for bodybuilding, powerlifting, or athletic competitions with expert coaching.",
      features: ["Contest prep", "Posing practice", "Diet planning", "Peak conditioning"],
      image: "https://images.unsplash.com/photo-1583500178690-5b3684c4c4b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our wide range of fitness programs designed to help you achieve
            your goals, whether you're a beginner or a seasoned athlete.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <motion.div key={program.title} variants={itemVariants}>
                <Card className="group h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundImage: `url('${program.image}')` }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute top-4 left-4">
                      <div className="bg-orange-500 p-3 rounded-full">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-200">
                      {program.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {program.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <ul className="space-y-2 mb-6">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="gymOutline" 
                      className="w-full group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Start Your Fitness Journey?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our community today and get access to all programs, equipment, and expert guidance
              you need to transform your body and mind.
            </p>
            <Button variant="gym" size="xl">
              Get Started Today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;