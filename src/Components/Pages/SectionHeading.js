
function SectionHeading({ text, syling }) {
  return (
    <div className='text-center w-screen font-sans'>

      <div className={ syling }>
        <b>{ text }</b>
      </div>

    </div>
  );
}

export default SectionHeading;
