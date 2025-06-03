
import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { Separator } from '@/components/ui/separator';

const TermsOfService = () => {
  const lastUpdated = "April 14, 2025";
  
  return (
    <Layout>
      <SEO 
        title="Terms of Service | Home4Live"
        description="Terms and conditions governing the use of Home4Live's services and website."
        canonicalUrl="/terms-of-service"
      />
      
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-gray-500 mb-8">Last Updated: {lastUpdated}</p>
            
            <Separator className="my-6" />
            
            <div className="prose prose-lg max-w-none">
              <p>
                Please read these Terms of Service ("Terms") carefully before using the website and services offered by Home4Live.
              </p>
              
              <h2>Acceptance of Terms</h2>
              <p>
                By accessing or using our website at www.home4live.ca (the "Site") or our renovation and construction services (collectively, the "Services"), you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our Services.
              </p>
              
              <h2>Changes to Terms</h2>
              <p>
                We may modify the Terms at any time. We will provide notice of any material changes through the Site or by other means. Your continued use of the Services after such modifications will constitute your acknowledgment and agreement to the modified Terms.
              </p>
              
              <h2>Services Description</h2>
              <p>
                Home4Live provides home renovation, construction, and remodeling services in Toronto and the Greater Toronto Area. Our Services include, but are not limited to, basement underpinning, waterproofing, finishing, home renovations, and house additions.
              </p>
              
              <h2>Service Quotes and Contracts</h2>
              <p>
                Quotes provided through our website or during consultations are estimates based on the information provided and may be subject to change after a detailed on-site assessment. All services require a signed contract outlining specific terms, pricing, timelines, and payment schedules before work commences.
              </p>
              
              <h2>Payment Terms</h2>
              <p>
                Payment terms are specified in individual client contracts. Typically, our projects require:
              </p>
              <ul>
                <li>An initial deposit to secure your project on our schedule</li>
                <li>Progress payments at predetermined project milestones</li>
                <li>Final payment upon satisfactory completion</li>
              </ul>
              <p>
                Late payments may result in work stoppage and additional fees. We accept various payment methods as specified in your contract.
              </p>
              
              <h2>Warranties and Workmanship</h2>
              <p>
                Home4Live provides warranties on workmanship as specified in your contract. Material warranties are as provided by manufacturers. Our commitment to quality ensures that we will address any deficiencies in our work that fall within the warranty period and scope.
              </p>
              
              <h2>Cancellation Policy</h2>
              <p>
                Cancellation policies are outlined in your specific contract. In general:
              </p>
              <ul>
                <li>Cancellations before work commencement may result in forfeiture of deposit or portions thereof to cover design, planning, and administrative costs</li>
                <li>Cancellations after work commencement will require payment for all completed work, materials ordered, and reasonable demobilization costs</li>
              </ul>
              
              <h2>Intellectual Property</h2>
              <p>
                All content on the Site, including text, graphics, logos, images, and software, is the property of Home4Live and is protected by Canadian and international copyright, trademark, and other intellectual property laws. You may not reproduce, modify, distribute, or display any portion of the Site without prior written consent from Home4Live.
              </p>
              
              <h2>Project Photos and Marketing</h2>
              <p>
                Unless otherwise specified in writing, Home4Live reserves the right to photograph completed projects and use these photographs for portfolio, marketing, and promotional purposes, without additional compensation to the client.
              </p>
              
              <h2>Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Home4Live shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the Services or any content therein.
              </p>
              
              <h2>Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Home4Live, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from your violation of these Terms or your use of the Services.
              </p>
              
              <h2>Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of law principles.
              </p>
              
              <h2>Dispute Resolution</h2>
              <p>
                Any dispute arising out of or relating to these Terms or the Services shall first be resolved through good-faith negotiation. If such negotiation fails, the dispute shall be submitted to binding arbitration in Toronto, Ontario, in accordance with the Arbitration Act of Ontario.
              </p>
              
              <h2>Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                Email: info@home4live.ca<br />
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

export default TermsOfService;
