// import { useState } from 'react';
// import Modal from '../../Details/Modal';
// import Slider from '../../Details/Slider';

import SectionHeading from '../SectionHeading';
import Card from '../../Details/Card.jsx'



const projects = [
  {
    name: 'Baccarat Web Game',
    description: "Utilizing the Deck of Cards API, created a simple card game,",
    technologies: 'Node.js, Express.js, MongoDB, Axios',
    date: 'June 2024- August 2024',
    details: [
      {
        taskName: "Baccarat after game starts",
        image: 'https://github.com/user-attachments/assets/a744ecd6-2c29-4fc6-a859-8986d1ef7941',
        description: "The user can select betting on the player, banker or tie. Once the user has made their decision, the scores of the player and banker will be displayed in the bottom square.",

      },

    ],
    image: "https://github.com/user-attachments/assets/61338c9b-ef9b-451f-b5d0-049808c05d79",
    imageAlt: "Baccarat web app before start game is initiated.",
    git: "https://github.com/m-padilla/Baccarat"
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
    ],
    image: "https://www.liveabout.com/thmb/pIJPZ5JF44uhPPlaxxGUT-ZO1Do=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-917034570-5ad2aea3642dca003605302b.jpg",
    imageAlt: "Blackjack web app before start game is initiated.",
    git: 'https://github.com/m-padilla/Blackjack'
  },
];


function Projects() {

  // const [showModal, setShowModal] = useState(false);

  // const [selectedProject, setSelectedProject] = useState(null);

  // const openModal = (project) => {
  //   setSelectedProject(project);
  //   setShowModal(true);
  // };

  function openTab(project) {
    // setSelectedProject(project);
    window.open(project.git)
  }

  return (
    <SectionHeading id='projects' title='Technical Projects' styling='text-white text-4xl' >
      <div className='bg-grey w-full font-mono'>


        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-fit'>

          {projects.map((project, index) => (
            <div className="flex items-center justify-center">
              <Card
                key={index}
                details={project}
                btnText="Source Code"
                onClick={()=> openTab(project)}
              />
            </div>
          ))}



          {/* {showModal && selectedProject && (
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            <Slider data={selectedProject.details} />
          </Modal>
        )} */}

          {/* {selectedProject && (
            openTab(selectedProject.git)
          )
          } */}

        </div>

      </div>

    </SectionHeading>
  )
}


export default Projects;
