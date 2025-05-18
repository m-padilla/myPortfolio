import SectionHeading from '../SectionHeading.js';
import DisplayDetailsCard from '../../Details/DisplayDetailsCard.jsx';
import Footer from '../../Footer/Footer.jsx';

const awards = [
  {
    name:'STEM Advantage Program',
    description:'Scholar',
    date:'October 2022 - Present',
    content:[
      'Cultivated a mentorship relationship with a STEM industry professional with a biweekly touch-base',
      'Participates in professional development workshops and industry career panels.'
    ],
  },
];

function Awards() {
  return (
    <div className='pt-20 bg-primary font-mono'>

      <div className='text-white'>

        <SectionHeading text='Awards'  syling='text-white text-4xl' />
        <DisplayDetailsCard details={ awards }/>
        <Footer/>
      </div>

    </div>
  )
}


export default Awards;
