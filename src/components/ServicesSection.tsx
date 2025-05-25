import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProgressCircle } from '@/components/ui/progress-circle';
import { cn } from '@/lib/utils';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState('web');

  const services = [
    {
      id: 'web',
      name: 'Website Development',
      description: 'Create high-performing, conversion-focused websites that deliver exceptional user experiences and drive business growth.',
      features: [
        'Responsive design',
        'SEO-optimized structure',
        'UI/UX optimization',
        'Performance tuning',
        'Analytics integration'
      ],
      percentage: 68,
      percentageText: 'Average increase in lead generation after website redesign'
    },

    {
      id: 'social',
      name: 'Social Media Marketing',
      description: 'Finding the balance between staying current and relying on proven strategies is essential for staying competitive in the ever-changing landscape of marketing.',
      features: [
        'Social Media Design',
        'Social Media Management',
        'Custom ad strategy',
        'Unique ad campaigns and ads',
        'Advanced demographic targeting'
      ],
      percentage: 86,
      percentageText: 'Of customers reported an increase in conversion rates through the social media marketing strategies'
    },
    
    {
      id: 'seo',
      name: 'Search Engine Optimization',
      description: 'Drive organic traffic and improve visibility with our proven SEO strategies that focus on sustainable growth and long-term results.',
      features: [
        'Technical SEO audits',
        'Keyword optimization',
        'Content strategy',
        'Link building',
        'Local SEO optimization'
      ],
      percentage: 73,
      percentageText: 'Of clients experienced improved SERP rankings within the first three months'
    },
    {
      id: 'paid',
      name: 'Paid Search Marketing',
      description: 'Maximize your ROI with targeted PPC campaigns that deliver qualified traffic and conversions to achieve your business objectives.',
      features: [
        'Google & Bing Ads',
        'PPC strategy development',
        'Ad copy optimization',
        'Landing page testing',
        'Conversion tracking'
      ],
      percentage: 92,
      percentageText: 'Average improvement in ROAS for our paid search clients'
    },
    
  ];

  const activeServiceData = services.find(service => service.id === activeService) || services[0];

  return (
    <section className="py-10 bg-gradient-to-br from-white via-gray-50 to-chaotic-blue/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold text-center font-syne mb-6">Our <span className="text-chaotic-blue">Services</span></h2>
          <p className="text-lg text-gray-700 font-kanit text-center">
            We deliver business impact through digital marketing with a combination of intellectual curiosity, industry experience, urgency, and precision.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl bg-white/80 ">
          {/* Service Selector */}
          <div className="lg:w-1/3 w-full bg-black/90 text-white p-6 flex flex-row lg:flex-col gap-2 lg:gap-6 overflow-x-auto lg:overflow-visible">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={cn(
                  'flex-1 min-w-[220px] lg:min-w-0 flex items-center justify-between rounded-full px-6 py-4 text-sm font-kanit transition-all duration-300 font-bold focus:outline-none',
                  service.id === activeService
                    ? 'bg-chaotic-blue text-white shadow-lg scale-105'
                    : 'text-white hover:text-chaotic-blue hover:bg-white/10'
                )}
                style={{ transition: 'background 0.3s, color 0.3s, transform 0.2s' }}
              >
                {service.name}
                {service.id === activeService && <ArrowRight className="h-5 w-5" />}
              </button>
            ))}
          </div>

          {/* Service Details */}
          <div className="lg:w-2/3 w-full bg-white/80 p-8 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-syne text-chaotic-blue font-bold mb-2">{activeServiceData.name}</h3>
                <p className="text-base text-gray-700 font-kanit">{activeServiceData.description}</p>
                <ul className="space-y-3">
                  {activeServiceData.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-chaotic-blue mt-1" />
                      <span className="text-sm text-black font-kanit">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="inline-block text-xs font-kanit underline text-chaotic-blue hover:text-black transition">LEARN MORE</a>
              </div>

              <div className="flex flex-col items-center justify-center">
                <ProgressCircle
                  value={activeServiceData.percentage}
                  max={100}
                  size={140}
                  strokeWidth={10}
                  color="#216ffe"
                  backgroundColor="#ffffff"
                  label={<span className="text-3xl font-bold text-black">{activeServiceData.percentage}%</span>}
                  className="mb-4"
                />
                <p className="text-center text-xs font-kanit text-gray-600 max-w-xs">
                  {activeServiceData.percentageText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
