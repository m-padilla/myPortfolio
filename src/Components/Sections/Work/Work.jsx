import SectionHeading from '../SectionHeading';
import InfoCard from '../../Details/InfoCard.jsx';
import work from '../../../data/work.json'

function Work() {

  return (
    <SectionHeading id='work' title='Work Experience' styling='text-white bg-grey text-4xl' >
      <div className='bg-grey font-mono pb-5'>
        {work.map((job) => (
          <InfoCard details={job} key={job.name} />
        ))}
      </div>
    </SectionHeading>
  )
}


export default Work;
