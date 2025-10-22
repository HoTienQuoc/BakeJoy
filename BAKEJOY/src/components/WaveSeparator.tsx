// WaveSeparator.tsx
import React from 'react';

interface WaveSeparatorProps {
    topColor: string;
    bottomColor: string;
}

const WaveSeparator: React.FC<WaveSeparatorProps> = ({topColor, bottomColor}) => {
    return (
        <div className={`w-full overflow-hidden leading-none bg-[${topColor}]`}>
            <svg
                viewBox="0 0 1440 100"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-[100px]"
                preserveAspectRatio="none"
            >
                <path
                    d="
                        M0,50
                        Q60,10 120,50
                        Q180,90 240,50
                        Q300,10 360,50
                        Q420,90 480,50
                        Q540,10 600,50
                        Q660,90 720,50
                        Q780,10 840,50
                        Q900,90 960,50
                        Q1020,10 1080,50
                        Q1140,90 1200,50
                        Q1260,10 1320,50
                        Q1380,90 1440,50
                        L1440,100
                        L0,100
                        Z"
                    fill={`${bottomColor}`}
                />
            </svg>

        </div>
    );
};

export default WaveSeparator;
