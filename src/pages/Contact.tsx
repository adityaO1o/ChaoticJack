import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="relative min-h-screen w-full bg-transparent">
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
                  <div className="w-12 h-12 rounded-full bg-chaotic-blue/10 flex items-center justify-center text-chaotic-blue shadow">
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
                  <div className="w-12 h-12 rounded-full bg-chaotic-blue/10 flex items-center justify-center text-chaotic-blue shadow">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold">Email</h3>
                    <a
                      href="mailto:info@consultingmdm.com"
                      className="text-gray-700 font-kanit underline hover:text-chaotic-blue transition"
                    >
                      info@consultingmdm.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-chaotic-blue/10 flex items-center justify-center text-chaotic-blue shadow">
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
                  Prefer WhatsApp? <a href="https://wa.me/919541457327" target="_blank" rel="noopener noreferrer" className="text-chaotic-blue underline">Chat with us</a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="
              bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-chaotic-blue/10
              flex flex-col justify-center
              max-w-xl mx-auto
              transition-all duration-300
              hover:shadow-chaotic-blue/20
            ">
              <h2 className="text-2xl font-syne font-bold mb-6 text-chaotic-blue">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-kanit">Your Name</label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="rounded-xl border-gray-200 font-kanit bg-white/70 focus:ring-chaotic-blue focus:border-chaotic-blue transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-kanit">Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="rounded-xl border-gray-200 font-kanit bg-white/70 focus:ring-chaotic-blue focus:border-chaotic-blue transition"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 font-kanit">Subject</label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    className="rounded-xl border-gray-200 font-kanit bg-white/70 focus:ring-chaotic-blue focus:border-chaotic-blue transition"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-kanit">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    className="rounded-xl border-gray-200 font-kanit bg-white/70 min-h-[150px] focus:ring-chaotic-blue focus:border-chaotic-blue transition"
                  />
                </div>
                <Button
                  type="submit"
                  className="
                    w-full rounded-xl bg-chaotic-blue text-white font-kanit text-lg py-3
                    shadow-lg hover:bg-black hover:text-white transition-colors
                  "
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
