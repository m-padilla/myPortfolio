import SectionHeading from '../SectionHeading.js';
import Card from '../../Details/Card.jsx';

import awards from '../../../data/awards.json'

function Awards() {
  return (
    <SectionHeading id="awards" title='Awards / Honors' styling='text-white text-4xl' >
      <div className='bg-grey w-full font-mono'>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-fit'>

          {awards.map((award, index) => (
            <div className="flex items-center justify-center py-5">
              <Card
                key={index}
                details={award}
              />
            </div>
          ))}

        </div>
      </div>
    </SectionHeading>
  )
}


export default Awards;
