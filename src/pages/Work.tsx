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
  Users2,
  Eye,
  Zap,
  Handshake,
  Phone,
  X,
  ExternalLink,
  Calendar,
  Code,
  Users
} from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const clients = [
  {
    name: "HyGear Fashion",
    url: "https://hygearfashion.com/",
    result: "+65% Online Sales Growth",
    services: ["E-commerce Development", "SEO", "Social Media Marketing"],
    image: "/hygear.webp",
    description: "A comprehensive fashion e-commerce platform providing trendy clothing solutions for modern consumers.",
    completed: "2024",
    challenge: "Built a scalable e-commerce platform with advanced inventory management and seamless payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    features: ["Advanced Search", "Wishlist Management", "Order Tracking", "Mobile Responsive"],
    feedback: "HyGear Fashion transformed our online presence with exceptional design and functionality."
  },
  {
    name: "Oxygen4India",
    url: "https://oxygen4india.com/",
    result: "+80% Lead Generation",
    services: ["Healthcare Platform", "SEO", "Content Marketing"],
    image: "/oxygen.png",
    description: "Critical healthcare platform connecting patients with oxygen suppliers during emergency situations.",
    completed: "2024",
    challenge: "Developed a real-time platform to handle urgent healthcare requests with location-based services.",
    technologies: ["React", "Firebase", "Google Maps API", "PWA"],
    features: ["Real-time Tracking", "Emergency Alerts", "Location Services", "24/7 Support"],
    feedback: "Oxygen4India's platform was crucial during the pandemic, providing life-saving connections."
  },
  {
    name: "Longfian India",
    url: "https://longfianindia.com/",
    result: "+45% Market Reach",
    services: ["Corporate Website", "SEO", "Digital Marketing"],
    image: "/longfian.png",
    description: "Leading medical equipment manufacturer specializing in oxygen concentrators and healthcare solutions.",
    completed: "2023",
    challenge: "Created a professional corporate website showcasing complex medical products with technical specifications.",
    technologies: ["WordPress", "PHP", "MySQL", "jQuery"],
    features: ["Product Catalog", "Technical Specs", "Dealer Network", "Support Portal"],
    feedback: "Longfian India's new website significantly improved our B2B client engagement and inquiries."
  },
  {
    name: "Goldline Intertrade",
    url: "http://goldlineintertrade.store/",
    result: "+55% Online Revenue",
    services: ["E-commerce Store", "Payment Gateway", "Inventory Management"],
    image: "/goldline.png",
    description: "International trading platform specializing in precious metals and commodities exchange.",
    completed: "2024",
    challenge: "Built a secure trading platform with real-time price updates and multi-currency support.",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    features: ["Real-time Pricing", "Multi-currency", "Secure Trading", "Analytics Dashboard"],
    feedback: "Goldline Intertrade's platform revolutionized our trading operations with excellent security features."
  },
  {
    name: "Roadies Koffe Houz",
    url: "https://roadies-koffe-houz.vercel.app/",
    result: "+70% Online Orders",
    services: ["Restaurant Website", "Online Ordering", "Brand Identity"],
    image: "/roadies.png",
    description: "Modern coffee house platform offering premium coffee experiences with online ordering system.",
    completed: "2024",
    challenge: "Developed an engaging cafe website with seamless online ordering and table reservation system.",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
    features: ["Online Menu", "Order System", "Table Booking", "Loyalty Program"],
    feedback: "Roadies Koffe Houz website perfectly captures our brand essence and boosted online sales significantly."
  },
  {
    name: "Hamylten",
    url: "https://hamylten.com/",
    result: "+60% Customer Engagement",
    services: ["Corporate Branding", "Web Development", "Digital Strategy"],
    image: "/hamylten.png",
    description: "Professional consulting firm providing innovative business solutions and strategic advisory services.",
    completed: "2023",
    challenge: "Created a sophisticated corporate identity with a modern website reflecting professionalism and expertise.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: ["Service Portfolio", "Client Testimonials", "Blog System", "Contact Forms"],
    feedback: "Hamylten's new digital presence elevated our brand image and attracted high-quality clients."
  },
  {
    name: "MDM Consulting",
    url: "https://mdmconsulting.in/",
    result: "+50% Lead Quality",
    services: ["Professional Services", "SEO", "Content Strategy"],
    image: "/mdm.png",
    description: "Strategic consulting firm specializing in business transformation and organizational development.",
    completed: "2024",
    challenge: "Designed a professional platform showcasing complex consulting services with clear value propositions.",
    technologies: ["WordPress", "Custom PHP", "Bootstrap", "MySQL"],
    features: ["Service Showcase", "Case Studies", "Resource Library", "Client Portal"],
    feedback: "MDM Consulting's website effectively communicates our expertise and generates quality business inquiries."
  },
  {
    name: "Vidflyy",
    url: "https://vidflyy-main.vercel.app/",
    result: "+85% User Engagement",
    services: ["Video Platform", "Streaming Technology", "UI/UX Design"],
    image: "/vidflyy.png",
    description: "Innovative video streaming platform providing seamless content delivery and interactive experiences.",
    completed: "2024",
    challenge: "Built a scalable video platform with adaptive streaming and real-time user interactions.",
    technologies: ["React", "Node.js", "WebRTC", "AWS CloudFront"],
    features: ["HD Streaming", "Live Chat", "Content Management", "Analytics"],
    feedback: "Vidflyy's platform delivers exceptional video quality and user experience beyond our expectations."
  },
  {
    name: "Dukaan Steel",
    url: "https://dukaan-steel.vercel.app/",
    result: "+40% B2B Sales",
    services: ["Industrial Website", "Catalog Management", "B2B Portal"],
    image: "/dukaan.png",
    description: "Industrial steel trading platform connecting manufacturers with distributors and end customers.",
    completed: "2024",
    challenge: "Developed a robust B2B platform with complex pricing structures and bulk order management.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    features: ["Product Catalog", "Bulk Pricing", "Quote System", "Inventory Tracking"],
    feedback: "Dukaan Steel's platform streamlined our B2B operations and improved customer relationships."
  },
  {
    name: "KD Engineers",
    url: "https://kdengineers.in/",
    result: "+35% Project Inquiries",
    services: ["Engineering Services", "Portfolio Website", "SEO"],
    image: "/kd.png",
    description: "Professional engineering consultancy providing innovative solutions for infrastructure projects.",
    completed: "2023",
    challenge: "Created a technical portfolio website showcasing complex engineering projects and capabilities.",
    technologies: ["WordPress", "Custom CSS", "PHP", "jQuery"],
    features: ["Project Gallery", "Service Details", "Team Profiles", "Contact System"],
    feedback: "KD Engineers' website effectively showcases our technical expertise and attracts quality projects."
  },
  {
    name: "Innotech India",
    url: "https://innotecindia.in/",
    result: "+55% Technology Adoption",
    services: ["Tech Solutions", "Innovation Platform", "Digital Transformation"],
    image: "/innotech.png",
    description: "Leading technology innovation company providing cutting-edge solutions for digital transformation.",
    completed: "2024",
    challenge: "Built a modern tech platform showcasing innovative solutions with interactive demos.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    features: ["Solution Demos", "Tech Stack", "Innovation Lab", "Client Portal"],
    feedback: "Innotech India's platform perfectly represents our innovative approach and technical capabilities."
  },
  {
    name: "Naina Volt Energy",
    url: "https://nainavoltenergy.com/",
    result: "+75% Green Energy Adoption",
    services: ["Renewable Energy", "Sustainability Platform", "Green Tech"],
    image: "/naina.png",
    description: "Sustainable energy solutions provider focusing on solar power and renewable energy systems.",
    completed: "2024",
    challenge: "Developed an educational platform promoting renewable energy with cost calculators and ROI tools.",
    technologies: ["Vue.js", "Express.js", "MySQL", "Chart.js"],
    features: ["Energy Calculator", "ROI Analysis", "Project Gallery", "Sustainability Metrics"],
    feedback: "Naina Volt Energy's platform educates customers and significantly increased our solar installations."
  },
  {
    name: "Smart World Gems",
    url: "https://smartworldgems.in/",
    result: "+90% Luxury Sales",
    services: ["Luxury E-commerce", "Jewelry Catalog", "Premium Branding"],
    image: "/smartworld.png",
    description: "Premium jewelry and gemstone retailer offering exquisite collections with authentic certifications.",
    completed: "2023",
    challenge: "Created a luxury e-commerce experience with high-quality imagery and secure payment systems.",
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS3"],
    features: ["HD Product Views", "Certification System", "Virtual Try-on", "Secure Checkout"],
    feedback: "Smart World Gems' platform elegantly showcases our premium jewelry and boosted online luxury sales."
  },
  {
    name: "AS Precision",
    url: "https://asprecision.in/",
    result: "+45% Manufacturing Orders",
    services: ["Manufacturing Website", "Precision Engineering", "B2B Platform"],
    image: "/asp.png",
    description: "Precision manufacturing company specializing in high-quality components for automotive and aerospace industries.",
    completed: "2024",
    challenge: "Developed a technical showcase platform highlighting precision capabilities and quality standards.",
    technologies: ["React", "Node.js", "PostgreSQL", "D3.js"],
    features: ["Technical Specs", "Quality Certificates", "Capability Matrix", "Quote System"],
    feedback: "AS Precision's website demonstrates our manufacturing excellence and increased B2B inquiries significantly."
  },
  {
    name: "Shimmer Farms",
    url: "https://shimmerfarms.in/",
    result: "+60% Organic Produce Sales",
    services: ["Agriculture Platform", "Organic Farming", "Farm-to-Table"],
    image: "/shipfarmer.png",
    description: "Sustainable agriculture platform connecting organic farmers directly with health-conscious consumers.",
    completed: "2024",
    challenge: "Built a farm-to-table platform with fresh produce tracking and subscription management.",
    technologies: ["React", "Firebase", "Stripe", "Google Maps"],
    features: ["Fresh Tracking", "Subscription Box", "Farm Profiles", "Delivery Tracking"],
    feedback: "Shimmer Farms' platform revolutionized our organic produce distribution and customer relationships."
  },
  {
    name: "Eyeconic Optical",
    url: "https://eyeconicoptical.in/",
    result: "+50% Eyewear Sales",
    services: ["Optical Store", "Virtual Try-on", "Eye Care Platform"],
    image: "/eye.webp",
    description: "Modern optical store offering premium eyewear with advanced virtual try-on technology and eye care services.",
    completed: "2023",
    challenge: "Integrated virtual try-on technology with comprehensive eye care services and appointment booking.",
    technologies: ["React", "WebGL", "Node.js", "MySQL"],
    features: ["Virtual Try-on", "Eye Test Booking", "Prescription Upload", "Frame Finder"],
    feedback: "Eyeconic Optical's virtual try-on feature transformed our customer experience and boosted online sales."
  }
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
    description: "We treat your business as our own, genuinely prioritizing your growth, success, and ROI.",
    icon: <Users2 className="text-chaotic-blue" size={32} aria-label="Client-First Philosophy" />
  },
  {
    title: "Transparent Reporting",
    description: "Every campaign, every metric—shared in real time, so you're always in the loop.",
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

// Custom Badge component since it's not imported properly
const Badge = ({ children, variant = "default", className = "" }) => {
  const baseStyles = "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium";
  const variants = {
    default: "bg-gray-100 text-gray-800",
    outline: "border border-gray-300 bg-white text-gray-700"
  };
  
  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

const Work = () => {
  const [formData, setFormData] = useState({ phone: '', email: '' });
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [expandedProject, setExpandedProject] = useState(null);

  const handleProjectClick = (index, projectUrl) => {
    if (expandedProject === index) {
      // Second click - redirect to external link
      window.open(projectUrl, '_blank', 'noopener,noreferrer');
    } else {
      // First click - show details
      setExpandedProject(index);
    }
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
              <span className="text-chaotic-blue">Success</span> Stories
            </h1>
            <h2 className="text-2xl md:text-3xl font-syne font-medium mb-6">
              Delivering <span className="text-chaotic-blue">Real</span>, Measurable <span className="text-chaotic-blue">Results</span>
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
              What Makes Us <span className="text-chaotic-blue">Different</span>
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

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-syne font-bold text-center mb-10">
              <span className="text-chaotic-blue">Our Process</span>: How We Work
            </h2>
            {/* Grid: 2 columns on mobile, flex row on md+ */}
            <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-8">
              {processSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center relative min-w-[150px]">
                  <div className="bg-white rounded-full p-4 mb-4 shadow-lg flex items-center justify-center">
                    {step.icon}
                  </div>
                  <h4 className="font-syne font-bold text-md mb-1 text-center">{step.title}</h4>
                  <p className="text-gray-700 text-center font-kanit text-sm mb-4">{step.description}</p>
                  {/* Arrow only on desktop */}
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
              Client Success <span className="text-chaotic-blue">Highlights</span>
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {clients.map((client, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div 
                    className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 bg-white hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                    onClick={() => handleProjectClick(index, client.url)}
                  >
                    <div className="aspect-w-16 aspect-h-9 relative h-48">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                      <img
                        src={client.image}
                        alt={client.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                      <div className="absolute inset-x-0 bottom-0 p-4 transform transition-transform duration-500 group-hover:translate-y-0">
                        <h3 className="text-xl font-syne font-bold mb-1 text-white">{client.name}</h3>
                        <div className="inline-block bg-chaotic-blue text-white text-sm font-medium px-2 py-1 rounded-sm">
                          {client.result}
                        </div>
                      </div>
                    </div>
                    
                    {expandedProject === index ? (
                      <motion.div 
                        className="p-5 border-t-4 border-chaotic-blue"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-gray-600 mb-4 font-kanit">{client.description}</p>
                        
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="h-4 w-4 text-chaotic-blue" />
                            <span className="text-sm text-gray-500">Completed: {client.completed}</span>
                          </div>
                          <p className="text-sm text-gray-600">{client.challenge}</p>
                        </div>

                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Code className="h-4 w-4 text-chaotic-blue" />
                            <span className="text-sm font-medium">Technologies Used</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {client.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Zap className="h-4 w-4 text-chaotic-blue" />
                            <span className="text-sm font-medium">Key Features</span>
                          </div>
                          <div className="grid grid-cols-2 gap-1 text-xs text-gray-600">
                            {client.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-1">
                                <div className="w-1 h-1 bg-chaotic-blue rounded-full"></div>
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Users className="h-4 w-4 text-chaotic-blue" />
                            <span className="text-sm font-medium">Client Feedback</span>
                          </div>
                          <p className="text-sm text-gray-600 italic">"{client.feedback}"</p>
                        </div>

                        <button className="inline-flex items-center text-chaotic-blue hover:text-chaotic-blue/80 font-kanit text-sm font-medium">
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Click again to visit project →
                        </button>
                      </motion.div>
                    ) : (
                      <div className="p-5">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {client.services.map((service, serviceIndex) => (
                            <span 
                              key={serviceIndex} 
                              className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-sm"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                        <button className="inline-flex items-center text-chaotic-blue hover:text-chaotic-blue/80 font-kanit text-sm">
                          VIEW PROJECT DETAILS <ArrowRight className="ml-1 h-3 w-3" />
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="text-center">
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="rounded-none border border-black text-black hover:bg-black hover:text-white transition-colors font-kanit"
                >
                  START YOUR PROJECT <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Partners */}
        <PartnerSection className="mt-10" />

        {/* Testimonials / Social Proof */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="p-8 md:p-12 rounded-sm">
            <h2 className="text-2xl md:text-3xl font-syne font-bold text-center mb-8">
              What <span className="text-chaotic-blue">Our Clients</span> Are Saying
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

export default Work;
