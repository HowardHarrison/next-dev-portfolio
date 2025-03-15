import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface ProgressCircleProps {
    percentage: number;
}

export default function ProgressCircle({ percentage }: ProgressCircleProps) {
    const [displayedPercentage, setDisplayedPercentage] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            background: `conic-gradient(
                hsl(${(120 * percentage) / 100}, 100%, 50%) ${0}deg ${percentage * 3.6}deg,
                #d1d5db ${percentage * 3.6}deg 360deg
            )`,
            transition: { duration: 5000, ease: "easeInOut" },
        });

        const interval = setInterval(() => {
            setDisplayedPercentage((prev) => {
                if (prev < percentage) return prev + 1;
                clearInterval(interval);
                return prev;
            });
        }, 10);

        return () => clearInterval(interval);
    }, [percentage, controls]);

    return (
        <div className="flex justify-center items-center ml-2">
            <motion.div
                className="relative w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={0}
                animate={controls}
            >
                <div className="w-9 h-9 bg-slate-100 rounded-full p-1 pt-2 text-center text-sm text-black">
                    {displayedPercentage}%
                </div>
            </motion.div>
        </div>
    );
}
