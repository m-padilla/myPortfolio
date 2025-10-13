
function SectionHeading({ title, id, styling, children }) {
  return (
    <section
      id={id}
      className='w-full font-sans'>

      <h2
        className={styling ? `text-center ${styling}` : null}
      >
        <b>{title ? title : null}</b>
      </h2>

      {children}


    </section>
  );
}

export default SectionHeading;
