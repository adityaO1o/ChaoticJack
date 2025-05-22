import { useState } from 'react';
import { Lightbulb, Users, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ConsultationSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <section className="w-full py-20 md:py-28 bg-chaotic-blue/10">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-16 relative">

          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-syne leading-tight mb-6">
              Get a Free Consultation to <span className="text-chaotic-blue">Boost Your Business</span>
            </h2>
            <p className="text-lg md:text-xl font-kanit text-gray-700">
              Our comprehensive marketing audit includes analysis of your target audience, UX evaluation, content audit, and a tailored growth strategy.
            </p>
          </div>

          {/* Audit Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-chaotic-blue/5 hover:bg-chaotic-blue/10 transition p-8 rounded-2xl text-center shadow-md">
              <div className="bg-chaotic-blue text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-syne font-bold mb-2">Target Audience Analysis</h3>
              <p className="text-gray-700 font-kanit text-sm">
                We identify your ideal customers and how to reach them effectively.
              </p>
            </div>

            <div className="bg-chaotic-blue/5 hover:bg-chaotic-blue/10 transition p-8 rounded-2xl text-center shadow-md">
              <div className="bg-chaotic-blue text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                <LayoutDashboard className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-syne font-bold mb-2">UX Analysis</h3>
              <p className="text-gray-700 font-kanit text-sm">
                We evaluate your website’s user experience and conversion paths.
              </p>
            </div>

            <div className="bg-chaotic-blue/5 hover:bg-chaotic-blue/10 transition p-8 rounded-2xl text-center shadow-md">
              <div className="bg-chaotic-blue text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-syne font-bold mb-2">Content Audit</h3>
              <p className="text-gray-700 font-kanit text-sm">
                We assess your content strategy and recommend improvements.
              </p>
            </div>
          </div>

          {/* CTA Button and Email Form */}
          <form onSubmit={handleSubmit} className="mt-4 animate-slide-up max-w-xl mx-auto mb-12">
            <div className="bg-white p-3 rounded-[20px_20px_20px_0px] border-2 border-black shadow-lg flex overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 py-2 px-4 focus:outline-none rounded-l-xl font-kanit"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                className="bg-black text-white border-none hover:bg-chaotic-blue transition-colors rounded-none px-8 font-kanit"
              >
                NEXT
              </Button>
            </div>
          </form>
          <div className="text-center">
            <Button
              className="bg-chaotic-blue text-white hover:bg-black hover:text-white transition px-10 py-6 rounded-full text-lg font-kanit shadow-lg mb-6"
            >
              Get Your Free Audit
            </Button>


          </div>

        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
