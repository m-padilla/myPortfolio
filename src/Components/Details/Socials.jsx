import Resume from '../../assests/Resume_updated.pdf';


function ShowSocials() {

    const s = [
      {
        name: 'Résumé',
        link: Resume
      },
      {
        name: 'GitHub',
        link: 'https://github.com/m-padilla'
      },
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/marco-padilla-378458310/'
      }
    ];

    return (
      <div className='interests_items_socials'>
        {s.map(i => (
          <a className='interests_items_socials_s fs1' href={i.link} target='_blank' rel='noopener noreferrer'>{i.name}</a>
        ))}
      </div>
    )

}

export default ShowSocials;