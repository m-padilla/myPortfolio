// import { useState } from 'react';
// import Modal from '../../Details/Modal';
// import Slider from '../../Details/Slider';

import SectionHeading from '../SectionHeading';
import Card from '../../Details/Card.jsx'

import projects from '../../../data/projects.json'

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
            <div className="flex items-center justify-center py-5">
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
