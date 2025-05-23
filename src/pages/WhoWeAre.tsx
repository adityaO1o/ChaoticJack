import React, { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Banknote,
  Search,
  Mail,
  TrendingUp,
  Smartphone,
  ShoppingCart,
  Star,
  Package,
  Lightbulb,
  Globe,
  Users,
  Handshake,
  Gem,
  Sparkles,
  LineChart,
  Target,
  Layers,
  Rocket,
  CheckCircle2,
  MessageCircle,
  Phone
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PartnerSection from "@/components/PartnerSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import ArrowCurve from "@/components/ArrowCurve";

interface Service {
  name: string;
  icon: React.ReactNode;
}

interface TeamMember {
  name: string;
  role: string;
}

const values = [
  {
    title: "Transparency",
    description: "No fluff, just results. We say what we do, and do what we say.",
    icon: <Gem className="text-chaotic-blue" size={32} />,
  },
  {
    title: "Integrity",
    description: "We earn trust through consistency, honesty, and results.",
    icon: <Handshake className="text-chaotic-blue" size={32} />,
  },
  {
    title: "Simplicity",
    description: "We simplify the complex. No jargon, just clarity and execution.",
    icon: <Sparkles className="text-chaotic-blue" size={32} />,
  },
  {
    title: "Performance",
    description: "Every strategy, campaign, and decision is built to drive real growth.",
    icon: <LineChart className="text-chaotic-blue" size={32} />,
  },
];

const whyChooseUs = [
  {
    icon: <Star className="text-chaotic-blue" size={28} />,
    title: "Proven Track Record",
    description: "5000+ clients, 100% growth rate, and ₹15+ crores in managed ad budgets."
  },
  {
    icon: <Users className="text-chaotic-blue" size={28} />,
    title: "Dedicated Team",
    description: "A passionate group of strategists, creators, and analysts focused on your brand."
  },
  {
    icon: <Lightbulb className="text-chaotic-blue" size={28} />,
    title: "Creative + Data-Driven",
    description: "We blend bold ideas with analytics to deliver measurable results."
  },
];

const processSteps = [
  {
    icon: <Target className="text-chaotic-blue" size={28} />,
    title: "Discover",
    description: "We dive deep to understand your business, audience, and goals."
  },
  {
    icon: <Layers className="text-chaotic-blue" size={28} />,
    title: "Strategize",
    description: "Custom strategies built for your market and growth ambitions."
  },
  {
    icon: <Rocket className="text-chaotic-blue" size={28} />,
    title: "Execute",
    description: "Launch, optimize, and scale campaigns across digital channels."
  },
  {
    icon: <CheckCircle2 className="text-chaotic-blue" size={28} />,
    title: "Measure",
    description: "Transparent reporting and insights to maximize ROI."
  },
];

const services: Service[] = [
  {
    name: "Paid Search Marketing",
    icon: <Banknote className="text-chaotic-blue" size={38} />,
  },
  {
    name: "SEO",
    icon: <Search className="text-chaotic-blue" size={38} />,
  },
  {
    name: "Email Marketing",
    icon: <Mail className="text-chaotic-blue" size={38} />,
  },
  {
    name: "Conversion Rate Optimization",
    icon: <TrendingUp className="text-chaotic-blue" size={38} />,
  },
  {
    name: "Social Media",
    icon: <Smartphone className="text-chaotic-blue" size={38} />,
  },
  {
    name: "Google Shopping",
    icon: <ShoppingCart className="text-chaotic-blue" size={38} />,
  },
  {
    name: "Influencer Marketing",
    icon: <Star className="text-chaotic-blue" size={38} />,
  },
  {
    name: "Amazon Marketing",
    icon: <Package className="text-chaotic-blue" size={38} />,
  },
];

const team: TeamMember[] = [
  { name: "Aditya Sharma", role: "CEO & Founder" },
  { name: "Stella Boone", role: "Operations Manager" },
  { name: "Fannie Palmer", role: "VP of Sales" },
  { name: "Arthur Price", role: "Lead Digital Strategist" },
];

const testimonials = [
  "Chaotic Jack helped us scale fast with targeted campaigns and real insights.",
  "ROI-focused and results-driven — truly game-changing.",
];

const fadeUpStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0.0, 0.2, 1] },
  },
};

const MainPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail("");
    setPhone("");
  };

  return (
    <div className="relative min-h-screen bg-transparent">


      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/50 via-chaotic-blue/20 to-transparent z-0 pointer-events-none" />

      <Navbar />

      <main className="relative z-10 pt-28 pb-16">
        {/* HERO */}
        <section className="relative">
          <div className="container mx-auto px-4 md:px-6 mb-16 pt-8">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold font-syne mb-8 flex items-center gap-3">
                <Users className="text-chaotic-blue" size={36} />
                Who We Are
              </h1>
              <h2 className="text-2xl md:text-3xl font-syne font-bold mb-6">
                Digital Marketing Solutions Designed to Drive Revenue
              </h2>
              <p className="text-lg font-kanit text-gray-700 mb-8">
                Founded on the belief that marketing transforms businesses, Chaotic Jack partners with high-growth startups and industry leaders globally. We combine creative vision with performance expertise to help brands dominate in the digital world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* WHY CHOOSE US with fade-up animation */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-syne font-bold text-center mb-8">
              Why Choose Us
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
              variants={fadeUpStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {whyChooseUs.map((item, idx) => (
                <motion.div key={idx} variants={fadeUpItem}>
                  <Card className="bg-white shadow-sm border-none hover:shadow-md transition-shadow duration-300">
                    <CardContent className="flex flex-col items-center p-8">
                      <div className="mb-4">{item.icon}</div>
                      <h3 className="font-syne font-bold text-xl mb-2 text-center">{item.title}</h3>
                      <p className="text-gray-700 text-center font-kanit">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* OUR CORE VALUES with interaction */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-syne font-bold text-center mb-10">
              Our Core Values
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              variants={fadeUpStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpItem}
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                    backgroundColor: "#f1f5f9",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <Card className="bg-white shadow-sm border-none hover:shadow-md transition-shadow duration-300 cursor-pointer">
                    <CardContent className="flex gap-4 items-start p-8">
                      <motion.div
                        whileHover={{ rotate: 8, scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {value.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-syne font-bold text-lg mb-1">{value.title}</h4>
                        <p className="text-gray-700 font-kanit">{value.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* HOW WE WORK - interactive map/track with arrows */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-syne font-bold text-center mb-10 flex items-center justify-center gap-2">
              <Lightbulb className="text-chaotic-blue" size={24} />
              How We Work
            </h2>
            {/* Track with arrows */}
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 max-w-5xl mx-auto">
              {processSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <motion.div
                    className="relative flex flex-col items-center group w-full md:w-1/4"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: idx * 0.18 }}
                  >
                    <motion.div
                      className="bg-white rounded-full flex items-center justify-center"
                      style={{ width: 56, height: 56 }}
                      whileHover={{ scale: 1.12, boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {step.icon}
                    </motion.div>
                    <div className="mt-6 text-center">
                      <h4 className="font-syne font-bold text-lg mb-1">{step.title}</h4>
                      <p className="text-gray-700 font-kanit text-sm">{step.description}</p>
                    </div>
                  </motion.div>
                  {/* Arrow between steps (not after last step) */}
                  {idx < processSteps.length - 1 && (
                    <div className="hidden md:flex flex-1 justify-center items-center">
                      <ArrowCurve className="w-28 h-20" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* OUR SERVICES with icons/SVGs */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-syne font-bold text-center mb-10">
              Our Services
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {services.map((service, idx) => (
                <Card key={idx} className="bg-white shadow-sm border-none hover:shadow-md transition-shadow duration-300 flex flex-col items-center py-8 px-2">
                  <div className="mb-4">{service.icon}</div>
                  <h4 className="font-syne font-bold text-md text-center">{service.name}</h4>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-syne font-bold text-center mb-8">
              Meet Our Team
            </h2>
            <p className="text-lg font-kanit text-gray-700 text-center mb-10 max-w-3xl mx-auto">
              A team of passionate marketers, strategists, and creators focused on your brand's growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="bg-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-none">
                  <div className="relative h-52">
                    <div className="h-32 w-full bg-gradient-to-r from-chaotic-blue to-blue-400"></div>
                    <div className="absolute top-16 inset-x-0 flex justify-center">
                      <div className="w-32 h-32 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center text-2xl font-bold text-chaotic-blue">
                        {member.name.charAt(0)}
                      </div>
                    </div>
                  </div>
                  <CardContent className="text-center pt-0 mt-4">
                    <h4 className="font-syne font-bold text-xl">{member.name}</h4>
                    <p className="text-sm font-kanit text-gray-600">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS & CTA */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="bg-chaotic-blue/10 p-8 md:p-12 rounded-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-syne font-bold mb-2 flex items-center justify-center gap-2">
                <MessageCircle className="text-chaotic-blue" size={22} />
                What Our Clients Say
              </h3>
              <p className="text-sm font-kanit text-gray-700 mb-4">5000+ verified client reviews</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {testimonials.map((testimonial, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 + 0.5, duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="bg-white p-6 rounded-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex justify-center mb-4">
                        <span className="bg-black text-white rounded-full px-3 py-1 font-bold text-sm">
                          ★★★★★
                        </span>
                      </div>
                      <p className="text-center font-kanit">"{testimonial}"</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* CTA */}
            <div className="text-center mt-10">
              <h4 className="font-syne font-bold text-xl mb-2 flex items-center justify-center gap-2">
                <Phone className="text-chaotic-blue" size={20} />
                Book a Free Strategy Session
              </h4>
              <p className="font-kanit text-gray-700 mb-4">
                Ready to grow? Let’s talk about your goals and how we can help you achieve them.
              </p>
              <form onSubmit={handleSubmit} className="mt-4 flex flex-col md:flex-row gap-2 justify-center items-center max-w-xl mx-auto">
                <div className="flex-1 w-full">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full py-2 px-4 border border-gray-300 rounded-l-xl focus:outline-none font-kanit"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex-1 w-full">
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full py-2 px-4 border border-gray-300 rounded-r-xl focus:outline-none font-kanit"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-chaotic-blue text-white px-8 py-2 rounded-xl font-kanit hover:bg-chaotic-blue/90 transition-colors"
                >
                  <Mail className="mr-2 h-4 w-4" /> Get My Free Plan
                </Button>
              </form>
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

export default MainPage;
