"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "IronFit completely transformed my fitness journey. The trainers are incredibly knowledgeable and the community is so supportive. I've never felt stronger!",
      rating: 5,
      achievement: "Lost 30 lbs in 6 months"
    },
    {
      name: "Mike Chen",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "The 24/7 access is perfect for my schedule. The equipment is top-notch and the facility is always clean. Best investment I've made for my health.",
      rating: 5,
      achievement: "Gained 15 lbs muscle"
    },
    {
      name: "Emily Rodriguez",
      role: "Teacher",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "The group classes are amazing! I've made so many friends and the instructors keep every session fun and challenging. Highly recommend!",
      rating: 5,
      achievement: "Improved flexibility by 40%"
    },
    {
      name: "David Thompson",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "Personal training here is exceptional. My trainer helped me prepare for my first marathon and I achieved a time I never thought possible.",
      rating: 5,
      achievement: "Completed first marathon"
    },
    {
      name: "Lisa Park",
      role: "Nurse",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "After my injury, the rehabilitation programs here got me back to full strength. The staff's expertise and care made all the difference.",
      rating: 5,
      achievement: "Full recovery from injury"
    },
    {
      name: "James Wilson",
      role: "Retired Veteran",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "At 55, I thought my best days were behind me. IronFit proved me wrong. I'm in the best shape of my life and feel 20 years younger!",
      rating: 5,
      achievement: "Strongest at age 55"
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Hear from our amazing members who have transformed their lives through fitness.
            Their journeys inspire us every day.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.name} variants={itemVariants}>
              <Card className="bg-gray-800 border-gray-700 h-full hover:bg-gray-750 transition-colors duration-300">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-orange-500" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Content */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Achievement Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-500/20 text-orange-400 border border-orange-500/30">
                      {testimonial.achievement}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center">
                    <div
                      className="w-12 h-12 rounded-full bg-cover bg-center mr-4 ring-2 ring-orange-500/30"
                      style={{ backgroundImage: `url('${testimonial.image}')` }}
                    />
                    <div>
                      <h4 className="text-white font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">
              98%
            </div>
            <div className="text-gray-400">Member Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">
              5000+
            </div>
            <div className="text-gray-400">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">
              15+
            </div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">
              24/7
            </div>
            <div className="text-gray-400">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;