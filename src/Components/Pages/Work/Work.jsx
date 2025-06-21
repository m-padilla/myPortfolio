import SectionHeading from '../SectionHeading';
import Card from '../../Details/Card.jsx';

import work from '../../../data/work.json'

function Work() {

  return (
    <SectionHeading id='work' title='Work Experience' styling='text-white text-4xl' >
      <div className='bg-grey w-full font-mono'>


        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-fit'>


          {work.map((job, index) => (
            <div className="flex items-center justify-center py-5">
              <Card
                key={index}
                details={job}
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
