import Resume from '../../assests/Resume_updated.pdf';
import { ImProfile } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function ShowSocials({ isFooter= false}) {

  const s = [
    {
      name: 'Résumé',
      link: Resume,
      icon: <ImProfile />
    },
    {
      name: 'GitHub',
      link: 'https://github.com/m-padilla',
      icon: <FaGithub />
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/MarcoAPadilla',
      icon: <FaLinkedin />
    }
  ];

  return (
    <div className={`${isFooter ? 'flex gap-5 justify-center flex-wrap' : 'flex gap-5 flex-wrap'}`}>
      {s.map((i) => (
        <a href={i.link} target="_blank" rel="noopener noreferrer" 
        className="flex flex-col items-center text-white text-sm pt-3 hover:text-sky-400 hover:text-lg">
          <div className="text-2xl mb-1">{i.icon}</div>
          <div className="text-sm mb-1">{i.name}</div>
        </a>
      ))}
    </div>
  )

}

export default ShowSocials;