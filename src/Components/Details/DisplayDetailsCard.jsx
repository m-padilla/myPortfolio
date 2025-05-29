
function DisplayDetailsCard({ details }) {


  return (
    <div className='mt-14 flex'>

      {details.map(i => (
        <div className='w-max max-h-min mx-auto p-3 mb-12 rounded-xl bg-secondary font-sans'>

          {i.image ? <img src={i.image} className='h-[150px] rounded-md' alt={i.imageAlt} /> : null}

          <a
            href={i.link}
            className='font-bold text-2xl transition-all duration-[0.2s] ease-in-out delay-0 transition-normal'
            target='_blank'
            rel='noopener noreferrer'
          >
            {i.name}
          </a>

          {i.description ?  <p className='text-sm'>{i.description}</p> : null }

          {i.technologies ? <p className='text-sm italic text-nowrap'>{i.technologies}</p> : null}
          {i.institution ? <p className='text-sm italic text-nowrap'>{i.intitution}</p> : null}

          {
            Array.isArray(i.dates) && i.dates.length > 1
              ? i.dates.map((d) =>
                <div className=" flex">
                  <div className="pr-2 text-3xl  align-top leading-6 ">•</div>
                  <p className='leading-6 text-sm p-0 m-0 text-nowrap'>{d}</p>
                </div>) : <p className='leading-6 text-sm p-0 m-0 text-nowrap'>{i.date}</p>}
        </div>
      ))}

    </div>
  );
}

export default DisplayDetailsCard;