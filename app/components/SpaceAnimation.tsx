import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

const Star = ({ x, y, size }: { x: number; y: number; size: number }) => (
  <motion.div
    className="absolute bg-white rounded-full"
    style={{ width: size, height: size, top: `${y}vh`, left: `${x}vw` }}
    animate={{ opacity: [0.2, 1, 0.2] }}
    transition={{ duration: Math.random() * 2 + 1, repeat: Infinity }}
  />
);

export function SpaceBackground({ starCount = 150, className = "" }: { starCount?: number; className?: string }) {
  const [stars, setStars] = useState<StarType[]>([]);

  useEffect(() => {
    setStars(generateStars(starCount));
  }, [starCount]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {stars.map((star) => (
        <Star key={star.id} x={star.x} y={star.y} size={star.size} />
      ))}
    </div>
  );
}

export default SpaceBackground;
