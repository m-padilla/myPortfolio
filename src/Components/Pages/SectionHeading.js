
function SectionHeading({ title, id, styling, children }) {
  return (
    <section
      id={id}
      className='py-10 text-center w-full min-h-full font-sans bg-grey'>

      <h2
        className={styling ? styling : null}
      >
        <b>{title ? title : null}</b>
      </h2>

      <div className= 'py-10'>
        {children}

      </div>

    </section>
  );
}

export default SectionHeading;
