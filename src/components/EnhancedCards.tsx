
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
  actionText?: string;
  actionLink?: string;
}

export const ValueCard = ({ 
  title, 
  description, 
  icon,
  className 
}: CardProps) => {
  return (
    <Card className={cn(
      "border-none overflow-hidden transition-all duration-500 transform hover:-translate-y-2 shadow-md hover:shadow-xl bg-gradient-to-br from-white to-gray-50",
      className
    )}>
      <div className="relative">
        <div className="absolute top-0 left-0 w-1 bg-chaotic-blue h-full"></div>
        <div className="p-6">
          {icon && <div className="text-chaotic-blue mb-4">{icon}</div>}
          <h3 className="text-xl font-syne font-bold mb-3">{title}</h3>
          <p className="text-gray-700 font-kanit">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export const ServiceProviderCard = ({ 
  title, 
  className 
}: { title: string; className?: string }) => {
  return (
    <div className={cn(
      "bg-white p-4 rounded-md shadow-sm border-l-4 border-chaotic-blue hover:shadow-md transition-all duration-300 transform hover:-translate-y-1",
      className
    )}>
      <p className="font-kanit font-medium text-center">{title}</p>
    </div>
  );
};

export const RevenueDriverCard = ({ 
  title, 
  description,
  icon,
  className 
}: CardProps) => {
  return (
    <Card className={cn(
      "border-none overflow-hidden transition-all duration-500 transform hover:-translate-y-2 shadow-md hover:shadow-xl bg-white",
      className
    )}>
      <CardContent className="p-6">
        <div className="mb-4 text-chaotic-blue">{icon}</div>
        <h3 className="text-xl font-syne font-bold mb-3">{title}</h3>
        <p className="text-gray-700 font-kanit">{description}</p>
      </CardContent>
      <div className="h-1 bg-gradient-to-r from-chaotic-blue to-blue-300"></div>
    </Card>
  );
};

export const ProjectCard = ({
  name,
  result,
  services,
  image,
  className
}: {
  name: string;
  result: string;
  services: string[];
  image: string;
  className?: string;
}) => {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 bg-white hover:shadow-xl hover:-translate-y-2",
      className
    )}>
      <div className="aspect-w-16 aspect-h-9 relative h-48">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 p-4 transform transition-transform duration-500 group-hover:translate-y-0">
          <h3 className="text-xl font-syne font-bold mb-1 text-white">{name}</h3>
          <div className="inline-block bg-chaotic-blue text-white text-sm font-medium px-2 py-1 rounded-sm">
            {result}
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {services.map((service, serviceIndex) => (
            <span 
              key={serviceIndex} 
              className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-sm"
            >
              {service}
            </span>
          ))}
        </div>
        <button className="inline-flex items-center text-chaotic-blue hover:text-chaotic-blue/80 font-kanit text-sm">
          VIEW CASE STUDY <ArrowRight className="ml-1 h-3 w-3" />
        </button>
      </div>
    </div>
  );
};
