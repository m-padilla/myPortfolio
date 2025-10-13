import { useNavigate } from 'react-router-dom';
import SectionHeading from '../SectionHeading';
import skills from '../../../data/skills.json'
import { getImageUrl } from '../../../utils';

function ShowSkills() {

  return (
    <div className="text-white">
      {/* heading part (title) */}
      <h2 className="text-sm font-semibold md:text-lg md:font-bold tracking-[1.75px] uppercase">
        Technologies and Tools I am familiar with:
      </h2>

      {/* skills list */}
      <ul className=" grid grid-cols-4 gap-3 mt-4">
        {skills.map((skill, id) => (
          <li
            key={id}
            className="flex flex-col items-center rounded-lg"
          >
            <div className="flex items-center justify-evenly w-8 aspect-square">
              <img
                src={skill.imageSrc}
                alt={skill.title}
                className="w-8"
              />
            </div>
            <p className="text-sm font-medium">{skill.title}</p>
          </li>
        ))}
      </ul>

    </div>
  );
}


function Introduction() {
  return (
    <div className='text-white pt-5  leading-7 md:text-lg text-sm'>

      Hi, I'm Marco Padilla — a recent Computer Science graduate from
      California State University, Los Angeles (
      <b className='font-bold bg-calstatela bg-400 text-transparent bg-clip-text animate-gradient'>
        Cal State LA
      </b>).
      I'm a naturally curious person with a strong passion for technology and continuous learning.
      As a software engineer, I'm always exploring new ways to improve my skills and build impactful
      solutions.

      <br />
      {/* <br />
      My main interest lies in frontend development, and I have hands-on experience with HTML, CSS, and
      JavaScript, along with frameworks and libraries like React and Tailwind CSS. I'm also familiar
      with Node.js for backend development, allowing me to contribute to full-stack projects when
      needed.
      <br />
      <br />
      I enjoy using code to solve real-world problems and help others through technology. Whether
      it’s through personal projects or collaborative work, I’m always eager to learn something
      new and grow as a developer. */}

    </div>
  )
}

function About() {
  const navigate = useNavigate()

  return (
    <SectionHeading id='aboutMe' title="About Me" styling='text-white bg-grey text-4xl'>
      <div
        className='w-full flex justify-center md:p-12 p-5 h-full bg-grey'
      >

        <div
          className='lg:flex font-mono '
        >
          {/* Hero Profile */}
          <div className="lg:w-2/5 md:h-[500px] overflow-hidden rounded-lg">
            <img
              className="md:h-full object-cover  shadow-lg scale-125"
              src={getImageUrl('hero/resized-profile-pic.jpg')}
              alt="Marco Padilla Profile Picture." />
          </div>


          <div className='md:flex lg:w-3/5 md:flex-col md:pr-[100px] md:pl-[50px]'>
            <ShowSkills />
            <Introduction />

            <div className="pt-4">
              <a
                className='p-3 bg-white rounded-lg hover:text-red-500'
                href="/about"
              >
                Read More About Me
              </a>
            </div>

          </div>

        </div>

      </div>

    </SectionHeading>

  )
}

export default About;
