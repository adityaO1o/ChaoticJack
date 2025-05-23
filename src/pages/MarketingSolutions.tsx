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
  Globe
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const services = [
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
    title: "Influencer Marketing",
    description:
      "Leverage our curated network of influencers to amplify your brand message.",
    icon: <Star className="text-chaotic-blue" size={28} />
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
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', { email, phone });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400/50 via-chaotic-blue/20 to-transparent relative">
      <Navbar />

      <main className="pt-28 pb-16">
        {/* HERO SECTION */}
        <section className="container mx-auto px-4 md:px-6 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-syne mb-6">
                Solutions for Business Growth
              </h1>
              <p className="text-lg font-kanit text-gray-700 mb-8">
                Chaotic Jack sits at the intersection of creativity and performance. Our team combines innovative thinking with paid media expertise to deliver powerful results and real ROI.
              </p>
              {/* Responsive Form */}
              <form onSubmit={handleSubmit} className="mt-4 animate-slide-up">
                <div
                  className="
      bg-white p-3 rounded-[20px_20px_20px_0px] border-2 border-black shadow-lg
      flex flex-col md:flex-row gap-2 md:gap-0
      overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]
    "
                >
                  <input
                    type="email"
                    placeholder="Email"
                    className="
        flex-1 py-2 px-4 focus:outline-none font-kanit text-black placeholder-gray-500
        rounded-t-xl md:rounded-t-none md:rounded-l-xl
      "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <input
                    type="tel"
                    placeholder="Phone"
                    className="
        flex-1 py-2 px-4 focus:outline-none font-kanit text-black placeholder-gray-500
        border-t md:border-t-0 md:border-l border-black
        rounded-none
      "
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <button
                    type="submit"
                    className="
        bg-black text-sm text-white border-none hover:bg-chaotic-blue transition-colors
        px-4 font-kanit w-full md:w-auto
        rounded-b-xl md:rounded-b-none md:rounded-r-xl
      "
                  >
                    GET A FREE AUDIT
                  </button>
                </div>
              </form>
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
                Customer-First Strategies That Drive Growth
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
                              <Button variant="link" className="p-0 h-auto font-kanit text-chaotic-blue hover:text-chaotic-blue/80">
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

        {/* STATS & CTA SECTION */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="bg-chaotic-blue/10 p-8 md:p-12 rounded-sm">
            <h2 className="text-2xl md:text-3xl font-syne font-bold mb-6 text-center flex items-center justify-center gap-2">
              <Globe className="text-chaotic-blue" size={24} />
              We Are Committed to Your Growth
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
            <div className="text-center">
              {/* Responsive Form */}
              <form onSubmit={handleSubmit} className="mt-4 animate-slide-up">
                <div
                  className="
      bg-white p-3 rounded-[20px_20px_20px_0px] border-2 border-black shadow-lg
      flex flex-col md:flex-row gap-2 md:gap-0
      overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]
    "
                >
                  <input
                    type="email"
                    placeholder="Email"
                    className="
        flex-1 py-2 px-4 focus:outline-none font-kanit text-black placeholder-gray-500
        rounded-t-xl md:rounded-t-none md:rounded-l-xl
      "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <input
                    type="tel"
                    placeholder="Phone"
                    className="
        flex-1 py-2 px-4 focus:outline-none font-kanit text-black placeholder-gray-500
        border-t md:border-t-0 md:border-l border-black
        rounded-none
      "
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <button
                    type="submit"
                    className="
        bg-black text-sm text-white border-none hover:bg-chaotic-blue transition-colors
        px-4 font-kanit w-full md:w-auto
        rounded-b-xl md:rounded-b-none md:rounded-r-xl
      "
                  >
                    GET A FREE AUDIT
                  </button>
                </div>
              </form>
              <p className="mt-4 text-m font-syne text-gray-700">A Partner, Not Just a Vendor</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MarketingSolutions;
