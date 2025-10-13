import SectionHeading from '../SectionHeading';
import InfoCard from '../../Details/InfoCard';
import projects from '../../../data/projects.json'

function Projects() {

  return (
    <SectionHeading id='projects' title='Technical Projects' styling='text-white bg-grey text-4xl' >
      <div className='bg-grey font-mono'>

        {projects.map((project) => (
          <InfoCard details={project} key={project.name} />
        ))}

      </div>
    </SectionHeading>
  )
}


export default Projects;
