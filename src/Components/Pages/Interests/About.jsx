import SectionHeading from '../SectionHeading';
import skills from '../../../data/skills.json'
import { getImageUrl } from '../../../utils';

function ShowSkills() {

  return (
    // section part (container)
    <div className='text-white mt-[29px]'>

      {/* heading part (title) */}
      <h2 className='text-lg font-bold tracking-[1.75px] uppercase'>Technologies and Tools I am familiar with:</h2>

      {/* content */}
      <div className='flex flex-row justify-evenly mt-4'>

        {/*skills */}
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>

          {skills.map((skill, id) => {
            return <div 
            key={id}
            className='flex flex-col items-center gap-3'
            >
              {/* image display */}
              <div 
              className='bg-navy_blue rounded-full flex items-center justify-center w-[120px] h-[120px]'
              >
                <img
                  src={getImageUrl(skill.imageSrc)}
                  alt={skill.title}
                  className='w-[75px]'
                />
              </div>

              {/* Title display */}
              <p
              className="text-xl font-medium"
              >
                {skill.title}
              </p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}


function Introduction() {
  return (
    <div className='text-white mt-[29px] px-10 md:px-[100px] leading-7 text-md'>

      Hi, I'm Marco Padilla — a recent Computer Science graduate from
      California State University, Los Angeles (
      <b className='font-bold bg-calstatela bg-400 text-transparent bg-clip-text animate-gradient'>
        Cal State LA
      </b>).
      I'm a naturally curious person with a strong passion for technology and continuous learning.
      As a software engineer, I’m always exploring new ways to improve my skills and build impactful
      solutions.

      <br />
      <br />
      My main interest lies in frontend development, and I have hands-on experience with HTML, CSS, and
      JavaScript, along with frameworks and libraries like React and Tailwind CSS. I'm also familiar
      with Node.js for backend development, allowing me to contribute to full-stack projects when
      needed.
      <br />
      <br />
      I enjoy using code to solve real-world problems and help others through technology. Whether
      it’s through personal projects or collaborative work, I’m always eager to learn something
      new and grow as a developer.

    </div>
  )
}

function About() {
  return (
    <SectionHeading id='aboutMe' title="About Me" styling='text-white text-4xl'>
      <div className='bg-grey font-mono'>
        <div className='grid gap-8 md:grid-cols-2'>

          <Introduction />


          <div className='px-16'>
            <ShowSkills />
          </div>

        </div>
      </div>


    </SectionHeading>

  )
}

export default About;
