import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

// Location data
const locations = [
  {
    id: 'cure_children',
    name: 'Cure Children Clinic, Seethammadhara',
    address: 'D.No. 50-50-12/3, Main Road, Seethammadhara, Visakhapatnam - 530013',
    phone: '+91 891 273 4567',
    email: 'seethammadhara@drsaipiridi.com',
    hours: 'Mon-Sat: 10:00 AM - 1:00 PM & 5:00 PM - 8:00 PM\nSun: Closed',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123456789014!2d83.3200!3d17.7300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ0JzAwLjAiTiA4M8IxMScwMC4wIkU!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin',
    features: [
      'Pediatric Consultation',
      'Vaccination',
      'Minor Procedures',
      'Nutritional Counseling'
    ]
  },
  {
    id: 'motherly_hospital',
    name: 'Motherly Women & Children Hospital',
    address: 'Door No. 11-13-3/1, Waltair Main Road, Near RTC Complex, Visakhapatnam - 530003',
    phone: '+91 891 274 5678',
    email: 'info@motherlyhospital.com',
    hours: '24/7 Emergency Services\nOPD: 9:00 AM - 9:00 PM',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.6539563848414!2d83.314397!3d17.713799899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943001dc54403%3A0x9b5acd56306aca88!2sMotherly%20Women%20%26%20Children%20Hospital!5e0!3m2!1sen!2sin!4v1749744970021!5m2!1sen!2sin',
    features: [
      'Pediatric Emergency',
      'Neonatal Intensive Care',
      'Child & Mother Care',
      'Specialty Pediatric Services'
    ]
  }
];

const Locations = ({ id }: { id: string }) => {
  const [activeLocation, setActiveLocation] = useState(locations[0]);

  return (
    <section id={id} className="bg-white dark:bg-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <motion.h2 
            className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Locations
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Find Us Near You
          </motion.p>
          <motion.p 
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We have multiple convenient locations to serve you better. Visit us at any of our clinics.
          </motion.p>
        </div>
        {/* Location Tabs */}
        <div className="mt-12">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8 overflow-x-auto pb-4" aria-label="Locations">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setActiveLocation(location)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeLocation.id === location.id
                      ? 'border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
                >
                  {location.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Location Content */}
          <motion.div 
            key={activeLocation.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col">
              <div className="h-0 pb-[56.25%] relative">
                <iframe
                  src={activeLocation.mapUrl}
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title={`${activeLocation.name} Location`}
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{activeLocation.name} Clinic</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPinIcon className="h-6 w-6 text-indigo-500 flex-shrink-0 mt-1" />
                    <p className="ml-3 text-base text-gray-600 dark:text-gray-300">
                      {activeLocation.address}
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 text-indigo-500" />
                    <a href={`tel:${activeLocation.phone.replace(/\D/g, '')}`} className="ml-3 text-base text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                      {activeLocation.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <EnvelopeIcon className="h-5 w-5 text-indigo-500" />
                    <a href={`mailto:${activeLocation.email}`} className="ml-3 text-base text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                      {activeLocation.email}
                    </a>
                  </div>
                  
                  <div className="flex items-start">
                    <ClockIcon className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-1" />
                    <div className="ml-3">
                      <p className="text-base text-gray-600 dark:text-gray-300">
                        {activeLocation.hours.split('\n').map((line, i) => (
                          <span key={i} className="block">{line}</span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex-grow">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Services at this location:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeLocation.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6 flex flex-col h-full">
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">Schedule an Appointment</h3>
                <p className="text-indigo-700 dark:text-indigo-300 mb-6">
                  Book your appointment online or call us directly at {activeLocation.phone}.
                </p>
                <div className="mt-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#contact"
                      className="flex-1 text-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                    >
                      Book Online
                    </a>
                    <a
                      href={`tel:${activeLocation.phone.replace(/\D/g, '')}`}
                      className="flex-1 text-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex-1">
                <div className="p-6 h-full flex flex-col">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Office Hours</h3>
                  <div className="space-y-3 flex-grow">
                    {activeLocation.hours.split('\n').map((line, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                        <span className="text-gray-600 dark:text-gray-300">{line.split(':')[0]}:</span>
                        <span className="font-medium text-gray-900 dark:text-white text-right">
                          {line.split(':').slice(1).join(':').trim()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-medium text-gray-900 dark:text-white">Note:</span> We are closed on public holidays.
                    Emergency services are available 24/7.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Getting Here</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Our {activeLocation.name} clinic is conveniently located with easy access to public transportation and ample parking.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Parking:</span> Free parking available on-site
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h10M8 11h10" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Public Transport:</span> 5 min walk from {activeLocation.name === 'Hyderabad' ? 'Hitech City Metro Station' : 'Beach Road Bus Stop'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Wait Time:</span> Typically 10-15 minutes
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
