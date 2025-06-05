
function SectionHeading({ title, id, styling }) {
  return (
    <section 
    id={ id }
    className='py-10 text-center w-screen font-sans'>

      <h2 
      className={ styling ? styling : null }
      >
        <b>{ title ? title : null }</b>
      </h2>
    </section>

    // <section
    //   id={id}
    //   className={`h-screen flex items-center justify-center`}
    // >
    //   <h2 className={`text-4xl font-bold text-white ${ styling }`}>{title}</h2>
    // </section>



  );
}

export default SectionHeading;
