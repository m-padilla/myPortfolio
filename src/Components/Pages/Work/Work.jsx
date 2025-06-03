import { useState } from 'react';
import Modal from '../../Details/Modal';
import SectionHeading from '../SectionHeading';
import DisplayDetailsCard from '../../../Components/Details/DisplayDetailsCard';
import we2link from '../../../assests/we2link_logo.png'

import placeholder from '../../../assests/placeholder.png'
import tailwind from '../../../assests/tailwind implementation.jpg'
import duplicateContact from '../../../assests/duplicate contact modal.png'
import mergeContacts from '../../../assests/merge contact modal.png'
import dropDownLabels from '../../../assests/drop-down label menu.png'

import Footer from '../../Footer/Footer'
import Slider from '../../Details/Slider';

const work = [
  {
    name: 'We2Link',
    description: 'Junior Software Developer',
    technologies: 'HTML, CSS, Tailwind CSS, JavaScript, React, Firebase',
    date: 'August 2024 - May 2025',
    // content: [
    //   'Developed a full-stack application with React.js and Firebase to enhance memory management for users with cognitive impairments by helping them efficiently organize memories, passwords, contacts, and daily tasks.',
    //   'Engineered a detect-duplicate-contacts and merge feature by creating multiple onCall cloud functions that grouped duplicate contacts base on same phonenumber or email, enabling users to selectively merge and retain relevant contacts.'
    // ],
    image: we2link,
    imageAlt: 'we2link logo',
    details: [
      {
        taskName: "Add Placeholder to Singleline textbox.",
        image: placeholder,
        description: "Refactored an existing component in order to allow the user to create custom placeholders in single line textbox.",
      },
      {
        taskName: "Implementation of Tailwind CSS",
        image: tailwind,
        description: "Tasked with refactoring some of the code to now process Tailwind CSS utility commands.",
      },
      {
        taskName: "Display Duplicate Contacts",
        image: duplicateContact,
      },
      {
        taskName: "Merge Duplicate Contacts",
        image: mergeContacts,

      },
      {
        taskName: "Drop-down Label Menu",
        image: dropDownLabels,

      },
    ],
  }
];


function Work() {

  const [showModal, setShowModal] = useState(false);

  const [selectedJob, setSelectedJob] = useState(null);

  function openModal(job) {
    setShowModal(true)
    setSelectedJob(job)
  }


  return (
    <div className='pt-20 bg-primary font-mono'>

      <SectionHeading text='Work Experience' syling='text-white text-4xl' />


      {work.map((job, index) => (
        <div
          key={index}
          role='button'
          onClick={() => openModal(job)}
          className='pb-3'
        >
          <DisplayDetailsCard key={index} details={job} />
        </div>
      ))}


      {showModal && setSelectedJob && (
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <Slider data={selectedJob.details} />
        </Modal>

      )}

      <Footer />

    </div>
  )
}


export default Work;
