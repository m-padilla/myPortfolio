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


function Interests() {
  return (
    <div className='py-20 bg-primary font-mono'>
      <SectionHeading text="Interests" syling='text-white text-4xl' />

      <div className='pt-16 grid grid-cols-2'>

        <div className='text-white px-[100px] leading-7 text-xs'>
          Hi, nice to meet you! I'm a recent graduate from California State University, Los Angeles (
          <b className='font-bold bg-calstatela bg-400 text-transparent bg-clip-text animate-gradient'> CalState Los Angeles </b>), 
          where I earned my Bachelor's degree in Computer Science. I'm a very curious person by nature and am always looking for
          new ways to improve my skills as a software engineer.
          <br /><br />
          My main interest is in backend software engineering and I have professional experience in
          Python and Java. I am also familiar with other languages as well as frameworks such as Spring Boot, React, and Flask.
          I love using my skills and knowledge to help
          others in ways that have real world impact.
          <br /><br />
          I'm passionate about both learning and teaching, and am almost
          always working on a new project to expand my skillset. Additionally, I take pride in my ability to deconstruct and
          effectively teach complex concepts to others, enabling them to grasp and overcome any challenges they may face.
          My passion for learning and teaching has driven me to establish and lead a student organization in my school called TIPSE,
          which stands for Technical Interview Preparation for Software Engineers. The organization is committed to creating a
          nurturing environment for like-minded and motivated computer science students to enhance their knowledge of data structures,
          algorithms, and LeetCode skills.
        </div> 

        <div className='px-16'>
          <div className='pb-3 text-white text-sm'>
            <b>Technologies and Tools I am familiar with:</b>
            </div>
          <ShowSkills />

          <div className='pt-7 pb-3 text-white text-sm'>
            <b>Contact and socials:</b>
          </div>
          <ShowSocials />

        </div>
      </div>




    </div>
  )
}

export default Interests;
