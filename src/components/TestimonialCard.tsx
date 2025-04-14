
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  text,
  rating
}) => {
  return (
    <div className="flex flex-col justify-between bg-white rounded-lg shadow-md p-6 border border-gray-100 h-full">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            fill={i < rating ? "currentColor" : "none"}
            className="text-yellow-400"
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4">"{text}"</p>
      <div className="pt-4 border-t border-gray-100">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
