'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  asChild = false,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-browland-blue text-white hover:bg-browland-dark hover:shadow-lg hover:-translate-y-0.5 focus:ring-browland-blue/50',
    secondary: 'bg-browland-light-gray text-browland-dark hover:bg-gray-200 focus:ring-browland-gray/50',
    outline: 'border-2 border-browland-blue text-browland-blue hover:bg-browland-blue hover:text-white focus:ring-browland-blue/50',
    gold: 'bg-browland-gold text-white hover:bg-yellow-600 hover:shadow-lg hover:-translate-y-0.5 focus:ring-browland-gold/50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const Component = asChild ? motion.button : motion.button;

  return (
    <Component
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
