import SectionHeading from '../../Components/SectionHeading/SectionHeading.js';
import STEM from '../../Components/Images/STEM.png';
import DisplayDetailsCard from '../../Components/Details/DisplayDetailsCard.js';

const ti = [
  {
    name:'STEM Advantage Program',
    description:'Scholar',
    date:'October 2022 - Present',
    content:[
      '● Cultivated a mentorship relationship with a STEM industry professional with a biweekly touch-base',
      '● Participates in professional development workshops and industry career panels.'
    ],
    image: STEM,
    imageAlt: 'STEM'
  },
];

function Ti() {
  return (
    <div className='ti_main' id='misc'>

      <div className='ti'>

        <SectionHeading text='Miscellaneous Involvements' color='white' />
        <DisplayDetailsCard details={ ti } style='ti_items_card'/>

      </div>

    </div>
  )
}


export default Ti;
