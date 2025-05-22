
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';

const TechAuditSection = () => {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const technologies = [
    { name: "Netcore", logo: "https://via.placeholder.com/120x60?text=Netcore" },
    { name: "Adespresso", logo: "https://via.placeholder.com/120x60?text=Adespresso" },
    { name: "Mailchimp", logo: "https://via.placeholder.com/120x60?text=Mailchimp" },
    { name: "HubSpot", logo: "https://via.placeholder.com/120x60?text=HubSpot" },
    { name: "Google Ads", logo: "https://via.placeholder.com/120x60?text=GoogleAds" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setFormStep(prev => prev + 1);
  };

  const getProgress = () => {
    return (formStep + 1) * 25;
  };

  const formSteps = ["Your Info", "Business Details", "Marketing Goals", "Schedule Call"];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-syne font-bold mb-8">
              Technologies We Leverage
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 rounded-sm flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className="max-h-12"
                  />
                </div>
              ))}
            </div>
            
            <p className="text-lg font-kanit text-gray-700">
              We partner with leading marketing technology providers to deliver cutting-edge solutions for our clients. Our team is certified in these platforms, ensuring you get the most from your marketing technology stack.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-sm shadow-lg">
            <h2 className="text-2xl md:text-3xl font-syne font-bold mb-6">
              Get Your Free Marketing Audit
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-chaotic-blue/10 flex items-center justify-center text-chaotic-blue font-syne font-bold">1</div>
                <div>
                  <h3 className="font-syne font-bold">30-min Strategy Call</h3>
                  <p className="text-sm text-gray-600 font-kanit">Discuss your goals and challenges</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-chaotic-blue/10 flex items-center justify-center text-chaotic-blue font-syne font-bold">2</div>
                <div>
                  <h3 className="font-syne font-bold">In-depth Audit</h3>
                  <p className="text-sm text-gray-600 font-kanit">We analyze your current marketing</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-chaotic-blue/10 flex items-center justify-center text-chaotic-blue font-syne font-bold">3</div>
                <div>
                  <h3 className="font-syne font-bold">Growth Roadmap</h3>
                  <p className="text-sm text-gray-600 font-kanit">Custom strategy to boost your results</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="relative">
                <Input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  className="rounded-none border-gray-300 font-kanit"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="relative">
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  className="rounded-none border-gray-300 font-kanit"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              
              <Button 
                onClick={handleNext}
                className="w-full rounded-none bg-black text-white border border-white hover:bg-white hover:text-black transition-colors font-kanit"
              >
                NEXT <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="mt-4">
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-chaotic-blue transition-all duration-500"
                    style={{ width: `${getProgress()}%` }}
                  ></div>
                </div>
                
                <div className="mt-2 flex justify-between items-center">
                  {formSteps.map((step, index) => (
                    <div 
                      key={index}
                      className={`text-xs font-kanit ${formStep >= index ? 'text-chaotic-blue' : 'text-gray-400'}`}
                    >
                      {(index + 1) * 25}% {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechAuditSection;
