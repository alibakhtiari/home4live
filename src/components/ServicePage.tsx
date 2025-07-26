import React from 'react';
import Layout from '@/components/Layout';
import CTA from '@/components/CTA';
import Gallery from '@/components/Gallery';
import FAQSection from '@/components/FAQSection';
import ServiceHero from '@/components/service/ServiceHero';
import ServiceIntro from '@/components/service/ServiceIntro';
import ServiceBenefits from '@/components/service/ServiceBenefits';
import ServiceProcess from '@/components/service/ServiceProcess';
import ServiceFeatures from '@/components/service/ServiceFeatures';
import RelatedServices from '@/components/service/RelatedServices';

interface ServicePageProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  content: {
    intro: string;
    benefits: {
      title: string;
      description: {
        title: string;
        description: string;
      }[];
    };
    process: {
      title: string;
      steps: {
        title: string;
        description: string;
      }[];
    };
    features: {
      title: string;
      items: string[];
    };
  };
  galleryFolder: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices: string[];
}

const ServicePage: React.FC<ServicePageProps> = ({
  id,
  title,
  description,
  icon,
  content,
  galleryFolder,
  faqs,
  relatedServices
}) => {
  // Transform benefits data to match the component props structure
  const benefitsData = content.benefits.description.map(item => ({
    title: item.title,
    description: item.description
  }));

  return (
    <Layout>
      {/* Hero Section */}
      <ServiceHero
        title={title}
        description={description}
        icon={icon}
      />

      {/* Introduction */}
      <ServiceIntro intro={content.intro} />

      {/* Benefits */}
      <ServiceBenefits
        title={content.benefits.title}
        benefits={benefitsData}
      />

      {/* Process */}
      <ServiceProcess
        title={content.process.title}
        steps={content.process.steps}
      />

      {/* Features */}
      <ServiceFeatures
        title={content.features.title}
        features={content.features.items}
      />

      {/* Gallery Section */}
      <Gallery
        folder={galleryFolder}
      />

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle={`Common questions about our ${title.toLowerCase()} services`}
        faqs={faqs}
        schemaId={`https://home4live.ca/services/${id}#faq`}
      />

      {/* Related Services */}
      <RelatedServices services={relatedServices} />

      {/* CTA */}
      <CTA
        title={`Ready to Transform Your Space with Our ${title} Services?`}
      />
    </Layout>
  );
};

export default ServicePage;
