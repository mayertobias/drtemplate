import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

const Contact = ({ id }: { id: string }) => {
  // Clinic information for booking appointments
  const clinics = [
    {
      name: 'Cure Children Clinic',
      address: 'D.No. 50-50-12/3, Main Road, Seethammadhara, Visakhapatnam - 530013',
      phone: '+91 891 273 4567',
      email: 'seethammadhara@drsaipiridi.com',
      hours: 'Monday - Saturday: 9:00 AM - 9:00 PM\nSunday: 9:00 AM - 2:00 PM',
      emergency: true
    },
    {
      name: 'Motherly Women & Children Hospital',
      address: 'Door No. 11-13-3/1, Waltair Main Road, Near RTC Complex, Visakhapatnam - 530003',
      phone: '+91 891 274 5678',
      email: 'info@motherlyhospital.com',
      hours: '24/7 Emergency Services\nOPD: 9:00 AM - 9:00 PM',
      emergency: true
    }
  ];

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
            Contact Us
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Get in Touch
          </motion.p>
          <motion.p 
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have questions or want to schedule an appointment? We're here to help.
          </motion.p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Feel free to reach out to us with any questions or to schedule an appointment. Our team is here to help you and your family.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg">
                    <MapPinIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Our Locations</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      <strong>Cure Children Clinic</strong><br />
                      D.No. 50-50-12/3, Main Road<br />
                      Seethammadhara, Visakhapatnam - 530013
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      <strong>Motherly Women & Children Hospital</strong><br />
                      Door No. 11-13-3/1, Waltair Main Road<br />
                      Near RTC Complex, Visakhapatnam - 530003
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg">
                    <PhoneIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      <a href="tel:+918912734567" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                        +91 891 273 4567
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Emergency: <a href="tel:+919100123456" className="text-indigo-600 dark:text-indigo-400 hover:underline">+91 91001 23456</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg">
                    <EnvelopeIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      <a href="mailto:seethammadhara@drsaipiridi.com" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                        seethammadhara@drsaipiridi.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg">
                    <ClockIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Working Hours</h4>
                    <div className="mt-1 space-y-1">
                      <p className="text-gray-600 dark:text-gray-300">Monday - Saturday: 9:00 AM - 9:00 PM</p>
                      <p className="text-gray-600 dark:text-gray-300">Sunday: 9:00 AM - 2:00 PM</p>
                      <p className="text-sm text-amber-600 dark:text-amber-400 mt-2">
                        Emergency services available 24/7 at Seethammadhara Clinic
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Appointment Booking Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Book an Appointment</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  To schedule an appointment, please contact us directly at one of our locations. Our staff will be happy to assist you in finding a convenient time for your visit.
                </p>
                
                <div className="space-y-8">
                  {clinics.map((clinic, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                      <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">{clinic.name}</h4>
                      
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full">
                            <PhoneIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</p>
                            <a 
                              href={`tel:${clinic.phone.replace(/\D/g, '')}`} 
                              className="text-base font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
                            >
                              {clinic.phone}
                            </a>
                            {clinic.emergency && (
                              <p className="mt-1 text-sm text-amber-600 dark:text-amber-400">
                                Emergency: <a href="tel:+919100123456" className="hover:underline">+91 91001 23456</a>
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full">
                            <EnvelopeIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                            <a 
                              href={`mailto:${clinic.email}`} 
                              className="text-base font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
                            >
                              {clinic.email}
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full">
                            <ClockIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Working Hours</p>
                            <p className="text-base text-gray-600 dark:text-gray-300 whitespace-pre-line">{clinic.hours}</p>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                          <a
                            href={`tel:${clinic.phone.replace(/\D/g, '')}`}
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Call to Book Appointment
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
