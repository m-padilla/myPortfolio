
function DisplayDetailsCard({ details }) {
  return (
    <div className='mt-14'>

      {details.map(i => (
        <div className='mx-[100px] mb-12 p-5 rounded-xl bg-secondary font-sans'>

          {i.image ? <img src={ i.image } className='h-[100px] pb-3' alt={ i.imageAlt }/> : null }

          <a 
          href={i.link} 
          className='font-bold text-2xl transition-all duration-[0.2s] ease-in-out delay-0 transition-normal' 
          target='_blank' 
          rel='noopener noreferrer' 
          >
            { i.name }
          </a>

          <div className='text-sm'>{ i.description }</div>
          <div className='text-sm'>{ i.technologies }</div>
          <div className='text-sm'>{ i.date }</div>
          {i.content.map(j => (
            <div className=" flex">
              <div className="pr-2 text-3xl  align-top leading-6 ">•</div>
              <p className='leading-6 text-xs p-0 m-0'>{j}</p>
            </div>
          ))}

        </div>
      ))}


    </div>
  );
}

export default DisplayDetailsCard;