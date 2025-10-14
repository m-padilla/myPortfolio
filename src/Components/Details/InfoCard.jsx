// import React from 'react'
import { getImageUrl } from '../../utils';
import { useNavigate } from 'react-router-dom';


function ShowSkills({ skills }) {
    return (
        <div className="text-white">
            {/* skills list */}
            <ul className=" grid grid-cols-4 md:gap-3 gap-6 mt-4">
                {skills.map((skill, id) => (
                    <li
                        key={id}
                        className="flex flex-col items-center rounded-lg"
                    >
                        <div className="flex items-center justify-evenly w-8 aspect-square">
                            {
                                skill.imageSrc
                                    ? <img
                                        src={skill.imageSrc}
                                        alt={skill.title}
                                        className="w-8"
                                    /> : null
                            }


                        </div>
                        {
                            skill.title
                                ? <p className="text-sm font-medium">{skill.title}</p>
                                : null

                        }

                    </li>
                ))}
            </ul>
        </div>
    );
}

function InfoCard({ details }) {
    const navigate = useNavigate();

    return (
        <div 
        className='md:flex justify-center bg-grey w-full h-full p-5 md:p-12'
        // className=' text-left w-full justify-center h-full md:max-w-fit text-white p-5 md:p-12 lg:w-3/5'
        >
            <div className=' md:w-3/5 text-white text-left pr-10'>
                <p className='py-2 uppercase text-2xl'>{details.role}</p>

                <h1 className='flex py-2 text-3xl font-bold'>
                    <div>{details.name}</div>
                </h1>

                <p className='py-2 text-xl'>{details.date}</p>

                <ShowSkills skills={details.technologies} />

                <p className='flex text-start py-2 text-sm md:text-xl'>
                    {details.description}
                </p>

                <div className='pt-5 pb-10'>

                    <button 
                    onClick={details.category === "Work" ? () => navigate(`/work/${details.name}`) : () => navigate(`/project/${details.name}`)}
                    className='bg-transparent hover:bg-stone-700 rounded-lg p-3 border-2 border-teal-500'
                    >View project</button>

                </div>

            </div>

            <div 
            className='md:w-3/5'
            >

                <div className='flex justify-center content-center h-[420px] overflow-hidden w-full bg-white rounded-xl'>
                    
                    {details.image ?
                        <img
                            src={getImageUrl(details.image)}
                            alt={details.imageAlt}
                            className=" object-cover"
                        />
                        :

                        <img
                            src={details.src}
                            alt={details.imageAlt}
                            className="object-cover"
                        />


                    }

                </div> 

            </div>

        </div>
    )
}

export default InfoCard