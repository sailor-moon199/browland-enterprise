'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  glass?: boolean;
}

export default function Card({
  children,
  className = '',
  hoverable = false,
  glass = false,
}: CardProps) {
  const baseStyles = 'rounded-xl p-6 transition-all duration-300';
  
  const glassStyles = glass
    ? 'glassmorphism'
    : 'bg-white shadow-md';

  const hoverStyles = hoverable
    ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer'
    : '';

  return (
    <motion.div
      whileHover={hoverable ? { y: -4 } : {}}
      className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
}
