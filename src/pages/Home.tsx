
import React, { useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import CTA from '@/components/CTA';
import HeroSection from '@/components/home/HeroSection';
import ServicesList from '@/components/home/ServicesList';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialCard from '@/components/TestimonialCard';

const HomePage = () => {
  // Animation observer for scroll animations
  const animatedElementsRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    // Initialize animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });

    // Observe all elements with animate-on-scroll class
    animatedElementsRef.current = document.querySelectorAll('.animate-on-scroll');
    animatedElementsRef.current.forEach(el => observer.observe(el));

    return () => {
      if (animatedElementsRef.current) {
        animatedElementsRef.current.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <Layout>
      <HeroSection />
      <ServicesList />
      <WhyChooseUs />

      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from homeowners who have trusted us with their renovation projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="animate-on-scroll"
                style={{ transitionDelay: `${(index + 1) * 0.1}s` }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </Layout>
  );
};

const testimonials = [
  {
    name: "Michael Brown",
    location: "Toronto, ON",
    text: "Home4Live completely transformed our basement. The team was professional, punctual, and the quality of work exceeded our expectations. Highly recommended!",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    location: "Richmond Hill, ON",
    text: "We hired Home4Live for our complete home renovation, and we couldn't be happier with the results. The attention to detail and craftsmanship is outstanding.",
    rating: 5
  },
  {
    name: "David Chen",
    location: "Markham, ON",
    text: "The basement underpinning project was completed on time and on budget. The extra ceiling height has transformed our basement into a fully functional living space.",
    rating: 4
  }
];

export default HomePage;
