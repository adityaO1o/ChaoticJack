import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import PartnerSection from "@/components/PartnerSection";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnhancedPerformanceMetrics from "@/components/EnhancedPerformanceMetrics";
import { ProjectCard } from "@/components/EnhancedCards";
import {
  Search,
  FileText,
  Rocket,
  BarChart2,
  ArrowRight,
  Star,

} from "lucide-react";
import { Users2, Eye, Zap, Handshake, Phone } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';


const clients = [
  {
    name: "Roadies Koffeehouz",
    result: "+40% Ecommerce Growth",
    services: ["Paid Search", "Paid Social", "SEO"],
    image: "https://www.cityairnews.com/uploads/images/image-750x-2022-10-21-10:32:04pm-6352d08c06496.jpg"
  },
  {
    name: "Hamylten-Heights",
    result: "+50% Engagement Rates",
    services: ["Organic Social Media", "Paid Social"],
    image: "https://www.hamylten.com/lovable-uploads/acda84d4-caf4-4264-85f6-e5745cae7620.png"
  },
  {
    name: "MDM Consulting",
    result: "+40% Ecommerce Growth",
    services: ["Paid Search", "Paid Social", "SEO"],
    image: "https://mdmconsulting.in/wp-content/uploads/2023/05/kokokokuiu-e1719152181739.png"
  },
  {
    name: "Vidyapeeth",
    result: "+40% Ecommerce Growth",
    services: ["Paid Search", "Paid Social", "SEO"],
    image: "https://vidyapeeth.org.in/wp-content/uploads/2024/08/admin-ajax.webp"
  },
  {
    name: "The Trident Club",
    result: "+50% Increase in Organic Sessions",
    services: ["Organic Social Media", "Paid Social"],
    image: "https://source.boomplaymusic.com/group10/M00/01/27/8dbb796a705a42d1a100b319543448b9_320_320.jpg"
  },
  {
    name: "CBR Health Care",
    result: "+40% Ecommerce Growth",
    services: ["Paid Search", "Paid Social", "SEO"],
    image: "https://telecrm.in/assets/images/landing-page/healthcare-crm/meta-image.png"
  },
];

const testimonials = [
  {
    quote: "Chaotic Jack helped us scale fast, optimize smart, and grow consistently. Their team is responsive and truly understands digital marketing.",
    name: "Sarah Thompson",
    position: "CMO, Retail Brand",
    company: "FashionVerse",
    stars: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "Every campaign has been ROI-focused. We're seeing tangible results month after month with measurable growth in our key metrics.",
    name: "John Miller",
    position: "Marketing Director",
    company: "TechSolutions Inc.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "Their ability to adapt to changing market conditions and pivot strategies quickly has been invaluable to our business success.",
    name: "Michael Chang",
    position: "Founder",
    company: "GrowthStartup",
    stars: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "What sets Chaotic Jack apart is their combination of analytical prowess and creative thinking. Truly a rare find in the agency world.",
    name: "Priya Sharma",
    position: "Digital Marketing Lead",
    company: "InnovateNow",
    stars: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const agencyValues = [
  {
    title: "Client-First Philosophy",
    description: "We treat your business as our own, genuinely prioritizing your growth, success, and ROI .",
    icon: <Users2 className="text-chaotic-blue" size={32} aria-label="Client-First Philosophy" />
  },
  {
    title: "Transparent Reporting",
    description: "Every campaign, every metric—shared in real time, so you’re always in the loop.",
    icon: <Eye className="text-chaotic-blue" size={32} aria-label="Transparent Reporting" />
  },
  {
    title: "Continuous Innovation",
    description: "We stay ahead of industry trends, using the latest tools and creative strategies.",
    icon: <Zap className="text-chaotic-blue" size={32} aria-label="Continuous Innovation" />
  },
  {
    title: "Teamwork & Collaboration",
    description: "Our diverse team of strategists, creatives, and analysts work as an extension of yours.",
    icon: <Handshake className="text-chaotic-blue" size={32} aria-label="Teamwork & Collaboration" />
  }
];

// Update your processSteps array to use Lucide icons:
const processSteps = [
  {
    title: "Discovery",
    description: "We listen, audit, and set clear objectives together.",
    icon: <Search className="text-chaotic-blue w-8 h-8" aria-label="Discovery" />
  },
  {
    title: "Strategy",
    description: "Custom plans using data, creativity, and best-in-class tools.",
    icon: <FileText className="text-chaotic-blue w-8 h-8" aria-label="Strategy" />
  },
  {
    title: "Execution",
    description: "Agile campaign launches, optimization, and creative delivery.",
    icon: <Rocket className="text-chaotic-blue w-8 h-8" aria-label="Execution" />
  },
  {
    title: "Growth",
    description: "Analyze, report, and scale what works for long-term success.",
    icon: <BarChart2 className="text-chaotic-blue w-8 h-8" aria-label="Growth" />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Work = () => {
  const [formData, setFormData] = useState({ phone: '', email: '' });
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');

    if (!formData.phone || !formData.email) {
      setErrorMsg('Please fill in all fields.');
      return;
    }

    setSubmitting(true);

    const formBody = new URLSearchParams({
      'entry.1517572706': formData.phone,
      'entry.1991198582': formData.email,
    });

    try {
      await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSf87gCG5x4ooYJtjINEXKTnRK5ha5nM9BpZGxHfYOSwOg7x9Q/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });

      setSuccessMsg('Thank you! Your enquiry has been sent.');
      setFormData({ phone: '', email: '' });

      setTimeout(() => {
        setSuccessMsg('');
      }, 3000);
    } catch (err) {
      setErrorMsg('Could not connect to server. Please try again.');
    }

    setSubmitting(false);
  };


  return (
    <div className="relative min-h-screen w-full bg-transparent">
      {/* Top Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/50 via-chaotic-blue/20 to-transparent z-0 pointer-events-none" />
      <Navbar />
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
              onClick={() => setSuccessMsg('')}
              className="text-white hover:text-red-600 transition"
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-28 pb-16 relative z-10">
        {/* Hero/Intro */}
        <section className="container mx-auto px-4 md:px-6 mb-16 relative z-10 pt-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-syne mb-6">
              Success Stories
            </h1>
            <h2 className="text-2xl md:text-3xl font-syne font-medium mb-6">
              Delivering Real, Measurable Results
            </h2>
            <p className="text-lg font-kanit text-gray-700 mb-8">
              When you partner with Chaotic Jack, we handle the heavy lifting — so you can focus on what you do best. From traffic to conversions and revenue, we turn digital strategies into business wins.
            </p>
            <p className="text-lg font-kanit text-gray-700 mb-8">
              Whether it's SEO, PPC, web design, social media, or email marketing, our strategies are crafted to drive growth. Here's a look at how we've helped some of the world's biggest brands thrive in the digital landscape.
            </p>
          </motion.div>
        </section>

        {/* Performance Matrix FULL WIDTH */}
        <section className="w-screen max-w-none px-0 md:px-0 mb-16 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="w-full">
            <EnhancedPerformanceMetrics />
          </div>
        </section>

        {/* Agency Values / Behind the Scenes */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-syne font-bold text-center mb-10">
              What Makes Us Different
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {agencyValues.map((value, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
                    <div className="mb-4">{value.icon}</div>
                    <h3 className="font-syne font-bold text-lg mb-2 text-center">{value.title}</h3>
                    <p className="text-gray-700 text-center font-kanit">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How We Work / Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-syne font-bold text-center mb-10">
              Our Process: How We Work
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {processSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center relative min-w-[180px]">
                  <div className="bg-white rounded-full p-4 mb-4 shadow-lg flex items-center justify-center">
                    {step.icon}
                  </div>
                  <h4 className="font-syne font-bold text-md mb-1 text-center">{step.title}</h4>
                  <p className="text-gray-700 text-center font-kanit text-sm mb-4">{step.description}</p>
                  {idx < processSteps.length - 1 && (
                    <div className="hidden md:block absolute right-[-60px] top-8">
                      {/* SVG Curved Arrow */}
                      <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                        <path
                          d="M10 30 C 25 10, 35 10, 50 30"
                          stroke="#2563eb"
                          strokeWidth="2"
                          strokeDasharray="6 6"
                          fill="none"
                          markerEnd="url(#arrowhead)"
                        />
                        <defs>
                          <marker
                            id="arrowhead"
                            markerWidth="10"
                            markerHeight="10"
                            refX="7"
                            refY="5"
                            orient="auto"
                          >
                            <polygon points="0 0, 10 5, 0 10" fill="#2563eb" />
                          </marker>
                        </defs>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Client Success Highlights / Portfolio */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-syne font-bold text-center mb-10">
              Client Success Highlights
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {clients.map((client, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <ProjectCard
                    name={client.name}
                    result={client.result}
                    services={client.services}
                    image={client.image}
                  />
                </motion.div>
              ))}
            </motion.div>
            <div className="text-center">
              <Button
                variant="outline"
                className="rounded-none border border-black text-black hover:bg-black hover:text-white transition-colors font-kanit"
              >
                VIEW OUR FULL PORTFOLIO <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Partners */}
        <PartnerSection className="mt-10" />

        {/* Testimonials / Social Proof */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className=" p-8 md:p-12 rounded-sm">
            <h2 className="text-2xl md:text-3xl font-syne font-bold text-center mb-8">
              What Our Clients Are Saying
            </h2>
            <p className="text-center font-kanit text-gray-700 mb-10 max-w-3xl mx-auto">
              With over 5000+ verified client reviews, our results speak for themselves. From global giants to growth-stage startups, businesses trust Chaotic Jack to deliver digital excellence.
            </p>
            <div className="max-w-4xl mx-auto mb-12">
              <Carousel className="w-full">
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div className="bg-white p-8 rounded-lg shadow-lg">
                        <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                          <div className="w-20 h-20 rounded-full overflow-hidden">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="flex justify-center md:justify-start mb-2">
                              <div className="flex text-yellow-400">
                                {[...Array(testimonial.stars)].map((_, i) => (
                                  <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                              </div>
                            </div>
                            <p className="font-bold text-center md:text-left">{testimonial.name}</p>
                            <p className="text-sm text-gray-600 text-center md:text-left">{testimonial.position}, {testimonial.company}</p>
                          </div>
                        </div>
                        <p className="text-center text-lg font-kanit mb-6 italic">"{testimonial.quote}"</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-2 mt-6">
                  <CarouselPrevious className="static transform-none mx-2 bg-white hover:bg-gray-100 shadow-md" />
                  <CarouselNext className="static transform-none mx-2 bg-white hover:bg-gray-100 shadow-md" />
                </div>
              </Carousel>
            </div>
            <div className="text-center mb-10">
              <h3 className="text-xl font-syne font-bold mb-6">Ready to Grow Your Brand?</h3>
              <p className="font-kanit mb-6">Let us show you what real digital performance looks like.</p>
              <div className="flex justify-center mb-4">
                <a
                  href="tel:9541457327"
                  className="
      inline-flex items-center gap-2 px-4 py-2
      bg-black rounded-[10px_10px_10px_10px] border-2 border-white text-white font-bold text-base shadow-lg tracking-wide 
      transition-colors duration-200
      hover:bg-chaotic-blue focus:bg-chaotic-blue
      cursor-pointer
    "
                  aria-label="Call us at 9541457327"
                >
                  <Phone className="w-5 h-5" />
                  Let’s Talk – <span className="font-mono tracking-tight">9541457327</span>
                </a>
              </div>
              {/* Cool Form */}
              <form
                onSubmit={handleSubmit}
                className="bg-white p-3 rounded-[20px_20px_20px_20px] border-2 border-black shadow-lg
                         flex flex-col md:flex-row gap-2 md:gap-0
                         overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex-1 py-2 px-4 focus:outline-none font-kanit text-black placeholder-gray-500
                           rounded-t-xl md:rounded-t-none md:rounded-l-xl"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 py-2 px-4 focus:outline-none font-kanit text-black placeholder-gray-500
                           border-t md:border-t-0 md:border-l border-black rounded-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-black text-sm text-white border-none hover:bg-chaotic-blue transition-colors
             px-4 py-2 font-kanit w-full md:w-auto 
             rounded-xl"
                  disabled={submitting}
                >
                  {submitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>

              {errorMsg && <p className="text-red-600 text-sm mt-2">{errorMsg}</p>}
            </div>
          </div>
        </section>

        
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Work;
