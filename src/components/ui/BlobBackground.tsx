import React from 'react';
import { motion } from 'framer-motion';
interface BlobBackgroundProps {
  className?: string;
  color?: string;
  position?: 'left' | 'right' | 'center';
  delay?: number;
}
export function BlobBackground({
  className = '',
  color = 'bg-amber-200',
  position = 'left',
  delay = 0
}: BlobBackgroundProps) {
  const positionClasses = {
    left: '-left-20 top-0',
    right: '-right-20 bottom-0',
    center: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
  };
  return (
    <div
      className={`absolute -z-10 opacity-30 blur-3xl pointer-events-none overflow-visible ${positionClasses[position]} ${className}`}>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          borderRadius: [
          '60% 40% 30% 70% / 60% 30% 70% 40%',
          '30% 60% 70% 40% / 50% 60% 30% 60%',
          '60% 40% 30% 70% / 60% 30% 70% 40%']

        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay
        }}
        className={`w-96 h-96 ${color}`} />

    </div>);

}