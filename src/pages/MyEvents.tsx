import { motion } from 'framer-motion';
import DashboardLayout from '../components/DashboardLayout';
import { Calendar, Users, TrendingUp, Plus, Edit, BarChart3 } from 'lucide-react';

const MyEvents = () => {
  const events = [
    {
      id: 'EV001',
      name: 'Web Dev Meetup',
      date: 'Jan 10, 2026',
      attendees: 45,
      ticketsSold: 45,
      totalTickets: 50,
      revenue: '$2,250',
      status: 'upcoming',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'EV002',
      name: 'Startup Pitch Night',
      date: 'Feb 5, 2026',
      attendees: 78,
      ticketsSold: 78,
      totalTickets: 100,
      revenue: '$3,900',
      status: 'upcoming',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'EV003',
      name: 'Photography Workshop',
      date: 'Dec 15, 2025',
      attendees: 30,
      ticketsSold: 30,
      totalTickets: 30,
      revenue: '$1,500',
      status: 'completed',
      image: 'https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">My Events</h2>
            <p className="text-slate-600 dark:text-slate-300">Manage and track your hosted events</p>
          </div>
          <button className="flex items-center px-5 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-medium">
            <Plus className="w-5 h-5 mr-2" />
            Create Event
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Total Events', value: events.length, icon: Calendar, color: 'from-blue-500 to-blue-600' },
            { label: 'Total Attendees', value: events.reduce((sum, e) => sum + e.attendees, 0), icon: Users, color: 'from-cyan-500 to-cyan-600' },
            { label: 'Total Revenue', value: '$7,650', icon: TrendingUp, color: 'from-emerald-500 to-emerald-600' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
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
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">All Events</h3>

          <div className="space-y-4">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="border border-slate-200 dark:border-slate-700 rounded-xl p-5 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full md:w-32 h-32 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{event.name}</h4>
                        <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                          event.status === 'upcoming'
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                        }`}>
                          {event.status.toUpperCase()}
                        </span>
                      </div>
                      <span className="text-sm text-slate-500 dark:text-slate-400">#{event.id}</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Date</p>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">{event.date}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Attendees</p>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">{event.attendees}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Tickets Sold</p>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">{event.ticketsSold}/{event.totalTickets}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Revenue</p>
                        <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{event.revenue}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <button className="flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm font-medium">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Event
                      </button>
                      <button className="flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-sm font-medium">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        View Analytics
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default MyEvents;
