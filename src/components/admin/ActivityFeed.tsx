'use client';

import { motion } from 'framer-motion';
import { FaNewspaper, FaEnvelope, FaUser, FaPalette } from 'react-icons/fa';
import clsx from 'clsx';

interface Activity {
  id: string;
  type: 'post' | 'message' | 'user' | 'appearance';
  title: string;
  titleFr?: string;
  description: string;
  descriptionFr?: string;
  timestamp: string;
  user?: {
    name: string;
    avatar?: string;
  };
}

interface ActivityFeedProps {
  activities: Activity[];
  language?: 'en' | 'fr';
}

const activityIcons = {
  post: FaNewspaper,
  message: FaEnvelope,
  user: FaUser,
  appearance: FaPalette
};

const activityColors = {
  post: 'text-blue-500 bg-blue-500/10',
  message: 'text-green-500 bg-green-500/10',
  user: 'text-purple-500 bg-purple-500/10',
  appearance: 'text-orange-500 bg-orange-500/10'
};

export default function ActivityFeed({ activities, language = 'en' }: ActivityFeedProps) {
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat(language === 'en' ? 'en-US' : 'fr-FR', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="space-y-4">
      {activities.map((activity, index) => {
        const Icon = activityIcons[activity.type];
        const colorClass = activityColors[activity.type];

        return (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700"
          >
            <div className={clsx(
              'p-2 rounded-lg',
              colorClass
            )}>
              <Icon className="w-5 h-5" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <p className="text-sm font-medium text-slate-200 truncate">
                  {language === 'en' ? activity.title : (activity.titleFr || activity.title)}
                </p>
                <span className="text-xs text-slate-500 whitespace-nowrap ml-4">
                  {formatDate(activity.timestamp)}
                </span>
              </div>

              <p className="mt-1 text-sm text-slate-400 line-clamp-2">
                {language === 'en' ? activity.description : (activity.descriptionFr || activity.description)}
              </p>

              {activity.user && (
                <div className="mt-2 flex items-center">
                  {activity.user.avatar ? (
                    <img
                      src={activity.user.avatar}
                      alt={activity.user.name}
                      className="w-5 h-5 rounded-full"
                    />
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center">
                      <span className="text-xs text-slate-300">
                        {activity.user.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <span className="ml-2 text-xs text-slate-500">
                    {activity.user.name}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
