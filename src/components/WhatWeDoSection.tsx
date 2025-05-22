import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const WhatWeDoSection = () => {
  const services = [
    {
      title: "Social Media Marketing",
      description: "Engage your audience across platforms with targeted content strategies.",
      image: "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063134.jpg?uid=R171629846&ga=GA1.1.1985797322.1743147877&semt=ais_hybrid&w=740"
    },
    {
      title: "SEO",
      description: "Improve visibility and drive organic traffic with expert optimization.",
      image: "https://img.freepik.com/free-photo/searching-engine-optimizing-seo-browsing-concept_53876-64993.jpg?uid=R171629846&ga=GA1.1.1985797322.1743147877&semt=ais_hybrid&w=740"
    },
    {
      title: "Paid Search Marketing",
      description: "Maximize ROI with strategic PPC campaigns across search platforms.",
      image: "https://img.freepik.com/free-photo/homepage-concept-with-search-bar_23-2150040204.jpg?uid=R171629846&ga=GA1.1.1985797322.1743147877&semt=ais_hybrid&w=740"
    },
    {
      title: "Website Development",
      description: "Create stunning, functional websites that convert visitors into customers.",
      image: "https://img.freepik.com/free-photo/website-development-links-seo-webinar-cyberspace-concept_53876-120953.jpg?uid=R171629846&ga=GA1.1.1985797322.1743147877&semt=ais_hybrid&w=740"
    }
  ];

  const miniFeatures = [
    "Social Media Design",
    "Social Media Management",
    "Custom Ad Strategy",
    "Unique Campaigns",
    "Advanced Targeting"
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-syne mb-6">
            Driving a better way of doing marketing
          </h2>
          <p className="text-lg md:text-xl font-kanit text-gray-700">
            We deliver business impact through digital marketing with a combination of intellectual curiosity, industry experience, urgency, and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-sm transition-all duration-300 hover:shadow-xl">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-syne font-bold mb-2">{service.title}</h3>
                <p className="text-sm font-kanit opacity-90">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-6">
          <Button 
            variant="outline"
            className="rounded-none border border-black text-black hover:bg-black hover:text-white transition-colors font-kanit"
          >
            VIEW ALL SOLUTIONS <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;