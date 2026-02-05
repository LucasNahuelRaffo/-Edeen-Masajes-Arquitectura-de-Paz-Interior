import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
export function FloatingParticles() {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      duration: number;
      delay: number;
    }>>(
    []);
  useEffect(() => {
    // Generate random particles
    const particleCount = 15;
    const newParticles = Array.from({
      length: particleCount
    }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) =>
      <motion.div
        key={p.id}
        className="absolute rounded-full bg-amber-300/40 blur-[1px]"
        style={{
          left: `${p.x}%`,
          top: `${p.y}%`,
          width: p.size,
          height: p.size
        }}
        animate={{
          y: [0, -100, 0],
          x: [0, 50, 0],
          opacity: [0, 0.6, 0]
        }}
        transition={{
          duration: p.duration,
          repeat: Infinity,
          ease: 'linear',
          delay: p.delay
        }} />

      )}
    </div>);

}