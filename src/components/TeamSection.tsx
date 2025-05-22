
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const TeamSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-syne mb-6">
            The Team Behind Chaotic Jack
          </h2>
          <p className="text-lg md:text-xl font-kanit text-gray-700">
            Our 15+ member expert team combines creative talent with analytical precision to deliver exceptional marketing results.
          </p>
        </div>

        <div className="relative h-[400px] md:h-[500px] mb-12">
          <div className="absolute inset-0 bg-chaotic-blue/10 rounded-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Chaotic Jack Team" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 w-full max-w-xl px-4">
            <div className="bg-white p-8 rounded-sm shadow-lg">
              <h3 className="text-2xl font-syne font-bold mb-4">Experienced Specialists</h3>
              <p className="text-gray-700 font-kanit mb-6">
                Our diverse team of strategists, creatives, analysts, and developers work together to create integrated marketing solutions that exceed expectations.
              </p>
              <Button 
                className="rounded-none bg-black text-white border border-white hover:bg-white hover:text-black transition-colors font-kanit"
              >
                MEET THE TEAM <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
