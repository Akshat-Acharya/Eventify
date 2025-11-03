import { motion } from 'framer-motion';
import DashboardLayout from '../components/DashboardLayout';
import { Calendar, MapPin, Clock, Download, QrCode } from 'lucide-react';
import { triggerConfetti } from '../components/Confetti';
import { useState } from 'react';

const MyBookings = () => {
  const [showingQR, setShowingQR] = useState<string | null>(null);

  const bookings = [
    {
      id: 'BK001',
      eventName: 'Tech Conference 2025',
      date: 'Nov 15, 2025',
      time: '9:00 AM',
      location: 'San Francisco, CA',
      ticketType: 'VIP Pass',
      status: 'confirmed',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'BK002',
      eventName: 'Summer Music Festival',
      date: 'Dec 20, 2025',
      time: '6:00 PM',
      location: 'Los Angeles, CA',
      ticketType: 'General Admission',
      status: 'confirmed',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'BK003',
      eventName: 'Design Workshop',
      date: 'Nov 30, 2025',
      time: '2:00 PM',
      location: 'New York, NY',
      ticketType: 'Standard',
      status: 'confirmed',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
  ];

  const handleViewQR = (bookingId: string) => {
    setShowingQR(bookingId);
    triggerConfetti();
    setTimeout(() => setShowingQR(null), 3000);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">My Bookings</h2>
          <p className="text-slate-600 dark:text-slate-300">View and manage your event tickets</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Active Tickets ({bookings.length})</h3>
            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm">
              Filter
            </button>
          </div>

          <div className="space-y-4">
            {bookings.map((booking, index) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="border border-slate-200 dark:border-slate-700 rounded-xl p-5 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <img
                    src={booking.image}
                    alt={booking.eventName}
                    className="w-full md:w-32 h-32 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{booking.eventName}</h4>
                        <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                          {booking.status.toUpperCase()}
                        </span>
                      </div>
                      <span className="text-sm text-slate-500 dark:text-slate-400">#{booking.id}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center text-slate-600 dark:text-slate-300 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{booking.date}</span>
                      </div>
                      <div className="flex items-center text-slate-600 dark:text-slate-300 text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{booking.time}</span>
                      </div>
                      <div className="flex items-center text-slate-600 dark:text-slate-300 text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{booking.location}</span>
                      </div>
                      <div className="text-slate-600 dark:text-slate-300 text-sm">
                        <span className="font-medium">Ticket: </span>{booking.ticketType}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <button 
                        onClick={() => handleViewQR(booking.id)}
                        className="flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm font-medium"
                      >
                        <QrCode className="w-4 h-4 mr-2" />
                        {showingQR === booking.id ? 'Ticket Ready!' : 'View QR Code'}
                      </button>
                      <button className="flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-sm font-medium">
                        <Download className="w-4 h-4 mr-2" />
                        Download Ticket
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
        >
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Need Help?</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4">Have questions about your booking? Contact our support team.</p>
          <button className="px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-medium">
            Contact Support
          </button>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default MyBookings;
