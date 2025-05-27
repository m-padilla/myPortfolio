import HomeImage from "../../../assests/placeholderimage.jpg";
// import Resume from "../../../assests/Resume_updated.pdf";
import Interest from "../Interests/Interests"
// import { ImProfile } from "react-icons/im";

import { TypeAnimation } from "react-type-animation";

function ShowContentsHeader() {
  const content = [
    {
      line: "A recent graduate from CalState LA, I am an aspiring software engineer",
      photo: HomeImage,
    },
  ];

  return (
    <div className="bg-gray-800 w-screen">
      {content.map((i) => (
        // page1_showcontents
        <div className="flex relative p-7">
          <div className="w-1/2">
            <img className="" src={i.photo} alt="ImagePlaceholder" />
          </div>

          <div className="w-1/2 text-center m-auto">
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

            <div className="page1_showcontents_line2 text-white fs1">
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

      <ShowContentsHeader />
      <Interest />

    </div>
  );
}

export default Header;
