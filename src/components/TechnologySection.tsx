import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TechnologySection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [formData, setFormData] = useState({ phone: '', email: '' });
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
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
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-chaotic-blue/10 via-yellow-50 to-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider mb-3 font-kanit">
            OUR CUSTOMERS ARE SOME OF THE WORLD'S...
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-syne mb-10"><span className="text-chaotic-blue">Technology</span> we use</h2>
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
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
