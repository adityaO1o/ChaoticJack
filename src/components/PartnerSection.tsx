
import { cn } from "@/lib/utils";

interface PartnerSectionProps {
  className?: string;
}

const PartnerSection = ({ className }: PartnerSectionProps) => {
  const partners = [
    {
      logo: <img src="meta-partner.svg" alt="Google Cloud Partner"  />,
    },
    {
      logo: <img src="google-cloud.svg" alt="Meta Business Partners"  />,
    },
    {
      logo: <img src="google-partner.svg" alt="Google Premier Partner"  />,
    },
    {
      logo: <img src="shopify.svg" alt="Shopify Partner"  />,
    },
    {
      logo: <img src="tiktok.svg" alt="TikTok Marketing Partner"  />,
    },
  ];

  return (
    <section className={cn("py-12 bg-gray-50", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-8">
          <h3 className="text-xl font-syne font-bold mb-2">
            A PARTNER NOT A VENDOR
          </h3>
          <div className="h-1 w-20 bg-chaotic-blue"></div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-2">
                {partner.logo}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PartnerSection;
