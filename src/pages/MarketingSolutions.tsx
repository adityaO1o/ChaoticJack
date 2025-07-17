import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerSection from "@/components/PartnerSection";
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
  Phone,
  X,
  Globe
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
  {
    title: "Website Development",
    description:
      "We craft responsive, user-friendly websites tailored to your brand's needs. From design to deployment, we ensure a seamless digital presence.",
    icon: <Globe className="text-chaotic-blue" size={28} />
  },
  {
    title: "Paid Search Marketing",
    description:
      "Tailored ad campaigns to drive measurable ROI and meet your specific business goals.",
    icon: <Banknote className="text-chaotic-blue" size={28} />
  },
  {
    title: "Search Engine Optimization",
    description:
      "Stay at the top of search results, attract new customers, and re-engage loyal ones.",
    icon: <Search className="text-chaotic-blue" size={28} />
  },
  {
    title: "Email Marketing",
    description:
      "Reach your audience directly with highly personalized email campaigns.",
    icon: <Mail className="text-chaotic-blue" size={28} />
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "Maximize the value of every website visit through targeted improvements and A/B testing.",
    icon: <TrendingUp className="text-chaotic-blue" size={28} />
  },
  {
    title: "Social Media Marketing",
    description:
      "Build brand awareness and engage your audience through strategic content and management.",
    icon: <Smartphone className="text-chaotic-blue" size={28} />
  },
  {
    title: "Google Shopping",
    description:
      "Perfect for eCommerce brands — increase visibility and sales through smart product listings.",
    icon: <ShoppingCart className="text-chaotic-blue" size={28} />
  },
  {
    title: "Amazon Marketing",
    description:
      "Stand out on the world's largest eCommerce platform with optimized listings and keyword strategies.",
    icon: <Package className="text-chaotic-blue" size={28} />
  }
];

const stats = [
  "3% of Top Google Advertisers",
  "100% Growth Across Clients",
  "₹15+ Crores in Managed Ad Budgets",
  "282,000+ Leads Generated"
];

const MarketingSolutions = () => {
  const [formData, setFormData] = useState({ phone: '', email: '' });
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Function to handle WhatsApp message for service inquiry
  const handleServiceInquiry = (service) => {
    const message = `Hi! I'm interested in learning more about your ${service.title} service.

Service Details:
${service.description}

Please provide more information about:
- Pricing
- Timeline
- Process
- Portfolio examples

Looking forward to hearing from you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919541457327?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

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
    <div className="min-h-screen bg-gradient-to-br from-yellow-400/50 via-chaotic-blue/20 to-transparent relative">
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

      <main className="pt-28 pb-16">
        {/* HERO SECTION */}
        <section className="container mx-auto px-4 md:px-6 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-syne mb-6">
                Solutions for <span className="text-chaotic-blue">Business Growth</span>
              </h1>
              <p className="text-lg font-kanit text-gray-700 mb-8">
                Chaotic Jack sits at the intersection of creativity and performance. Our team combines innovative thinking with paid media expertise to deliver powerful results and real ROI.
              </p>
              {/* Responsive Form */}
              <form
                onSubmit={handleSubmit}
                className="bg-white p-3 rounded-[20px_20px_0px_20px] border-2 border-black shadow-lg
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
            <div className="relative h-[400px] rounded-md overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-chaotic-blue/40 to-transparent z-20"></div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Marketing Solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-syne mb-6">
                Customer-First Strategies That Drive <span className="text-chaotic-blue">Growth</span>
              </h2>
              <p className="text-lg font-kanit text-gray-700">
                We don't believe in one-size-fits-all marketing. Instead, we focus on personalized experiences and data-driven solutions to grow your business from the ground up.
              </p>
            </div>
            <div className="mb-12">
              <h3 className="text-2xl font-syne font-bold text-center mb-10 flex items-center justify-center gap-2">
                <Lightbulb className="text-chaotic-blue" size={24} />
                Our Core Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 group">
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-chaotic-blue"></div>
                        <div className="absolute top-0 left-0 w-0 h-full bg-yellow-400 transition-all duration-300 group-hover:w-1.5"></div>
                        <div className="p-6 pl-8">
                          <div className="flex items-start gap-4">
                            <div className="mt-1">{service.icon}</div>
                            <div>
                              <h4 className="text-xl font-syne font-bold mb-2">{service.title}</h4>
                              <p className="text-gray-700 font-kanit mb-4">{service.description}</p>
                              <Button 
                                variant="link" 
                                className="p-0 h-auto font-kanit text-chaotic-blue hover:text-chaotic-blue/80"
                                onClick={() => handleServiceInquiry(service)}
                              >
                                LEARN MORE <ArrowRight className="ml-1 h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Partners */}
        <PartnerSection className="mt-10" />

        {/* STATS & CTA SECTION */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className=" p-8 md:p-12 rounded-sm">
            <h2 className="text-2xl md:text-3xl font-syne font-bold mb-6 text-center flex items-center justify-center gap-2">
              We Are <span className="text-chaotic-blue">Committed</span> to Your Growth
            </h2>
            <p className="text-lg font-kanit text-gray-700 text-center mb-10 max-w-3xl mx-auto">
              At Chaotic Jack, we craft digital strategies that deliver. Whether simple or complex, we help brands think bigger, act smarter, and grow faster.
            </p>
            <h3 className="text-xl font-syne font-bold text-center mb-8 flex items-center justify-center gap-2">
              <TrendingUp className="text-chaotic-blue" size={22} />
              Real Results We're Proud Of:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-sm shadow-md text-center relative overflow-hidden group">
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-chaotic-blue transition-all duration-500 group-hover:w-full"></div>
                  <p className="font-syne font-bold text-lg">{stat}</p>
                </div>
              ))}
            </div>
            <div className="text-center mb-10">
              <h3 className="text-xl font-syne font-bold mb-3">Ready to Grow Your Brand?</h3>
              <p className="text-gray-700 font-kanit text-sm mb-6">Let us show you what real digital performance looks like.</p>
              <div className="flex justify-center mb-6">
                <a
                  href="tel:9541457327"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-chaotic-blue rounded-[10px_10px_10px_10px] text-white font-bold text-base shadow-lg tracking-wide transition-colors duration-200 hover:bg-black focus:bg-chaotic-blue cursor-pointer"
                  aria-label="Call us at 9541457327"
                >
                  <Phone className="w-5 h-5" />
                  Let's Talk – <span className="font-mono tracking-tight">9541457327</span>
                </a>
              </div>
              {/* Cool Form */}
              <form
                onSubmit={handleSubmit}
                className="bg-white p-3 rounded-[20px_20px_20px_20px] border-2 border-black shadow-lg flex flex-col md:flex-row gap-2 md:gap-0 overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02] w-full md:w-[50vw] mx-auto"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex-1 py-2 px-4 focus:outline-none font-kanit text-black placeholder-gray-500 rounded-t-xl md:rounded-t-none md:rounded-l-xl"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 py-2 px-4 focus:outline-none font-kanit text-black placeholder-gray-500 border-t md:border-t-0 md:border-l border-black rounded-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-black text-sm text-white border-none hover:bg-chaotic-blue transition-colors px-4 py-2 font-kanit w-full md:w-auto rounded-xl"
                  disabled={submitting}
                >
                  {submitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>

              {errorMsg && <p className="text-red-600 text-sm mt-2">{errorMsg}</p>}
              <div className="flex flex-col items-center mt-4 mb-8">
                <h3 className="text-sm font-syne font-bold mb-2">
                  A PARTNER NOT A VENDOR
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MarketingSolutions;
