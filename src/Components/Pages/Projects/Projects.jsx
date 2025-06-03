import { useState } from 'react';
import Modal from '../../Details/Modal';
import Slider from '../../Details/Slider';

import SectionHeading from '../SectionHeading';
import DisplayDetailsCard from '../../../Components/Details/DisplayDetailsCard';
import Footer from '../../Footer/Footer';


const projects = [
  {
    name: 'Baccarat Web Game',
    description: "Utilizing the Deck of Cards API, created a simple card game,",
    technologies: 'Node.js, Express.js, MongoDB, Axios',
    date: 'June 2024- August 2024',
    details: [
      {
        taskName: "Add Placeholder to Singleline textbox.",
        image: 'https://www.skycitycasino.com/blog/wp-content/uploads/2020/02/SkyCity-Blog-Baccarat-1280x800.jpg',
        description: "allow the user to create custom placeholders in single line textbox.",

      },
      {
        taskName: "Node.js implemetation.",
        image: 'https://officialgamerules.org/wp-content/uploads/2025/02/image-367.jpeg',
        description: "allow the user to select Player or Banker.",

      },
    ]
  },
  {
    name: 'Blackjack Web Game',
    description: "Utilizing the Deck of Cards API, created a simple card game,",
    technologies: 'Node.js, Express.js, MongoDB, Axios',
    date: 'June 2024- August 2024',
    details: [
      {
        taskName: "Add Placeholder to Singleline textbox.",
        image: 'https://www.liveabout.com/thmb/pIJPZ5JF44uhPPlaxxGUT-ZO1Do=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-917034570-5ad2aea3642dca003605302b.jpg',
        description: "Refactored an existing component in order to allow the user to create custom placeholders in single line textbox.",

      },
    ]
  },
];


function Projects() {

  const [showModal, setShowModal] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <div className='pt-20 bg-primary font-mono'>

      <SectionHeading text='Technical Projects' syling='text-white text-4xl' />

      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-fit'>

        {projects.map((project, index) => (
          <>
            <div
              key={index}
              role='button'
              onClick={() => openModal(project)}
              className='pb-3'
            >
              <DisplayDetailsCard key={index} details={project} />
            </div>


            {showModal && selectedProject && (
              <Modal show={showModal} onClose={() => setShowModal(false)}>
                <Slider data={selectedProject.details} />
              </Modal>
            )}
          </>
        ))}

      </div>


      <Footer />

    </div>
  )
}


export default Projects;
