import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sangeeta Rao',
    role: 'Mother of 3-year-old',
    content: 'Dr. Sai Piridi has been our pediatrician since my daughter was born. His diagnosis is always accurate, and he explains everything in simple terms. The clinic in Seethammadhara is very clean and child-friendly.',
    rating: 5,
    image: '/images/testimonial-1.jpg'
  },
  {
    id: 2,
    name: 'Ravi Teja',
    role: 'Father of twins',
    content: 'We consulted Dr. Sai for our premature twins. His expertise in neonatal care is exceptional. He\'s very patient and always available for emergencies. Highly recommended!',
    rating: 5,
    image: '/images/testimonial-2.jpg'
  },
  {
    id: 3,
    name: 'Priyanka Desai',
    role: 'Mother of 5-year-old',
    content: 'Dr. A. V. Lakshman Sai is the best pediatrician in Vizag. His way of handling kids is amazing. My son used to be scared of doctors, but now he loves visiting Dr. Sai!',
    rating: 5,
    image: '/images/testimonial-3.jpg'
  },
  {
    id: 4,
    name: 'Kiran Kumar',
    role: 'Father of 2',
    content: 'We\'ve been visiting Dr. Sai\'s clinic in Siripuram for 4 years. The staff is very cooperative, and Dr. Sai\'s treatment is excellent. He remembers all the details about my children\'s medical history.',
    rating: 4,
    image: '/images/testimonial-4.jpg'
  },
  {
    id: 5,
    name: 'Meena Iyer',
    role: 'Grandmother',
    content: 'Dr. Sai has been treating my grandchildren for years. His diagnosis is always accurate, and he takes time to explain everything. The clinic timings are very convenient for working parents.',
    rating: 5,
    image: '/images/testimonial-5.jpg'
  },
  {
    id: 6,
    name: 'Anand Varma',
    role: 'Father of 1-year-old',
    content: 'We visited Dr. Sai at the Arilova branch. The clinic is well-maintained, and the doctor is very knowledgeable. He gave us practical advice that really helped with our baby\'s colic issues.',
    rating: 4,
    image: '/images/testimonial-6.jpg'
  }
];

const Testimonials = ({ id }: { id: string }) => {
  // Function to render star rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <StarIcon
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'} flex-shrink-0`}
        aria-hidden="true"
      />
    ));
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id={id} className="bg-white dark:bg-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Testimonials
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What Parents Are Saying
          </motion.p>
          <motion.p 
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Don't just take our word for it. Here's what our patients' families have to say about us.
          </motion.p>
        </div>

        <motion.div 
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col h-full"
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex-1">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {testimonial.image ? (
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src={testimonial.image}
                        alt={`${testimonial.name}'s photo`}
                      />
                    ) : (
                      <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                        <span className="text-indigo-600 dark:text-indigo-300 text-xl font-medium">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.rating} out of 5
                  </span>
                </div>
                <blockquote className="mt-4">
                  <p className="text-base text-gray-600 dark:text-gray-300 italic">
                    "{testimonial.content}"
                  </p>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Ready to experience our care?
            </h3>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
              Join our family of happy patients today.
            </p>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                Book an Appointment
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
