import SectionHeading from "../Sections/SectionHeading";
import ShowSocials from "../Details/Socials";

function ShowContentsHeader() {

  return (
    <div className="bg-grey ">
     
        <div className="sm:flex lg:h-screen">
          <div className="pl-10 pt-32 pb-36 md:py-90">
            <h1 className='text-4xl md:text-5xl lg:text-6xl py-2  text-white'>
            console.log("Hello, I'm Marco")
            </h1>

            <div className='py-2'>
              <ShowSocials />
            </div>

            <p className="text-white">
              A recent graduate from CalState LA, I am an aspiring software engineer<br/>
              I enjoy reading graphic novals and playing a good RPG. 
            </p>

          </div>
        </div>
    </div>
  );
}

function Header() {
  return (
    <SectionHeading id='home'>
      <ShowContentsHeader />
    </SectionHeading>
  );
}

export default Header;
