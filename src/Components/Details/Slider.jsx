import React, { useState } from 'react'


export default function Slider({ data }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
            <div className="relative">
                <p className='text-center text-black'>{data[currentIndex].taskName}</p>
                <div className='flex'>
                    <img
                        src={data[currentIndex].image}
                        alt={`Slide ${currentIndex + 1}`}
                        className="h-48 mx-auto object-cover"
                    />
                    <p className="pt-3 pl-5  text-black bold ">
                        {data[currentIndex].description}
                    </p>

                </div>
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 -left-7 transform -translate-y-1/2 hover:bg-sky-400 bg-gray-500 text-white p-2 rounded-full"
                >
                    ‹
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 -right-4 transform -translate-y-1/2 hover:bg-sky-400 bg-gray-500 text-white p-2 rounded-full"
                >
                    ›
                </button>
                <div className="p-4 text-center">
                    <p>{`Slide ${currentIndex + 1} of ${data.length}`}</p>
                </div>

                {/* <div className="pt-3">
                    <ul className='pl-5 list-disc'>
                        {data[currentIndex].content.map((j, index) => (
                            <li key={index} className='text-sm'>{j}</li>
                        ))}
                    </ul>
                </div> */}

                {/* <p className="pt-3 pl-5  text-black bold ">
                    {data[currentIndex].description}
                </p> */}

            </div>

        </>
    )
}
