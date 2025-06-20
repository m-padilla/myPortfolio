import SectionHeading from '../SectionHeading.js';
import Card from '../../Details/Card.jsx';
import Service_Lapel_Pin from '../../../assests/Service_Lapel_Pin.jpg'
import Deans_Honor_List from '../../../assests/Deans_Honor_List.jpg'

const awards = [
  {
    name: 'Cum Laude',
    description: 'Baccalaureate Honors',
    institution: 'California State University Los Angeles',
    date: 'May 2025',
    image: 'https://ung.edu/commencement/_uploads/images/cum-laude.jpg',
    imageAlt: 'Golden Honor Cords: Cum Laude'
  },
  {
    name: 'Full Time Dean\'s Honor List',
    description: 'Academic Honors',
    institution: 'Los Angeles Southwest College',
    dates: [
      'Fall 2015',
      'Spring 2016'
    ],
    image: Deans_Honor_List,
    imageAlt: 'Certificate for the Dean\'s Honor List'
  },
  {
    name: 'Community Service',
    description: 'Award for Contribution of Volunteer work.',
    institution: 'John C. Fremont High School',
    date: 'May 2012',
    image: Service_Lapel_Pin,
    imageAlt: 'bronze Lapel Pin with the word Service written on it.'
  },
];


function Awards() {
  return (
    <SectionHeading id="awards" title='Awards / Honors' styling='text-white text-4xl' >
      <div className='bg-grey font-mono'>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-fit'>

          {awards.map((award, index) => (
            <div className="flex items-center justify-center w-full  bg-grey">
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
