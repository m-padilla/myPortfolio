
function DisplayDetailsCard({ details }) {


  return (
    <div className='bg-secondary shadow-lg w-60 mx-auto my-5 max-h-fit rounded-lg '>

          {details.image ? <img src={details.image} className='rounded-t-xl w-[320px] max-h-[200px]' alt={details.imageAlt} /> : null}

          {/* Heading/ Name of j */}
          <h3 className='font-bold mt-3 pl-2 text-white'>{details.name} </h3>

          {/* text of the details */}
          <div className="text-gray-400 text-sm p-2">
          {details.description ? <p >{details.description}</p> : null}

          {details.technologies ? <p className='italic pr-4'>{details.technologies}</p> : null}
          {details.institution ? <p className='italic pr-4' >{details.institution}</p> : null}
          {
            Array.isArray(details.dates) && details.dates.length > 1
            ? details.dates.map((d) =>
              <div className="flex" >
            <div className="pr-2" >•</div>
            <p>{d}</p>
            </div>) : <p>{details.date}</p>}
              
          </div>

    </div>
  );
}

export default DisplayDetailsCard;