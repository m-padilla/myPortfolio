import ShowSocials from '../../Components/Details/Socials';
import {Link} from 'react-scroll';


function Footer() {
  return (
    <div className='font-sans bottom-0 w-full'>

      <div className='py-14 text-center bg-secondary'>

        <div className='text-white transition-all delay-0 duration-[0.2s] ease-in m-0 transition-normal text-2xl inline-block'>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer transition-all"
          >
             <b className='font-serif'>Marco A. Padilla</b>
          </Link>

         
        </div>

        <div className='text-white text-xs pt-3 '>Thanks for visiting!</div>

        <ShowSocials isFooter='True' />

      </div>


    </div>
  )
}


export default Footer;
