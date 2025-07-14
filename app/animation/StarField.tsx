'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type StarType = {
  id: number;
  x: number;
  y: number;
  size: number;
};

const generateStars = (count: number): StarType[] => {
  return Array.from({ length: count }, () => ({
    id: Math.random(),
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
  }));
};

const Star = ({ x, y, size }: StarType) => (
  <motion.div
    className="absolute bg-white rounded-full"
    style={{
      width: size,
      height: size,
      top: `${y}vh`,
      left: `${x}vw`,
    }}
    animate={{ opacity: [0.2, 1, 0.2] }}
    transition={{ duration: Math.random() * 2 + 1, repeat: Infinity }}
  />
);

interface StarfieldProps {
  count?: number;
  className?: string;
}

export default function Starfield({ count = 100, className = '' }: StarfieldProps) {
  const [stars, setStars] = useState<StarType[]>([]);

  useEffect(() => {
    setStars(generateStars(count));
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none -z-0 ${className}`}>
      {stars.map((star) => (
        <Star key={star.id} {...star} />
      ))}
    </div>
  );
}
