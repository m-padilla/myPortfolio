import SectionHeading from '../SectionHeading.js';
import DisplayDetailsCard from '../../Details/DisplayDetailsCard.jsx';
import Service_Lapel_Pin from '../../../assests/Service_Lapel_Pin.jpg'
import Deans_Honor_List from '../../../assests/Deans_Honor_List.jpg'
import Footer from '../../Footer/Footer.jsx';

const awards = [
  {
    name:'Cum Laude',
    description:'Baccalaureate Honors',
    technologies: 'California State University Los Angeles',
    date: 'May 2025',
    image: 'https://ung.edu/commencement/_uploads/images/cum-laude.jpg',
    imageAlt: 'Golden Honor Cords: Cum Laude'
  },
  {
    name:'Full Time Dean\'s Honor List',
    description:'Academic Honors',
    technologies: 'Los Angeles Southwest College',
    dates:[
      'Fall 2015',
      'Spring 2016'
    ],
    image: Deans_Honor_List,
    imageAlt: 'Certificate for the Dean\'s Honor List'
  },
  {
    name:'Community Service',
    description:'Award for Contribution of Volunteer work.',
    technologies: 'John C. Fremont High School',
    date:'May 2012',
    image: Service_Lapel_Pin,
    imageAlt: 'bronze Lapel Pin with the word Service written on it.'
  },
];

function Awards() {
  return (
    <div className='pt-20 bg-primary font-mono'>

      <div className='text-white'>

        <SectionHeading text='Awards / Honors'  syling='text-white text-4xl' />
        <DisplayDetailsCard details={ awards }/>
        <Footer/>
      </div>

    </div>
  )
}


export default Awards;
