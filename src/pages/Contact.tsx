
import React from 'react';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brand-blue py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We're here to answer your questions and discuss your renovation project
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Ready to start your renovation project? Contact us today for a free consultation and estimate. We're looking forward to helping you transform your home.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="text-brand-orange" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+16478069089" className="hover:text-brand-orange transition-colors">
                        +1 647-806-9089
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="text-brand-orange" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@home4live.com" className="hover:text-brand-orange transition-colors">
                        info@home4live.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="text-brand-orange" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Address</h3>
                    <p className="text-gray-600">Richmond Hill, ON, Canada</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="text-brand-orange" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: By appointment</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="mb-4">Our Location</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Serving Toronto and the Greater Toronto Area
            </p>
          </div>
          
          <div className="bg-gray-300 h-[400px] rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <p className="text-gray-600 italic">Google Map Placeholder</p>
              <p className="text-gray-600">Richmond Hill, ON, Canada</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
