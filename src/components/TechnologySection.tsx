import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TechnologySection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [visibleCount, setVisibleCount] = useState(1); // Default to 1 for mobile

  const techLogos = [
    { name: 'Mailchimp', logo: '/mailchimp.webp' },
    { name: 'Google Ads', logo: '/googleads.webp' },
    { name: 'Hootsuite', logo: '/hootsuite.webp' },
    { name: 'Semrush', logo: '/buzzsumo.webp' },
    { name: 'Netcore', logo: '/optimizely.webp' },
    { name: 'Adespresso', logo: '/adexpresso.webp' },
    { name: 'HubSpot', logo: '/hubspot.webp' },
    { name: 'Ahrefs', logo: '/optimizely.webp' },
  ];

  const auditFeatures = [
    { id: 1, text: '30-min strategy call' },
    { id: 2, text: 'In-depth audit' },
    { id: 3, text: 'Growth Roadmap' },
  ];

  // Responsive logo count
  useEffect(() => {
    const getVisibleCount = () => {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    };

    const handleResize = () => {
      setVisibleCount(getVisibleCount());
      setStartIndex(0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleLogos = techLogos.slice(startIndex, startIndex + visibleCount);

  const handleNext = () => {
    if (startIndex + visibleCount >= techLogos.length) {
      setStartIndex(0); // Loop back to start
    } else {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex === 0) {
      setStartIndex(techLogos.length - visibleCount); // Loop to last possible start index
    } else {
      setStartIndex(startIndex - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-chaotic-blue/10 via-yellow-50 to-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider mb-3 font-kanit">
            OUR CUSTOMERS ARE SOME OF THE WORLD'S...
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-syne mb-10">Technology we use</h2>
        </div>

        <div className="bg-yellow-100 rounded-3xl p-6 md:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Side */}
            <div className="space-y-8 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold font-syne">
                Get your free<br />marketing audit
              </h3>
              <div className="space-y-4">
                {auditFeatures.map((feature) => (
                  <div key={feature.id} className="flex items-center gap-3">
                    <CheckCircle className="text-chaotic-blue h-6 w-6" />
                    <span className="font-kanit text-base">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col justify-between">
              {/* Logo Carousel */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={handlePrevious}
                    className="bg-white rounded-full p-2 shadow-md hover:bg-chaotic-blue/10 transition-colors"
                    aria-label="Previous"
                  >
                    <ArrowLeft className="h-6 w-6 text-chaotic-blue" />
                  </button>

                  <div className="flex items-center gap-4 py-2 px-1">
                    {visibleLogos.map((logo, index) => (
                      <div
                        key={index}
                        className="h-16 w-28 flex items-center justify-center bg-white p-3 rounded-xl shadow-md border border-chaotic-blue/10 transition-transform hover:scale-105"
                      >
                        <img
                          src={logo.logo}
                          alt={logo.name}
                          className="h-12 w-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    className="bg-white rounded-full p-2 shadow-md hover:bg-chaotic-blue/10 transition-colors"
                    aria-label="Next"
                  >
                    <ArrowRight className="h-6 w-6 text-chaotic-blue" />
                  </button>
                </div>
              </div>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="mt-4 w-full flex justify-center">
                <div className="
                  w-full max-w-full sm:max-w-md
                  bg-white p-3 rounded-[20px_20px_20px_0px] border-2 border-black shadow-lg
                  flex flex-col sm:flex-row gap-2 sm:gap-0
                  transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]
                ">
                  <input
                    type="email"
                    placeholder="Email"
                    className="
                      flex-1 py-2 px-4 focus:outline-none
                      rounded-t-xl sm:rounded-t-none sm:rounded-l-xl font-kanit
                      bg-white border border-gray-200
                      focus:ring-2 focus:ring-chaotic-blue
                      transition
                    "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button
                    type="submit"
                    className="
                      bg-black text-white border-none hover:bg-chaotic-blue transition-colors
                      rounded-b-xl sm:rounded-b-none sm:rounded-r-xl px-8 font-kanit w-full sm:w-auto
                    "
                  >
                    NEXT
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
