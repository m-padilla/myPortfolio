import HomeImage from '../../../assests/placeholderimage.jpg'
import Resume from '../../../assests/Resume_updated.pdf';

function ShowContentsHeader() {
  const content = [
    {
      line1: 'console.log("Hello, I\'m Marco");',
      line2: 'Currently a graduate from CalState LA, I am an aspiring software engineer',
      button_link: Resume,
      button_text:'Résumé',
      photo: HomeImage
    },
  ]

  return (
    <div className='bg-gray-800 h-screen w-screen'>
      {content.map(i => (
        // page1_showcontents
        <div className='flex p-4 relative'>
          <div className='border border-cyan-50 w-1/2'>
            <img className='' src={i.photo} alt="ImagePlaceholder"/>
          </div>

          <div className='text-center m-0 absolute top-1/2 translate-y-1/2 transf border border-cyan-50 w-1/2'>
            <div className='font-semibold font-mono text-2xl text-nowrap text-white'>{i.line1}</div>
            <div className='page1_showcontents_line2 text-white fs1'>{i.line2}</div>
            <a href={i.button_link} className='page1_showcontents_button text-white' target='_blank' rel='noopener noreferrer'>{i.button_text}</a>
          </div>

        </div>
      ))}

    </div>
  )
}



function Header() {
  return (
    <div>
      <div>
        <ShowContentsHeader />
      </div>
    </div>
  )
}

export default Header
