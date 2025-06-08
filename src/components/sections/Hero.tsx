import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DoctorImage from '../../assets/drpavls.png';

const Hero = ({ id }: { id: string }) => {
  return (
    <section id={id} className="relative bg-white dark:bg-gray-900 pt-24 pb-16 sm:pt-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left relative z-10">
            <motion.h1 
              className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="block">Caring for Your</span>
              <span className="block text-indigo-600 dark:text-indigo-400">Child's Health</span>
            </motion.h1>
            
            <motion.p 
              className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Expert pediatric and neonatal care in a warm, friendly environment. 
              We're dedicated to providing the highest quality healthcare for your children.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="rounded-md shadow">
                <Link 
                  to="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Book Appointment
                </Link>
              </div>
              <div className="rounded-md shadow">
                <Link 
                  to="tel:+911234567890"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
                >
                  Emergency: +91 1234567890
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-10 flex items-center justify-center lg:justify-start space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900 dark:text-white">Certified</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Pediatrician</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900 dark:text-white">Advanced</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Equipment</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative w-full max-w-md mx-auto lg:mx-0 lg:max-w-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-300 hover:shadow-xl">
                <img
                  className="w-full h-auto max-h-[500px] object-cover"
                  src={DoctorImage}
                  alt="Dr. A. V. Lakshman Sai Piridi - Pediatrician"
                  style={{ objectPosition: 'top center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                  <p className="text-xs md:text-sm font-medium text-indigo-200">Dr. A. V. Lakshman Sai Piridi</p>
                  <p className="text-xl md:text-2xl font-bold">Pediatrician</p>
                  <p className="mt-0.5 text-xs md:text-sm text-gray-200">MBBS, DCH, DNB (Pediatrics)</p>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-indigo-100 dark:bg-indigo-900 rounded-full opacity-70"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
