import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProgressCircle } from '@/components/ui/progress-circle';
import { cn } from '@/lib/utils';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState('social');

  const services = [
    {
      id: 'social',
      name: 'Social media marketing',
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
      name: 'Search engine optimization',
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
      name: 'Paid search marketing',
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
    }
  ];

  const activeServiceData = services.find(service => service.id === activeService) || services[0];

  return (
    
    <section className="py-7 bg-white">
      <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-4xl mx-auto mb-12">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center font-syne mb-6">Our Services</h2>
          <p className="text-lg text-gray-700 font-kanit text-center">
            We deliver business impact through digital marketing with a combination of intellectual curiosity, industry experience, urgency, and precision.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[36px] overflow-hidden shadow-xl">
          <div className="lg:col-span-4 bg-black text-white p-10">
            <nav className="space-y-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={cn(
                    'cursor-pointer transition-all duration-300 transform',
                    service.id === activeService ? 'scale-105' : 'hover:translate-x-2'
                  )}
                >
                  <div
                    className={cn(
                      'flex items-center justify-between rounded-full px-6 py-4 text-sm font-kanit',
                      service.id === activeService
                        ? 'bg-[#216ffe] text-white shadow-md'
                        : 'text-white hover:text-white hover:bg-gray-900'
                    )}
                  >
                    {service.name}
                    {service.id === activeService && <ArrowRight className="h-5 w-5" />}
                  </div>
                </div>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-8 bg-[#f7f7fb] p-10 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-xl font-syne  text-black">{activeServiceData.description}</h3>
                <ul className="space-y-3">
                  {activeServiceData.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#216ffe] mt-1" />
                      <span className="text-sm text-black font-kanit">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="text-xs font-kanit underline text-black">LEARN MORE</a>
              </div>

              <div className="flex flex-col items-center justify-center">
                <ProgressCircle
                  value={activeServiceData.percentage}
                  max={100}
                  size={160}
                  strokeWidth={12}
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