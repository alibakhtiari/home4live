
import React from 'react';
import { ChevronRight } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  to: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
  to
}) => {
  return (
    <article className="flex flex-col justify-between bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100 h-full group overflow-hidden">
      <div>
        <div className="relative h-48 w-full overflow-hidden">
          <OptimizedImage
            src={imageSrc}
            alt={`${title} - Professional renovation service showcase`}
            className="group-hover:scale-105 transition-transform duration-300"
            objectFit="cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 group-hover:text-brand-blue transition-colors">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>
      </div>
      <div className="px-6 pb-6">
        <div className="inline-flex items-center text-brand-blue font-medium group-hover:text-brand-teal transition-colors">
          Learn More <ChevronRight size={16} className="ml-1" aria-hidden="true" />
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
