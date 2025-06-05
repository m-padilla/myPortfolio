import Interest from "../Interests/Interests"
import profileImg from "../../../assests/resized-profile-pic.jpg"
import { TypeAnimation } from "react-type-animation";
import SectionHeading from "../SectionHeading";

function ShowContentsHeader() {
  const content = [
    {
      id: 1,
      line: "A recent graduate from CalState LA, I am an aspiring software engineer",
      photo: profileImg,
      altImg:"Marco Padilla Profile Picture."
    },
  ];

  return (
    <div className="bg-grey w-screen">
      {content.map((i, index) => (
        // page1_showcontents
        <div className="sm:flex p-7">
          <div className="sm:w-1/2 pb-5">
            <img className="rounded-2xl" src={i.photo} alt={i.altImg ? i.altImg : "Image Placeholder"} />
          </div>

          <div className="sm:w-1/2 text-center m-auto">
            <TypeAnimation
              sequence={[
                'System.out.println("Hello, I\'m Marco");',
                1000,
                'printf("Hello, I\'m Marco");',
                1000,
                'cout<<"Hello, I\'m Marco";',
                1000,
                'print("Hello, I\'m Marco");',
                1000,
                '<h1>Hello, I\'m Marco)</h1>',
                1000,
                'console.log("Hello, I\'m Marco");',
                1000,
              ]}
              wrapper="div"
              speed={200}
              className='font-semibold font-mono text-2xl text-nowrap text-white'
              repeat={Infinity}
            />

            <div key={index} className="text-white">
              {i.line}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Header() {
  return (
    <div>
      <SectionHeading id='home'/>
      <ShowContentsHeader />
      <Interest />

    </div>
  );
}

export default Header;
