import {
  ArrowRight,
  LineChart,
  Globe,
  BarChart3,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResultsSection = () => {
  const results = [
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: "Drive Website Traffic",
      description: "Increase visibility and qualified visitors to your site."
    },
    {
      icon: <LineChart className="h-6 w-6 text-white" />,
      title: "Run Powerful Ad Campaigns",
      description: "Maximize ROI with targeted multi-channel advertising."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      title: "Analyze & Deploy Marketing Data",
      description: "Turn insights into actionable growth strategies."
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-white" />,
      title: "Improve Brand Messaging & Conversion",
      description: "Craft compelling narratives that drive action."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-chaotic-blue/5">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-syne font-bold leading-tight">
            How We Drive <span className="text-chaotic-blue">Revenue</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white group p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-chaotic-blue/20"
            >
              <div className="mb-6">
                <div className="bg-chaotic-blue p-3 rounded-full w-fit shadow-md">
                  {result.icon}
                </div>
              </div>
              <h3 className="text-xl font-syne font-bold mb-3 group-hover:text-chaotic-blue transition-colors">
                {result.title}
              </h3>
              <p className="text-gray-700 font-kanit">{result.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* Left - Text + CTA */}
            <div className="p-10 md:p-14">
              <p className="text-2xl md:text-3xl font-syne mb-8 leading-snug">
                Driving digital revenue for our <span className="text-chaotic-blue">50+ satisfied customers</span>
              </p>
              <Button
                variant="outline"
                className="rounded-full border border-black text-black hover:bg-black hover:text-white font-kanit px-6 py-3"
              >
                VIEW OUR CASE STUDIES <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Right - Highlighted Stat */}
            <div className="bg-chaotic-blue/10 flex flex-col justify-center items-start p-10 md:p-14">
              <div className="mb-4 w-full">
                <div className="text-sm font-kanit text-gray-600 mb-2">
                  Average Result
                </div>
                <div className="w-full h-2 bg-chaotic-blue/20 rounded-full overflow-hidden">
                  <div className="h-full w-[61%] bg-chaotic-blue rounded-full transition-all duration-500"></div>
                </div>
              </div>
              <div className="flex items-end gap-4">
                <h3 className="text-6xl font-syne font-bold text-chaotic-blue">61%</h3>
                <p className="text-xl font-kanit pb-1">Avg. Traffic Increase</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;