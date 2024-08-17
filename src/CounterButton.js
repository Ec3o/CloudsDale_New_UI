import React, { useState } from 'react';

const CounterButton = () => {
    const [count, setCount] = useState(1);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setCount(count + 1);
        setTimeout(() => setIsClicked(false), 200); // 动画恢复原状
    };

    return (
        <>
            <style>
                {`@import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');`}
            </style>
            <div className="p-[2px] bg-[#f8dfb7] rounded-[28px] inline-block">
                <div className="p-[2px] bg-[#fdc05a] rounded-[26px]">
                    <div className="p-[0.25px] bg-[#452d9c] rounded-[25px]">
                        <div className="relative inline-flex items-center justify-center">
                            <button
                                className={`inline-flex items-center justify-center bg-[#606ad6] border-2 border-[#606ad6] rounded-[25px] py-2 px-5 text-white font-[Lilita One] cursor-pointer outline-none transition-all duration-200 ease-in-out transform-gpu ${
                                    isClicked
                                        ? 'translate-y-0.25 shadow-sm' // 按下时按钮向下移动
                                        : '-translate-y-1 -translate-x-1 shadow-2xl' // 初始状态按钮浮动在上方
                                } ${isClicked ? '' : 'hover:animate-breathing'}`}
                                onClick={handleClick}
                            >
                                <span className="mr-2 font-lilita">count</span>
                                <span className="bg-white text-[#637DFF] rounded-[25px] py-1 px-2 min-w-[30px] text-center font-lilita">
                                    {count}
                                </span>
                            </button>
                            <div className="absolute flex items-center top-[-10px] right-[-30px]">
                                <LargeStarIcon className="w-5 h-5" />
                                <SmallStarIcon className="w-3 h-3 -ml-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes breathing {
                    0% {
                        transform: scale(1);
                        transform: translate(-5px,-5px)
                    }
                    50% {
                        transform: scale(1);
                        
                    }
                    100% {
                        transform: scale(1);
                        transform: translate(-5px,-5px)
                    }
                }
                .hover\\:animate-breathing:hover {
                    animation: breathing 2s ease-in-out infinite;
                }
            `}</style>
        </>
    );
};

const LargeStarIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{
            shapeRendering: "geometricPrecision",
            textRendering: "geometricPrecision",
            imageRendering: "optimizeQuality",
            fillRule: "evenodd",
            clipRule: "evenodd"
        }}
        viewBox="0 0 784.11 815.53"
    >
        <g id="Layer_x0020_1">
            <path
                className="fil0"
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                fill="#F8C882"
            ></path>
        </g>
    </svg>
);

const SmallStarIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{
            shapeRendering: "geometricPrecision",
            textRendering: "geometricPrecision",
            imageRendering: "optimizeQuality",
            fillRule: "evenodd",
            clipRule: "evenodd"
        }}
        viewBox="0 0 784.11 815.53"
    >
        <g id="Layer_x0020_1">
            <path
                className="fil0"
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                fill="#F8C882"
            ></path>
        </g>
    </svg>
);

export default CounterButton;
