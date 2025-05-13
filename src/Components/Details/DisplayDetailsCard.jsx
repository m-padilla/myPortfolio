
function DisplayDetailsCard({ details }) {
  return (
    <div className='ti_items'>

      {details.map(i => (
        <div className=''>

          {i.image ? <><img src={ i.image } className='ti_items_card_image' alt={ i.imageAlt }/><br/></> : null }

          <a href={i.link} className='ti_items_card_link fs2' target='_blank' rel='noopener noreferrer' style={ {fontWeight: 'bold'} }>{ i.name }</a>
          <div className='ti_items_card_title fs1'>{ i.description }</div>
          <div className='ti_items_card_title fs1'>{ i.technologies }</div>
          <div className='ti_items_card_date fs1'>{ i.date }</div>
          {i.content.map(j => (
            <ul>
            <li className='ti_items_card_maintext fs1'>{j}</li>
            </ul>
          ))}

        </div>
      ))}


    </div>
  );
}

export default DisplayDetailsCard;