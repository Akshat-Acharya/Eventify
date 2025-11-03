import { motion } from 'framer-motion';
import DashboardLayout from '../components/DashboardLayout';
import { Calendar, Ticket, TrendingUp, Users } from 'lucide-react';

const Dashboard = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const stats = [
    { label: 'Upcoming Events', value: '5', icon: Calendar, color: 'from-blue-500 to-blue-600' },
    { label: 'Total Bookings', value: '12', icon: Ticket, color: 'from-cyan-500 to-cyan-600' },
    { label: 'Events Hosted', value: '3', icon: TrendingUp, color: 'from-violet-500 to-violet-600' },
    { label: 'Total Attendees', value: '248', icon: Users, color: 'from-emerald-500 to-emerald-600' },
  ];

  const upcomingEvents = [
    {
      title: 'Tech Conference 2025',
      date: 'Nov 15, 2025',
      time: '9:00 AM',
      location: 'San Francisco, CA',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Summer Music Festival',
      date: 'Dec 20, 2025',
      time: '6:00 PM',
      location: 'Los Angeles, CA',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Design Workshop',
      date: 'Nov 30, 2025',
      time: '2:00 PM',
      location: 'New York, NY',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Welcome back, John!</h2>
          <p className="text-slate-600 dark:text-slate-300">Here's what's happening with your events today.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Upcoming Events</h3>
            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">View All</button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">{event.title}</h4>
                  <div className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <p className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date} at {event.time}
                    </p>
                    <p className="truncate">{event.location}</p>
                  </div>
                  <button className="mt-4 w-full py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm font-medium">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-700 dark:to-cyan-700 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-2">Ready to host an event?</h3>
          <p className="mb-6 opacity-90">Create and manage your own events with ease.</p>
          <button className="px-6 py-3 bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-semibold">
            Create Event
          </button>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
