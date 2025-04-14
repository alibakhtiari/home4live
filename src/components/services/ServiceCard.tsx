
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  className
}) => {
  return (
    <div className={`flex flex-col justify-between bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 h-full group ${className}`}>
      <div>
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue mb-5 group-hover:bg-brand-blue group-hover:text-white transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-brand-blue transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <div className="inline-flex items-center text-brand-blue font-medium group-hover:text-brand-teal transition-colors">
        Learn More <ChevronRight size={16} className="ml-1" />
      </div>
    </div>
  );
};

export default ServiceCard;
