
import React from 'react';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brand-blue pt-28 pb-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-white mb-4 text-3xl md:text-5xl">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
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
                  <div className="shrink-0 mt-1">
                    <Phone className="text-brand-teal" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+16478069089" className="hover:text-brand-teal transition-colors">
                        +1 647-806-9089
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="shrink-0 mt-1">
                    <Mail className="text-brand-teal" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@home4live.ca" className="hover:text-brand-teal transition-colors">
                        info@home4live.ca
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="shrink-0 mt-1">
                    <MapPin className="text-brand-teal" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Address</h3>
                    <p className="text-gray-600">Richmond Hill, ON, Canada</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="shrink-0 mt-1">
                    <Clock className="text-brand-teal" size={24} />
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
          
          <div className="h-[420px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Home4Live Location - Richmond Hill, ON, Canada"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92048.96634898124!2d-79.52187760773669!3d43.882838382747125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2b2b1d3ef37f%3A0xb36b568393e1176b!2sRichmond%20Hill%2C%20ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
