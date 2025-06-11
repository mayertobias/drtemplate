import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DoctorImage from '../../assets/drjpeg.jpg';

const Hero = ({ id }: { id: string }) => {
  return (
    <section id={id} className="relative bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 pt-28 pb-20 sm:pt-36 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwZWE1ZTkiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0xNiA4YzAtLjU1My0uNDQ4LTEtMS0xaC0yYy0uNTUyIDAtMSAuNDQ3LTEgMXYyYzAgLjU1My40NDggMSAxIDFoMmMuNTUyIDAgMS0uNDQ3IDEtMXYtMnptMTYgMGMwLS41NTMuNDQ4LTEgMS0xaDJjLjU1MiAwIDEgLjQ0NyAxIDF2MmMwIC41NTMtLjQ0OCAxLTEgMWgtMmMtLjU1MiAwLTEtLjQ0Ny0xLTF2LTJ6TTIwIDM0YzAtMS4xMDQtLjg5Ni0yLTItMnMtMiAuODk2LTIgMiAuODk2IDIgMiAyIDItLjg5NiAyLTJ6bS0yLTE2YzAgLjU1Mi0uNDQ4IDEtMSAxaC0yYy0uNTUyIDAtMS0uNDQ4LTEtMXYtMmMwLS41NTIuNDQ4LTEgMS0xaDJjLjU1MiAwIDEgLjQ0OCAxIDF2MnpNNDggMTZjMC0uNTUyLjQ0OC0xIDEtMWgyYy41NTIgMCAxIC40NDggMSAxdjJjMCAuNTUyLS40NDggMS0xIDFoLTJjLS41NTIgMC0xLS40NDgtMS0xdi0yem0tMTYgOGMwLS41NTMuNDQ4LTEgMS0xaDJjLjU1MiAwIDEgLjQ0NyAxIDF2MmMwIC41NTMtLjQ0OCAxLTEgMWgtMmMtLjU1MiAwLTEtLjQ0Ny0xLTF2LTJ6bS0xNiA4YzAtLjU1My0uNDQ4LTEtMS0xaC0yYy0uNTUyIDAtMSAuNDQ3LTEgMXYyYzAgLjU1My40NDggMSAxIDFoMmMuNTUyIDAgMS0uNDQ3IDEtMXYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] dark:opacity-5"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left relative z-10">
            <motion.div 
              className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              👋 Welcome to Our Clinic
            </motion.div>
            
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="block font-serif font-normal text-gray-800 dark:text-gray-100">Dr. A. V. Lakshman Sai</span>
              <span className="block mt-2 bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                Pediatric & Neonatal Care
              </span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Providing compassionate, evidence-based pediatric care for newborns, children, and adolescents. Our child-friendly environment and expert team ensure your little ones receive the best possible healthcare experience.
            </motion.p>

            <motion.div 
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                to="/appointment"
                className="group relative px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="relative z-10">Book an Appointment</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/services"
                className="group px-8 py-4 border-2 border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-300 font-medium rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all duration-300 hover:shadow-md"
              >
                <span className="relative">Our Services</span>
                <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </motion.div>

            <motion.div 
              className="mt-12 flex items-center justify-center lg:justify-start space-x-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div 
                    key={item}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700 relative"
                    style={{ zIndex: 5 - item }}
                  ></div>
                ))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                <div className="font-medium">Trusted by 1000+ Families</div>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1">5.0 (200+ reviews)</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="relative mt-16 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative z-10 mx-auto w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 transform transition-all duration-300 hover:shadow-3xl hover:-translate-y-1">
              <div className="w-full h-full">
                <img
                  className="w-full h-full object-cover"
                  src={DoctorImage}
                  alt="Dr. A. V. Lakshman Sai"
                  loading="eager"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">Dr. A. V. Lakshman Sai</h3>
                  <p className="text-primary-200">MD, DCH, DNB (Pediatrics)</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements with animations */}
            <div className="hidden lg:block absolute -bottom-10 -left-10 w-40 h-40 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000 dark:bg-primary-900/30"></div>
            <div className="hidden lg:block absolute -top-10 -right-10 w-48 h-48 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000 dark:bg-secondary-900/30"></div>
            <div className="hidden lg:block absolute -bottom-8 right-20 w-32 h-32 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-3000 dark:bg-accent-900/30"></div>
            
            {/* Floating elements */}
            <motion.div 
              className="hidden lg:block absolute -top-6 -left-6 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="mt-2 text-xs font-medium text-center text-gray-600 dark:text-gray-300">24/7 Support</div>
            </motion.div>
            
            <motion.div 
              className="hidden lg:block absolute -bottom-4 right-0 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="mt-2 text-xs font-medium text-center text-gray-600 dark:text-gray-300">Certified Expert</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
