'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import clsx from 'clsx';

interface StatsCardProps {
  title: string;
  titleFr?: string;
  value: number | string;
  icon: IconType;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: 'blue' | 'green' | 'purple' | 'orange';
  language?: 'en' | 'fr';
}

const colors = {
  blue: {
    bg: 'from-blue-500/5 to-cyan-500/5',
    border: 'border-blue-500/10',
    text: 'from-blue-500 to-cyan-500',
    icon: 'text-blue-500'
  },
  green: {
    bg: 'from-green-500/5 to-teal-500/5',
    border: 'border-green-500/10',
    text: 'from-green-500 to-teal-500',
    icon: 'text-green-500'
  },
  purple: {
    bg: 'from-purple-500/5 to-pink-500/5',
    border: 'border-purple-500/10',
    text: 'from-purple-500 to-pink-500',
    icon: 'text-purple-500'
  },
  orange: {
    bg: 'from-orange-500/5 to-red-500/5',
    border: 'border-orange-500/10',
    text: 'from-orange-500 to-red-500',
    icon: 'text-orange-500'
  }
};

export default function StatsCard({
  title,
  titleFr,
  value,
  icon: Icon,
  trend,
  color = 'blue',
  language = 'en'
}: StatsCardProps) {
  const colorClasses = colors[color];
  const displayTitle = language === 'en' ? title : (titleFr || title);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className={clsx(
        'p-6 rounded-xl border backdrop-blur-sm',
        'bg-gradient-to-r',
        colorClasses.bg,
        colorClasses.border
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-slate-400">
          {displayTitle}
        </h3>
        <Icon className={clsx('w-5 h-5', colorClasses.icon)} />
      </div>

      <div className="flex items-end justify-between">
        <div>
          <div className={clsx(
            'text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent',
            colorClasses.text
          )}>
            {value}
          </div>

          {trend && (
            <div className={clsx(
              'flex items-center mt-2 text-sm',
              trend.isPositive ? 'text-green-500' : 'text-red-500'
            )}>
              <span>
                {trend.isPositive ? '↑' : '↓'} {trend.value}%
              </span>
              <span className="ml-1 text-slate-400">
                {language === 'en' ? 'vs last month' : 'vs mois dernier'}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
