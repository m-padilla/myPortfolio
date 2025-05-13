import './Footer.sass'
// import Resume from '../../Components/Images/resume.pdf';
import ShowSocials from '../Interests/Socials';


function Footer() {
  return (
    <div className='footer_main'>

      <div className='footer'>

        {/* <a className='footer_name fs3' href={'#'}><b>Marco Padilla</b></a> */}
        <div className='footer_name fs3'><b>Marco A. Padilla</b></div>

        <div className='footer_text fs1'>Thanks for visiting!</div>

        <ShowSocials />

      </div>


    </div>
  )
}


export default Footer;
