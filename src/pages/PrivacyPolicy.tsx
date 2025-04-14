
import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicy = () => {
  const lastUpdated = "April 14, 2025";
  
  return (
    <Layout>
      <SEO 
        title="Privacy Policy | Home4Live"
        description="Learn how Home4Live collects, uses, and protects your personal information."
        canonicalUrl="/privacy-policy"
      />
      
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-500 mb-8">Last Updated: {lastUpdated}</p>
            
            <Separator className="my-6" />
            
            <div className="prose prose-lg max-w-none">
              <p>
                Home4Live ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Home4Live.
              </p>
              
              <h2>Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, such as when you:
              </p>
              <ul>
                <li>Request a quote or consultation</li>
                <li>Contact us through our website, email, or phone</li>
                <li>Sign a contract for our services</li>
                <li>Provide feedback or testimonials</li>
                <li>Subscribe to our newsletter</li>
              </ul>
              
              <p>
                The types of information we may collect include:
              </p>
              <ul>
                <li>Your name, email address, phone number, and mailing address</li>
                <li>Property information related to renovation projects</li>
                <li>Communication preferences</li>
                <li>Payment information</li>
                <li>Any other information you choose to provide</li>
              </ul>
              
              <p>
                We may also automatically collect certain information when you visit our website, including:
              </p>
              <ul>
                <li>Log information (IP address, browser type, pages visited)</li>
                <li>Device information</li>
                <li>Location information</li>
                <li>Cookies and similar technologies</li>
              </ul>
              
              <h2>How We Use Your Information</h2>
              <p>
                We may use the information we collect for various purposes, including to:
              </p>
              <ul>
                <li>Provide and maintain our services</li>
                <li>Process and fulfill your requests for quotes or services</li>
                <li>Communicate with you about our services, promotions, and events</li>
                <li>Improve our website and services</li>
                <li>Respond to your comments and questions</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h2>Information Sharing and Disclosure</h2>
              <p>
                We may share your personal information in the following circumstances:
              </p>
              <ul>
                <li>With vendors, consultants, and service providers who need access to such information to carry out work on our behalf</li>
                <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process</li>
                <li>To protect the rights, property, and safety of Home4Live, our customers, or others</li>
                <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business</li>
                <li>With your consent or at your direction</li>
              </ul>
              
              <h2>Your Choices</h2>
              <p>
                You have several choices regarding the use of information on our services:
              </p>
              <ul>
                <li><strong>Account Information:</strong> You may update, correct, or delete your information at any time by contacting us at info@home4live.com.</li>
                <li><strong>Cookies:</strong> Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject browser cookies.</li>
                <li><strong>Promotional Communications:</strong> You may opt out of receiving promotional emails from Home4Live by following the instructions in those emails. If you opt out, we may still send you non-promotional emails, such as those about your account or our ongoing business relations.</li>
              </ul>
              
              <h2>Data Security</h2>
              <p>
                We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
              </p>
              
              <h2>Changes to this Privacy Policy</h2>
              <p>
                We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                Email: info@home4live.com<br />
                Phone: 647-806-9089<br />
                Address: Richmond Hill, ON, Canada
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
