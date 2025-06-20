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
                <p className='text-center text-black font-serif font-bold pb-2 italic'>{data[currentIndex].taskName}</p>

                <img
                    src={data[currentIndex].image}
                    alt={`Slide ${currentIndex + 1}`}
                    className="h-48 mx-auto"
                />

                <button
                    onClick={prevSlide}
                    className="absolute top-2/4 -left-7 transform -translate-y-1/2 hover:bg-sky-400 bg-gray-500 text-white p-2 rounded-full"
                >
                    ‹
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-2/4 -right-4 transform -translate-y-1/2 hover:bg-sky-400 bg-gray-500 text-white p-2 rounded-full"
                >
                    ›
                </button>
                <div className="py-2 text-center">
                    <p>{`Slide ${currentIndex + 1} of ${data.length}`}</p>
                </div>

                {data[currentIndex].description
                    ? <p className="pl-5 text-black bold ">{data[currentIndex].description}</p>
                    : <p className="pl-5 text-black bold ">{'Description has not yet been added.'}</p>}


            </div>

        </>
    )
}
