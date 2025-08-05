"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Star, Zap } from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      name: "Basic",
      description: "Perfect for beginners starting their fitness journey",
      monthlyPrice: 29,
      annualPrice: 290,
      popular: false,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Basic fitness assessment",
        "Mobile app access",
        "Community support",
      ],
      limitations: [
        "Limited peak hours (weekends only)",
        "No guest passes",
      ]
    },
    {
      name: "Premium",
      description: "Most popular choice for serious fitness enthusiasts",
      monthlyPrice: 59,
      annualPrice: 590,
      popular: true,
      features: [
        "24/7 gym access",
        "All group classes included",
        "Personal trainer consultation (1/month)",
        "Nutrition guidance",
        "Guest passes (2/month)",
        "Towel service",
        "Mobile app premium features",
        "Progress tracking",
      ],
      limitations: []
    },
    {
      name: "Elite",
      description: "Ultimate package for maximum results and convenience",
      monthlyPrice: 99,
      annualPrice: 990,
      popular: false,
      features: [
        "Everything in Premium",
        "Unlimited personal training",
        "Custom meal planning",
        "Priority class booking",
        "Unlimited guest passes",
        "Massage therapy (2/month)",
        "Supplement consultation",
        "Competition prep support",
        "VIP locker room access",
      ],
      limitations: []
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
    <section id="pricing" className="py-20 bg-white">
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
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Select the perfect membership plan that fits your lifestyle and fitness goals.
            All plans include access to our state-of-the-art facilities.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                isAnnual ? 'bg-orange-500' : 'bg-gray-200'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
              <span className="ml-1 text-orange-500 font-bold">(Save 17%)</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {plans.map((plan, index) => (
            <motion.div key={plan.name} variants={itemVariants}>
              <Card className={`relative h-full ${
                plan.popular 
                  ? 'border-orange-500 border-2 shadow-2xl scale-105' 
                  : 'border-gray-200 hover:shadow-xl'
              } transition-all duration-300 overflow-hidden`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-2 text-sm font-medium">
                    <Star className="inline h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                )}

                <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-2">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="mt-6">
                    <div className="flex items-center justify-center">
                      <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-600 ml-2">
                        /{isAnnual ? 'year' : 'month'}
                      </span>
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-orange-500 font-medium mt-1">
                        Save ${(plan.monthlyPrice * 12) - plan.annualPrice} per year
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <Button 
                    variant={plan.popular ? "gym" : "gymOutline"} 
                    className="w-full mb-6"
                    size="lg"
                  >
                    {plan.popular && <Zap className="mr-2 h-4 w-4" />}
                    Get Started
                  </Button>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">What's included:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.limitations.length > 0 && (
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Limitations:</h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 flex items-center justify-center">
                                <div className="h-1 w-3 bg-gray-400 rounded" />
                              </div>
                              <span className="text-gray-500 text-sm">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 p-8 bg-gray-50 rounded-2xl"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              30-Day Money-Back Guarantee
            </h3>
            <p className="text-gray-600">
              Not satisfied with your membership? Get a full refund within the first 30 days, 
              no questions asked. We're confident you'll love your fitness journey with us.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;