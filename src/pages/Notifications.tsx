import { motion } from 'framer-motion';
import DashboardLayout from '../components/DashboardLayout';
import { Bell, Calendar, Ticket, Users, CheckCircle2 } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'booking',
      icon: Ticket,
      title: 'Booking Confirmed',
      message: 'Your ticket for Tech Conference 2025 has been confirmed',
      time: '2 hours ago',
      read: false,
      color: 'blue'
    },
    {
      id: 2,
      type: 'event',
      icon: Calendar,
      title: 'Event Reminder',
      message: 'Summer Music Festival starts in 3 days',
      time: '5 hours ago',
      read: false,
      color: 'violet'
    },
    {
      id: 3,
      type: 'attendee',
      icon: Users,
      title: 'New Attendee',
      message: '5 new people registered for your Web Dev Meetup',
      time: '1 day ago',
      read: true,
      color: 'cyan'
    },
    {
      id: 4,
      type: 'success',
      icon: CheckCircle2,
      title: 'Event Published',
      message: 'Your event "Photography Workshop" is now live',
      time: '2 days ago',
      read: true,
      color: 'emerald'
    },
    {
      id: 5,
      type: 'booking',
      icon: Ticket,
      title: 'Ticket Download',
      message: 'Your ticket for Design Workshop is ready to download',
      time: '3 days ago',
      read: true,
      color: 'blue'
    },
  ];

  const getColorClasses = (color: string, read: boolean) => {
    const opacity = read ? 'opacity-60' : '';
    const colorMap: Record<string, string> = {
      blue: `bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 ${opacity}`,
      violet: `bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 ${opacity}`,
      cyan: `bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 ${opacity}`,
      emerald: `bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 ${opacity}`,
    };
    return colorMap[color] || colorMap.blue;
  };

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
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Notifications</h2>
            <p className="text-slate-600 dark:text-slate-300">Stay updated with your events and bookings</p>
          </div>
          <button className="px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors font-medium">
            Mark all as read
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
        >
          <div className="divide-y divide-slate-200 dark:divide-slate-700">
            {notifications.map((notification, index) => {
              const Icon = notification.icon;
              return (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  className={`p-5 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer ${
                    !notification.read ? 'bg-blue-50/30 dark:bg-blue-900/10' : ''
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${getColorClasses(notification.color, notification.read)}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-semibold text-slate-900 dark:text-white">
                          {notification.title}
                          {!notification.read && (
                            <span className="ml-2 inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                          )}
                        </h4>
                        <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap ml-2">
                          {notification.time}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {notification.message}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center py-8"
        >
          <Bell className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
          <p className="text-slate-600 dark:text-slate-400">You're all caught up!</p>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;
