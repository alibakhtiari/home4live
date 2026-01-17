
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
  schemaId: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our services",
  faqs,
  schemaId
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section bg-gray-50" id="faq">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <Collapsible 
                open={openIndex === index} 
                onOpenChange={() => handleToggle(index)}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <CollapsibleTrigger className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50">
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="shrink-0 text-brand-teal" />
                  ) : (
                    <ChevronDown className="shrink-0 text-gray-500" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 pt-0 text-gray-600 border-t border-gray-100">
                  <p>{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            </motion.div>
          ))}
        </div>

        {/* FAQ Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "${schemaId}",
            "mainEntity": [
              ${faqs.map(faq => `{
                "@type": "Question",
                "name": "${faq.question}",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "${faq.answer}"
                }
              }`).join(',')}
            ]
          }
        `}} />
      </div>
    </section>
  );
};

export default FAQSection;
