"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";


const Contact = () => {
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSeRgIsKxO-q_vjWaMurFo5Noh9x8iig6a_n7j-1ky_5Ehq0JQ/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );
      setSuccessMsg(" Thank you for submitting!");
      form.reset();
    } catch (error) {
      setSuccessMsg(" Submission failed. Please try again.");
    }
  };

  // ⏳ Auto-dismiss after 3 seconds
  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => setSuccessMsg(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMsg]);

  return (
    <div className="relative min-h-screen w-full bg-transparent">
      {/* Animated Success Message */}
      <AnimatePresence>
        {successMsg && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-xl shadow-lg z-50 font-kanit flex items-center gap-4"
          >
            <span className="flex-1">{successMsg}</span>
            <button
              onClick={() => setSuccessMsg("")}
              className="text-white hover:text-red-600 transition"
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/50 via-chaotic-blue/20 to-transparent z-0 pointer-events-none" />
      <Navbar />

      <main className="pt-28 pb-16 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold font-syne mb-8">
                Get In Touch
              </h1>
              <p className="text-lg font-kanit text-gray-700 mb-8">
                Ready to boost your business with proven marketing strategies? Fill out the form, and our team will get back to you within 24 hours.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-chaotic-blue shadow">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold">Phone</h3>
                    <a
                      href="tel:9541457327"
                      className="text-gray-700 font-kanit underline hover:text-chaotic-blue transition"
                    >
                      9541457327
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-chaotic-blue shadow">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold">Email</h3>
                    <a
                      href="mailto:info@consultingmdm.com"
                      className="text-gray-700 font-kanit underline hover:text-chaotic-blue transition"
                    >
                      chaoticjack.in@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-chaotic-blue shadow">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold">Address</h3>
                    <p className="text-gray-700 font-kanit">Delhi, India</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="font-kanit text-sm text-gray-500">
                  Prefer WhatsApp?{" "}
                  <a
                    href="https://wa.me/919541457327"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-chaotic-blue underline"
                  >
                    Chat with us
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-chaotic-blue/10 flex flex-col justify-center max-w-xl mx-auto transition-all duration-300 hover:shadow-chaotic-blue/20">
              <h2 className="text-2xl font-syne font-bold mb-6 text-chaotic-blue">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-kanit">Your Name</label>
                    <Input
                      id="name"
                      name="entry.2005914039"
                      placeholder="John Doe"
                      required
                      className="rounded-xl border-gray-200 font-kanit bg-white/70 focus:ring-chaotic-blue focus:border-chaotic-blue transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-kanit">Email</label>
                    <Input
                      id="email"
                      type="email"
                      name="entry.1611196352"
                      placeholder="john@example.com"
                      required
                      className="rounded-xl border-gray-200 font-kanit bg-white/70 focus:ring-chaotic-blue focus:border-chaotic-blue transition"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="phone" className="block mb-2 font-kanit">Phone</label>
                    <Input
                      id="phone"
                      type="tel"
                      name="entry.1047193779"
                      placeholder="+1 234 567 8900"
                      required
                      className="rounded-xl border-gray-200 font-kanit bg-white/70 w-full focus:ring-chaotic-blue focus:border-chaotic-blue transition"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 font-kanit">Subject</label>
                  <Input
                    id="subject"
                    name="entry.934418764"
                    placeholder="How can we help?"
                    required
                    className="rounded-xl border-gray-200 font-kanit bg-white/70 focus:ring-chaotic-blue focus:border-chaotic-blue transition"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-kanit">Message</label>
                  <Textarea
                    id="message"
                    name="entry.1573324"
                    placeholder="Tell us about your project..."
                    required
                    className="rounded-xl border-gray-200 font-kanit bg-white/70 min-h-[150px] focus:ring-chaotic-blue focus:border-chaotic-blue transition"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-xl bg-chaotic-blue text-white font-kanit text-lg py-3 shadow-lg hover:bg-black hover:text-white transition-colors"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />

    </div>
  );
};

export default Contact;