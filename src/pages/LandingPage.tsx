import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Ticket, Video, QrCode, Calendar, Users, Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import ScrollToTop from '../components/ScrollToTop';

const LandingPage = () => {
  const navigate = useNavigate();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <span className="text-2xl font-bold text-slate-900 dark:text-white">Eventify</span>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => navigate('/login')}
              className="px-5 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/register')}
              className="px-5 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-medium"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Your Events,
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Simplified & Amplified
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Create, manage, and attend incredible events. From ticketing to live streaming,
              we've got everything you need to make your events unforgettable.
            </p>
            <button
              onClick={() => navigate('/register')}
              className="px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white text-lg rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started Free
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 shadow-2xl border border-blue-100 dark:border-slate-600">
              <img
                src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Event"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        {...staggerContainer}
        className="py-20 px-6 bg-white dark:bg-slate-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Everything you need to create memorable experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} className="bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-800 p-8 rounded-2xl border border-blue-100 dark:border-slate-700 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-600 dark:bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Ticket className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Smart Ticketing</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Create, sell, and manage tickets effortlessly. Multiple ticket tiers, early bird discounts,
                and instant confirmation emails.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-gradient-to-br from-cyan-50 to-white dark:from-slate-800 dark:to-slate-800 p-8 rounded-2xl border border-cyan-100 dark:border-slate-700 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-14 h-14 bg-cyan-600 dark:bg-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <QrCode className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">QR Code Entry</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Seamless check-in with QR codes. Fast, secure, and contactless entry for all your attendees.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-gradient-to-br from-violet-50 to-white dark:from-slate-800 dark:to-slate-800 p-8 rounded-2xl border border-violet-100 dark:border-slate-700 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-14 h-14 bg-violet-600 dark:bg-violet-500 rounded-xl flex items-center justify-center mb-6">
                <Video className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Live Streaming</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Reach global audiences with high-quality live streaming. Virtual events made simple and engaging.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeInUp}
        className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">Host Your Events</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Whether you're organizing a conference, concert, workshop, or meetup,
                Eventify provides all the tools you need to succeed.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-lg mb-1">Easy Event Creation</h4>
                    <p className="text-slate-600 dark:text-slate-300">Set up your event in minutes with our intuitive dashboard</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-cyan-600 dark:bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-lg mb-1">Attendee Management</h4>
                    <p className="text-slate-600 dark:text-slate-300">Track registrations, send updates, and engage with attendees</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Organizer"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...staggerContainer}
        className="py-20 px-6 bg-white dark:bg-slate-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">Upcoming Events</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Discover amazing events happening near you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Tech Conference 2025',
                date: 'Nov 15, 2025',
                location: 'San Francisco, CA',
                image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600',
                price: '$299',
                category: 'Technology'
              },
              {
                title: 'Summer Music Festival',
                date: 'Dec 20, 2025',
                location: 'Los Angeles, CA',
                image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
                price: '$149',
                category: 'Music'
              },
              {
                title: 'Design Workshop',
                date: 'Nov 30, 2025',
                location: 'New York, NY',
                image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
                price: '$79',
                category: 'Workshop'
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-blue-600 dark:bg-blue-500 text-white text-xs font-semibold rounded-full">{event.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{event.title}</h3>
                  <div className="flex items-center text-slate-600 dark:text-slate-300 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{event.price}</span>
                    <button className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeInUp}
        className="py-20 px-6 bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-700 dark:to-cyan-700"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-10 opacity-90">
            Join thousands of event organizers and attendees using Eventify
          </p>
          <button
            onClick={() => navigate('/register')}
            className="px-8 py-4 bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 text-lg rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all transform hover:scale-105 shadow-xl font-semibold"
          >
            Create Your Free Account
          </button>
        </div>
      </motion.section>

      <ScrollToTop />
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6" />
                <span className="text-xl font-bold">Eventify</span>
              </div>
              <p className="text-slate-400 dark:text-slate-500 text-sm leading-relaxed">
                Making event management simple and enjoyable for everyone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400 dark:text-slate-500 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">Features</li>
                <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
                <li className="hover:text-white cursor-pointer transition-colors">For Organizers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 dark:text-slate-500 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">About</li>
                <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400 dark:text-slate-500 text-sm">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@eventify.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 Eventify. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
