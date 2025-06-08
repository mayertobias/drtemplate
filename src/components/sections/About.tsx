import { motion } from 'framer-motion';

const About = ({ id }: { id: string }) => {
  const features = [
    {
      name: 'Expert Care',
      description: 'Specialized pediatric care with years of experience in treating children of all ages.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      name: 'Child-Friendly',
      description: 'A welcoming environment designed to make children feel comfortable and at ease.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: 'Personalized Approach',
      description: 'Tailored treatment plans to meet the unique needs of each child and family.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      name: '24/7 Availability',
      description: 'Emergency services available round the clock for urgent medical needs.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id={id} className="py-16 bg-white dark:bg-gray-900 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <motion.h2 
            className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Compassionate Pediatric Care
          </motion.p>
          <motion.p 
            className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dedicated to providing the highest quality healthcare for infants, children, and adolescents in a warm and friendly environment.
          </motion.p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="relative">
              <motion.div 
                className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    className="w-full h-auto"
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt="Dr. A. V. Lakshman Sai Piridi with a young patient"
                  />
                </div>
                <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-indigo-100 dark:bg-indigo-900 rounded-full -z-10"></div>
              </motion.div>
              
              <motion.div 
                className="mt-10 sm:mt-16 lg:mt-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-indigo-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-medium text-indigo-800 dark:text-indigo-200">Dr. A. V. Lakshman Sai Piridi</h3>
                  <p className="text-indigo-700 dark:text-indigo-300">MD Pediatrics, DCH, MBBS</p>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                    With extensive experience in pediatric care, Dr. A. V. Lakshman Sai Piridi is dedicated to providing comprehensive healthcare for children from birth through adolescence. He practices at Seethammadhara Clinic, offering personalized care with a gentle touch that puts both children and parents at ease.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="space-y-10">
                {features.map((feature, index) => (
                  <motion.div 
                    key={feature.name}
                    className="flex"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <span className="block">Meet Dr. A. V. Lakshman Sai Piridi</span>
                      <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{feature.name}</h3>
                      <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  Learn More About Our Practice
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
