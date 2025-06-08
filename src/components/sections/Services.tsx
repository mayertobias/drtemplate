import { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'well-child',
    name: 'Well-Child Visits',
    description: 'Regular check-ups to monitor your child\'s growth and development, including immunizations and developmental screenings.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    details: [
      'Newborn care and feeding support',
      'Developmental assessments',
      'Vaccinations and immunizations',
      'Nutritional guidance',
      'Hearing and vision screenings'
    ]
  },
  {
    id: 'sick-visits',
    name: 'Sick Visits',
    description: 'Prompt evaluation and treatment for common childhood illnesses, infections, and minor injuries.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    details: [
      'Fever and infections',
      'Cough and cold symptoms',
      'Ear infections',
      'Sore throat and strep throat',
      'Stomach pain and digestive issues'
    ]
  },
  {
    id: 'neonatal-care',
    name: 'Neonatal Care',
    description: 'Specialized care for newborns, including premature babies and those with special medical needs.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    details: [
      'Newborn screenings',
      'Premature infant care',
      'Feeding support',
      'Developmental follow-up',
      'Parent education'
    ]
  },
  {
    id: 'vaccinations',
    name: 'Vaccinations',
    description: 'Comprehensive immunization services following the recommended vaccination schedule for children.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    details: [
      'Routine childhood vaccines',
      'Catch-up immunizations',
      'Travel vaccinations',
      'Flu shots',
      'Vaccine education'
    ]
  },
  {
    id: 'asthma',
    name: 'Asthma & Allergies',
    description: 'Diagnosis, treatment, and management of asthma, allergies, and related conditions.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    details: [
      'Asthma management plans',
      'Allergy testing',
      'Inhaler technique training',
      'Environmental control measures',
      'Emergency action plans'
    ]
  },
  {
    id: 'adolescent',
    name: 'Adolescent Care',
    description: 'Focused healthcare for teenagers, addressing physical, emotional, and social development.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    details: [
      'Annual physicals',
      'Sports physicals',
      'Mental health support',
      'Reproductive health',
      'Substance abuse counseling'
    ]
  }
];

const Services = ({ id }: { id: string }) => {
  const [activeTab, setActiveTab] = useState('well-child');
  const activeService = services.find(service => service.id === activeTab) || services[0];

  return (
    <section id={id} className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Comprehensive Pediatric Care
          </motion.p>
          <motion.p 
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We provide a full range of pediatric services to keep your child healthy from birth through adolescence.
          </motion.p>
        </div>

        <div className="mt-12">
          {/* Mobile Tabs */}
          <div className="md:hidden mb-8">
            <label htmlFor="service-tabs" className="sr-only">Select a service</label>
            <select
              id="service-tabs"
              name="service-tabs"
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden md:block">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="-mb-px flex space-x-8" aria-label="Services">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === service.id
                        ? 'border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                    }`}
                  >
                    {service.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Service Content */}
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 bg-white dark:bg-gray-700 shadow rounded-lg overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300">
                  {activeService.icon}
                </div>
                <div className="ml-5">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{activeService.name}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{activeService.description}</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Services Include:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeService.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  Schedule an Appointment
                </a>
              </div>
            </div>
          </motion.div>

          {/* All Services Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">All Our Services</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  whileHover={{ y: -5 }}
                  className={`bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg cursor-pointer transition-all duration-300 ${
                    activeTab === service.id ? 'ring-2 ring-indigo-500' : ''
                  }`}
                  onClick={() => setActiveTab(service.id)}
                >
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300">
                        {service.icon}
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{service.name}</h3>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="mt-4">
                      <span className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        Learn more
                        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
