import React from 'react';

const Card = ({ details, onClick, btnText }) => {

    return (
        <div className="relative w-60 h-60 overflow-hidden rounded-xl shadow-lg group">
            <img
                src={details.image}
                alt={details.imageAlt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-14 left-0 h-full w-full bg-black bg-opacity-70 text-white p-4 transform translate-y-full group-hover:translate-y-14 transition-transform duration-300 ease-in-out">
                <h3 className="text-lg font-semibold pb-3 text-nowrap">{details.name}</h3>
                 <p className="text-sm mt-1">{details.description}</p>
                {details.technologies ? <p className='italic pr-4'>{details.technologies}</p> : null}
                {details.institution ? <p className='italic pr-4' >{details.institution}</p> : null}

                {Array.isArray(details.dates) && details.dates.length > 1
                    ? details.dates.map((d) =>
                        <div className="flex" >
                            <div className="pr-2" >•</div>
                            <p>{d}</p>
                        </div>) : <p>{details.date}</p>}

                {onClick && (

                    <div className="text-center">
                        <button
                            onClick={onClick}
                            className="bg-blue-500 my-3 p-2 w-fit text-sm text-slate-200 rounded-xl text-nowrap hover:bg-slate-300 hover:text-primary"
                        >
                            {btnText}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
