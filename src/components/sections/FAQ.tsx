import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What age range of patients do you see?',
    answer: 'We provide care for children from birth through 18 years of age. Our practice specializes in newborn care, well-child visits, and adolescent medicine.'
  },
  {
    question: 'Do you accept walk-in appointments?',
    answer: 'While we primarily operate by appointment, we do our best to accommodate same-day sick visits. Please call our office to check availability. For non-urgent matters, we recommend scheduling an appointment in advance.'
  },
  {
    question: 'What insurance plans do you accept?',
    answer: 'We accept most major insurance plans including [list major insurance providers]. Please contact our office to verify if we accept your specific insurance plan. For patients without insurance, we offer competitive self-pay rates.'
  },
  {
    question: 'How often should my child see the pediatrician?',
    answer: 'We follow the American Academy of Pediatrics schedule for well-child visits, which typically includes visits at: 3-5 days, 1 month, 2 months, 4 months, 6 months, 9 months, 12 months, 15 months, 18 months, 24 months, 30 months, and annually from ages 3 through 18.'
  },
  {
    question: 'What should I bring to my child\'s first appointment?',
    answer: 'Please bring your photo ID, insurance card, immunization records, any relevant medical records, a list of current medications, and any questions you may have. For newborns, please bring any discharge paperwork from the hospital.'
  },
  {
    question: 'How do I get a prescription refill?',
    answer: 'For prescription refills, please have your pharmacy fax us a request at [fax number] or contact us through the patient portal. Please allow 24-48 hours for prescription refills. For controlled substances, an office visit may be required.'
  }
];

const FAQ = ({ id }: { id: string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={id} className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            FAQ
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Frequently Asked Questions
          </motion.p>
          <motion.p 
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Find answers to common questions about our practice and services.
          </motion.p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-start text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <span className="ml-6 h-7 flex items-center">
                  <ChevronDownIcon 
                    className={`h-6 w-6 transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180 text-indigo-500' : 'text-gray-400'
                    }`} 
                    aria-hidden="true" 
                  />
                </span>
              </button>
              <motion.div
                id={`faq-${index}`}
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="mt-2 pr-12">
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Still have questions?</h3>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
              Contact our office and our team will be happy to assist you.
            </p>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
