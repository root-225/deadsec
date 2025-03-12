'use client';

import React from 'react';
import clsx from 'clsx';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  containerClassName?: string;
}

const LoadingSpinner = ({ 
  size = 'md', 
  className = '',
  containerClassName = ''
}: LoadingSpinnerProps) => {
  const spinnerClasses = clsx(
    'animate-spin rounded-full border-current border-r-transparent border-b-transparent border-l-transparent',
    {
      'h-4 w-4 border-2': size === 'sm',
      'h-8 w-8 border-2': size === 'md',
      'h-16 w-16 border-4': size === 'lg'
    },
    className
  );

  const containerClasses = clsx(
    'flex justify-center items-center',
    containerClassName
  );

  return (
    <div className={containerClasses}>
      <div className={spinnerClasses}></div>
    </div>
  );
};

export default LoadingSpinner;