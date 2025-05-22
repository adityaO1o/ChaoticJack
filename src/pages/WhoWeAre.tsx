"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PartnerSection from "@/components/PartnerSection";
import { ValueCard, ServiceProviderCard } from "@/components/EnhancedCards";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const values = [
    {
      title: "Transparency",
      description: "No fluff, just results. We say what we do, and do what we say.",
      icon: <span className="text-3xl">💎</span>,
    },
    {
      title: "Integrity",
      description: "We earn trust through consistency, honesty, and results.",
      icon: <span className="text-3xl">🤝</span>,
    },
    {
      title: "Simplicity",
      description: "We simplify the complex. No jargon, just clarity and execution.",
      icon: <span className="text-3xl">✨</span>,
    },
    {
      title: "Performance",
      description: "Every strategy, campaign, and decision is built to drive real growth.",
      icon: <span className="text-3xl">📈</span>,
    },
  ];

  const services = [
    "Paid Search Marketing",
    "SEO",
    "Email Marketing",
    "Conversion Rate Optimization",
    "Social Media",
    "Google Shopping",
    "Influencer Marketing",
    "Amazon Marketing",
  ];

  const team = [
    { name: "Aditya Sharma", role: "CEO & Founder" },
    { name: "Stella Boone", role: "Operations Manager" },
    { name: "Fannie Palmer", role: "VP of Sales" },
    { name: "Arthur Price", role: "Lead Digital Strategist" },
  ];

  const testimonials = [
    "Chaotic Jack helped us scale fast with targeted campaigns and real insights.",
    "ROI-focused and results-driven — truly game-changing.",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/50 via-chaotic-blue/20 to-transparent z-0 min-h-screen bg-white">
      <Navbar />

      <main className="pt-28 pb-16">
        <section className="relative">
          <div className="container mx-auto px-4 md:px-6 mb-16 relative z-10 pt-8">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold font-syne mb-8">
                <span className="text-chaotic-blue">🙌</span> Who We Are
              </h1>
              <h2 className="text-2xl md:text-3xl font-syne font-bold mb-6">
                Digital Marketing Solutions Designed to Drive Revenue
              </h2>
              <p className="text-lg font-kanit text-gray-700 mb-8">
                Founded with a belief in the power of marketing to transform businesses, Chaotic Jack has evolved from working with entertainment brands to partnering with high-growth startups and industry leaders globally. Our approach is rooted in creativity, strategy, and performance — helping brands dominate in the digital world.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-syne font-bold text-center mb-10">
              <span className="text-chaotic-blue">💎</span> Our Values
            </h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {values.map((value, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <ValueCard {...value} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-6 py-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-syne font-bold mb-8">
                <span className="text-chaotic-blue">🎯</span> Marketing Solutions Provider
              </h2>
              <p className="text-lg font-kanit text-gray-700 mb-8">
                We don't just offer services — we build integrated digital ecosystems. Our full-service strategies are designed to combine the power of multiple channels to generate visibility, conversions, and revenue.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <ServiceProviderCard title={service} />
                  </motion.div>
                ))}
              </div>

              <div className="bg-chaotic-blue/5 p-6 rounded-lg border-l-4 border-chaotic-blue">
                <motion.div
                  className="flex items-center gap-3 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="bg-chaotic-blue text-white p-2 rounded-full">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-syne font-bold">Integrated Approach to Digital Marketing</h3>
                </motion.div>
                <p className="font-kanit text-gray-700 pl-9">
                  Our cross-channel expertise means we can create cohesive strategies that maximize your marketing budget and deliver consistent messaging across all touchpoints.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-syne font-bold text-center mb-10">
              <span className="text-chaotic-blue">👥</span> Our Team
            </h2>
            <h3 className="text-xl font-syne font-medium text-center mb-10">
              Meet the Experts Behind the Strategy
            </h3>
            <p className="text-lg font-kanit text-gray-700 text-center mb-10 max-w-3xl mx-auto">
              A team of passionate marketers, strategists, and creators focused on your brand's growth.
            </p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {team.map((member, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-none">
                    <div className="relative h-52">
                      <div className="h-32 w-full bg-gradient-to-r from-chaotic-blue to-blue-400"></div>
                      <div className="absolute top-16 inset-x-0 flex justify-center">
                        <div className="w-32 h-32 bg-white rounded-full border-4 border-white shadow-lg">
                          <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-500">
                            {member.name.charAt(0)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="text-center pt-0 mt-4">
                      <h4 className="font-syne font-bold text-xl">{member.name}</h4>
                      <p className="text-sm font-kanit text-gray-600">{member.role}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="text-center mt-10 font-kanit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-chaotic-blue">🏆</span> Recognized by top platforms and loved by 5000+ clients.
            </motion.p>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="bg-chaotic-blue/10 p-8 md:p-12 rounded-sm">
            <div className="text-center mb-8">
              <p className="font-kanit mb-2">📞 Let's Talk – 9541457327</p>
              <form onSubmit={handleSubmit} className="mt-4 animate-slide-up">
                <div className="w-full flex justify-center">
                  <div className="w-[50vw] max-w-full bg-white p-3 rounded-[20px_20px_20px_0px] border-2 border-black shadow-lg flex overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02] mb-10">
                    <input
                      type="email"
                      placeholder="Email"
                      className="flex-1 py-2 px-4 focus:outline-none rounded-l-xl font-kanit"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button
                      type="submit"
                      className="bg-black text-white border-none hover:bg-chaotic-blue transition-colors rounded-none px-8 font-kanit"
                    >
                      NEXT
                    </Button>
                  </div>
                </div>
              </form>

              <p className="text-sm font-kanit text-gray-700">A Partner, Not Just a Vendor</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-syne font-bold text-center mb-6">
                <span className="text-chaotic-blue">⭐</span> Our Clients Say It Best
              </h3>
              <p className="text-center text-sm font-kanit text-gray-600 mb-6">5000+ verified client reviews</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                  >
                    <div className="bg-white p-6 rounded-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex justify-center mb-4">
                        <Badge className="bg-black text-black">⭐⭐⭐⭐⭐</Badge>
                      </div>
                      <p className="text-center font-kanit">"{testimonial}"</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <PartnerSection className="mt-10" />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WhoWeAre;
