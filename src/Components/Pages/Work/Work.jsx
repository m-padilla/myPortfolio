import SectionHeading from '../SectionHeading';
import we2link from '../../../assests/we2link_logo.png'

import Card from '../../Details/Card.jsx';

const work = [
  {
    name: 'We2Link',
    description: 'Junior Software Developer',
    technologies: 'HTML, CSS, Tailwind CSS, JavaScript, React, Firebase',
    date: 'August 2024 - May 2025',
    image: we2link,
    imageAlt: 'we2link logo',
    details: [
      {
        description: "Lore",

      }

    ],

  }
];


function Work() {

  return (
    <SectionHeading id='work' title='Work Experience' styling='text-white text-4xl' >
      <div className='bg-grey w-full font-mono'>


        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-fit'>
        
        {work.map((job, index) => (
          <div className="flex items-center justify-center w-screen  bg-grey">
            <Card
              key= {index}
              details= {job}
              btnText="More Details"
              // onClick={() => openModal(job)}
            />
          </div>
        ))}

        {/* {showModal && setSelectedJob && (
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            <Slider data={selectedJob.details} />
          </Modal>
        )} */}

      </div>
      </div>
      </SectionHeading>
      )
} 


      export default Work;
