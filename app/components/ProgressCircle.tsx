interface ProgressCircleProps {
    percentage: number;
}

export default function ProgressCircle({ percentage }: ProgressCircleProps) {
    // Constrain the percentage between 0 and 100
    const constrainedPercentage = Math.min(Math.max(percentage, 0), 100);

    // Define gradient from red to green
    const gradientColor = `conic-gradient(
        hsl(${(120 * constrainedPercentage) / 100}, 100%, 50%) ${constrainedPercentage * 3.6}deg,
        #d1d5db ${constrainedPercentage * 3.6}deg
      )`;

    return (
        <div className="flex justify-center items-center ml-2">
            <div
                className="relative w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-xl"
                style={{
                    background: gradientColor
                }}
            >
                <div className="w-9 h-9 bg-slate-100 rounded-full p-1 pt-2 text-center text-sm text-black ">
                    {constrainedPercentage}%
                </div>
            </div>
        </div>
    );
}
