import SectionHeading from '../SectionHeading';
import DisplayDetailsCard from '../../../Components/Details/DisplayDetailsCard';
import we2link from '../../../assests/we2link_logo.png'

import Footer from '../../Footer/Footer'

  const work = [
    {
      name:'We2Link',
      description:'Software Engineer Intern',
      technologies:'HTML, CSS, Tailwind CSS, JavaScript, React, Firebase',
      date:'August 2024 - May 2025',
      content:[
        'Developed a full-stack application with React.js and Firebase to enhance memory management for users with cognitive impairments by helping them efficiently organize memories, passwords, contacts, and daily tasks.',
        'Engineered a detect-duplicate-contacts and merge feature by creating multiple onCall cloud functions that grouped duplicate contacts base on same phonenumber or email, enabling users to selectively merge and retain relevant contacts.'
      ],
      image: we2link,
      imageAlt: 'we2link logo'
    }
  ];

function Work() {
  return (
    <div className='pt-20 bg-primary font-mono'>

      <div className='text-white'>

        <SectionHeading text='Work Experience' syling='text-white text-4xl' />
        <DisplayDetailsCard details= { work } />
        <Footer/>

      </div>

    </div>
  )
}


export default Work;
