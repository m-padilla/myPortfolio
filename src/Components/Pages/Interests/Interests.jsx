import ShowSocials from '../.././Details/Socials'


function ShowSkills() {

    const s = ['Python', 'Java', 'JavaScript','React',
    'HTML', 'CSS', 'BootStrap', 'Tailwind CSS', 'MySQL', 'Git', 'C++'];

    return (
      <div>
        {s.map(i => (
          <div>{i}</div>
        ))}
      </div>
    )
}


function Interests() {
  return (
    <div className=''>
      <div className=''>
        <div>
            Hi, nice to meet you! I'm a senior at <b className="calstate-la">CalState Los Angeles</b> pursuing
            a bachelor's degree in computer science. I'm a very curious person by nature and am always looking for
            new ways to improve my skills as a software engineer.
            <br/><br/>
            My main interest is in backend software engineering and I have professional experience in  
            Python and Java. I am also familiar with other languages as well as frameworks such as Spring Boot, React, and Flask.  
            I love using my skills and knowledge to help
            others in ways that have real world impact.
            <br/><br/>
            I'm passionate about both learning and teaching, and am almost
            always working on a new project to expand my skillset. Additionally, I take pride in my ability to deconstruct and 
            effectively teach complex concepts to others, enabling them to grasp and overcome any challenges they may face.
            My passion for learning and teaching has driven me to establish and lead a student organization in my school called TIPSE, 
            which stands for Technical Interview Preparation for Software Engineers. The organization is committed to creating a 
            nurturing environment for like-minded and motivated computer science students to enhance their knowledge of data structures, 
            algorithms, and LeetCode skills.
        </div>

        <div className='flex'>
          <div><b>Technologies and Tools I am familiar with:</b></div>
          <ShowSkills />
          <div><b>Contact and socials:</b></div>
          <ShowSocials />
        </div>
      </div>




    </div>
  )
}

export default Interests;
