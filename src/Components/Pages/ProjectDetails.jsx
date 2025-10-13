import { useState } from "react";
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import Works from '../../data/work.json'
import Projects from "../../data/projects.json"
import { getImageUrl } from '../../utils';


function ProjectDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const initalStackToShow = 4
  const [showStack, setShowStack] = useState(initalStackToShow)

  const isWorkRoute = location.pathname.startsWith('/work');

  const dataSource = isWorkRoute ? Works : Projects;


  const { name } = useParams();

  const item = dataSource.find(i => i.name === name);

  const displayedStack = item.technologies.slice(0, showStack)

  return (
    <div className="w-full bg-primary">

      <section
        className="max-w-[1100px] m-auto bg-primary text-white pt-[clamp(6vh,2rem,12vh)] px-4 pb-[22vh]"
      >
        <button
          onClick={() => navigate(-1)}
          className="pb-5"
        >{"<-- Go Back"}</button>

        <h1
          className='text-4xl font-bold pb-5'>
          {item.name && item.name}</h1>

        {item.details.description && <p dangerouslySetInnerHTML={{ __html: item.details.description }} />}

        <div className='flex flex-row flex-nowrap justify-around py-8'>
          <div className=' basis-full'>
            <h3 className='pb-3 text-xl font-bold'>Type</h3>
            <div>{item.details.type && item.details.type}</div>
          </div>

          <div className=' basis-full'>
            <h3 className='pb-3 text-xl font-bold'>Stack</h3>
            {displayedStack && displayedStack.map(tech => (
              <div
                key={tech.title}
                className='flex pb-2'
              >
                <img
                  src={tech.imageSrc}
                  className='h-6 aspect-square'
                />
                <p className='pl-3'>{tech.title}

                </p>
              </div>
            ))}
            {
              showStack < item.technologies.length && (
                <button
                  onClick={() => setShowStack(item.technologies.length)}
                  className='hover:text-orange-600 hover:underline'
                >View More</button>)
            }
            {
              showStack > initalStackToShow && (
                <button
                  onClick={() => setShowStack(initalStackToShow)}
                  className='hover:text-orange-600 hover:underline'
                >View Less</button>)
            }

          </div>

          <div className=' basis-full'>
            <h3 className='pb-3 text-xl font-bold'>Code</h3>
            <a
              target="_blank"
              href={item.git && item.git}
              className='hover:text-orange-600 hover:underline'
            >Github</a>
          </div>

          {
            item.details.url && <div className=' basis-full'>
              <h3 className='pb-3 text-xl font-bold'>Live</h3>
              <a
                target="_blank"
                href={item.details.url}
                className='hover:text-orange-600 hover:underline'
              >Site</a>
            </div>
          }


        </div>


        <div>
          <div className="flex justify-center pb-10">

            <div
              className='flex justify-center items-center rounded-md bg-white overflow-hidden h-60 w-fit'
            >
              {
                item.image && (
                  <img
                    src={getImageUrl(item.image)}
                    alt={item.imageAlt}
                    title={item.name}
                    className='h-full w-full object-cover'
                  />
                )
              }
              {
                item.src && (
                  <img
                    src={item.src}
                    alt={item.imageAlt}
                    title={item.name}
                    className='h-full w-full object-cover'
                  />
                )
              }


            </div>

          </div>

          {item.details.explination && item.details.explination.map((exp, index) => (
            <DetailsExplination
              key={index}
              heading={exp.heading}
              paragraph={exp.paragraph}
              className="gap-10"
            />

          ))}

        </div>
      </section>
    </div>

  )
}

function DetailsExplination({ heading, paragraph }) {

  return (
    <>
      <h1 className='pb-2 text-2xl font-bold'>{heading}</h1>
      <p className='pb-6' dangerouslySetInnerHTML={{ __html: paragraph }} />
    </>
  )
}

export default ProjectDetails;