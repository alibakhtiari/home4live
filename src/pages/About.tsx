
import React from 'react';
import Layout from '@/components/Layout';
import CTA from '@/components/CTA';
import { Users, Award, Shield, Clock, Gem, BarChart } from 'lucide-react';

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brand-blue py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-white mb-4">About Home4Live</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Dedicated to transforming your living spaces with exceptional craftsmanship and personalized service
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-[400px] rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-gray-500 italic">Image Placeholder - Team or company image</p>
              </div>
            </div>
            
            <div>
              <h2 className="mb-4">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Home4live is dedicated to transforming your living spaces with exceptional craftsmanship and personalized service. With years of experience in construction and renovation, we pride ourselves on delivering high-quality results that exceed expectations. From concept to completion, trust Home4live to enhance your home with creativity, precision, and care.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey began with a simple mission: to provide homeowners in Toronto and the GTA with renovation services that truly transform living spaces. Over the years, we've built a reputation for quality workmanship, attention to detail, and customer satisfaction.
              </p>
              <p className="text-gray-600">
                Today, we continue to grow while maintaining our commitment to excellence in every project we undertake. Our team of skilled professionals brings expertise, creativity, and dedication to each renovation, ensuring results that not only meet but exceed our clients' expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue mb-5">
                <Gem size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality, using premium materials and expert techniques to ensure lasting results.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue mb-5">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We conduct business with complete transparency, honesty, and ethical standards in all our interactions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue mb-5">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                We listen attentively to your needs and preferences, ensuring your vision is at the center of our work.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue mb-5">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Reliability</h3>
              <p className="text-gray-600">
                We honor our commitments, adhere to timelines, and deliver what we promise, every time.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue mb-5">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Expertise</h3>
              <p className="text-gray-600">
                Our team brings years of specialized experience and continuous professional development to every project.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue mb-5">
                <BarChart size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace new techniques, materials, and designs to deliver modern, efficient renovation solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A streamlined approach that ensures quality results and client satisfaction
            </p>
          </div>

          <div className="space-y-12">
            <div className="relative pl-12 md:pl-0">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="hidden md:block md:col-span-1">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl font-bold">1</div>
                </div>
                <div className="absolute md:hidden left-0 top-0">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl font-bold">1</div>
                </div>
                <div className="md:col-span-11">
                  <h3 className="text-xl font-bold mb-3">Initial Consultation</h3>
                  <p className="text-gray-600">
                    We begin by understanding your vision, requirements, and budget. This is where we discuss your ideas, assess your space, and start planning your project.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative pl-12 md:pl-0">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="hidden md:block md:col-span-1">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl font-bold">2</div>
                </div>
                <div className="absolute md:hidden left-0 top-0">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl font-bold">2</div>
                </div>
                <div className="md:col-span-11">
                  <h3 className="text-xl font-bold mb-3">Design & Planning</h3>
                  <p className="text-gray-600">
                    Our team creates detailed plans and designs for your project. We work closely with you to refine these plans until they perfectly match your vision.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative pl-12 md:pl-0">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="hidden md:block md:col-span-1">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl font-bold">3</div>
                </div>
                <div className="absolute md:hidden left-0 top-0">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl font-bold">3</div>
                </div>
                <div className="md:col-span-11">
                  <h3 className="text-xl font-bold mb-3">Proposal & Contract</h3>
                  <p className="text-gray-600">
                    We provide a detailed proposal including scope of work, materials, timeline, and costs. Once approved, we formalize the agreement with a clear contract.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative pl-12 md:pl-0">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="hidden md:block md:col-span-1">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl font-bold">4</div>
                </div>
                <div className="absolute md:hidden left-0 top-0">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl font-bold">4</div>
                </div>
                <div className="md:col-span-11">
                  <h3 className="text-xl font-bold mb-3">Construction</h3>
                  <p className="text-gray-600">
                    Our skilled team executes the project with precision and care. We maintain open communication throughout and adhere to strict quality standards.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative pl-12 md:pl-0">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="hidden md:block md:col-span-1">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl font-bold">5</div>
                </div>
                <div className="absolute md:hidden left-0 top-0">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl font-bold">5</div>
                </div>
                <div className="md:col-span-11">
                  <h3 className="text-xl font-bold mb-3">Final Inspection & Handover</h3>
                  <p className="text-gray-600">
                    We conduct a thorough final inspection with you to ensure every detail meets your expectations. Once approved, we officially hand over your newly transformed space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA 
        title="Ready to Transform Your Home?"
        subtitle="Contact us today to discuss your renovation project"
        buttonText="Contact Us Now"
      />
    </Layout>
  );
};

export default AboutPage;
