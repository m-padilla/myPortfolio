import ShowSocials from '../.././Details/Socials'
import SectionHeading from '../SectionHeading';


function ShowSkills() {

  const s = ['Python', 'Java', 'JavaScript', 'React',
    'HTML', 'CSS', 'BootStrap', 'Tailwind CSS', 'MySQL', 'Git', 'C++'];

  return (
    <div>
      {s.map(i => (
        <button
          className='hover:cursor-default inline-block px-7 leading-7 mr-1 mb-1 rounded-md bg-black  text-white transition-all duration-[0.2s] ease-in-out delay-0 transition-normal text-sm '>
          {i}
        </button>
      ))}
    </div>
  )
}


function Introduction() {
  return (
    <div className='text-white px-10 md:px-[100px] leading-7 text-xs'>

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
            <div className='pb-3 text-white text-sm'>
              <b>Technologies and Tools I am familiar with:</b>
            </div>
            <ShowSkills />
          </div>

        </div>
      </div>


    </SectionHeading>

  )
}

export default About;
