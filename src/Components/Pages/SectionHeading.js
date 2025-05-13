import React from 'react';
import './SectionHeading.sass';

function SectionHeading(props) {
  return (
    <div className='sectionheading_parent'>

      <div className='sectionheading_text fs1' style={{color:props.color}}><b>{props.text}</b></div>

    </div>
  );
}

export default SectionHeading;
