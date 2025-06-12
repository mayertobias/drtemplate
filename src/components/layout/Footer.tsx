import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Dr. A. V. Lakshman Sai Piridi</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Dedicated Pediatrician & Neonatologist providing compassionate care for children of all ages at Seethammadhara Clinic.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="#about" className="text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">About</Link></li>
              <li><Link to="#services" className="text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">Services</Link></li>
              <li><Link to="#locations" className="text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">Locations</Link></li>
              <li><Link to="#testimonials" className="text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">Testimonials</Link></li>
              <li><Link to="#faq" className="text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">FAQ</Link></li>
              <li><Link to="#contact" className="text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm text-gray-600 dark:text-gray-300">+91 891 273 4567</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">seethammadhara@drsaipiridi.com</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">info@motherlyhospital.com</div>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-600 dark:text-gray-300">D.No. 50-50-12/3, Main Road, Seethammadhara, Visakhapatnam - 530013</span>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Working Hours</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">Mon - Fri</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">Saturday</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">Sunday</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Emergency Only</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Dr. A. V. Lakshman Sai Piridi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
