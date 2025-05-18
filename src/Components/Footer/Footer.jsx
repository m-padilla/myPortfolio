import ShowSocials from '../../Components/Details/Socials';


function Footer() {
  return (
    <div className='font-sans'>

      <div className='py-[75px] text-center bg-secondary'>

        <div className='text-white transition-all delay-0 duration-[0.2s] ease-in m-0 transition-normal text-2xl inline-block'>
          <b>Marco A. Padilla</b>
        </div>

        <div className='text-white text-xs '>Thanks for visiting!</div>

        <ShowSocials isFooter='True' />

      </div>


    </div>
  )
}


export default Footer;
