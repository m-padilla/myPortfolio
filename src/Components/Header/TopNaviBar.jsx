import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


function TopNaviBar() {
    const menulinkslist = [
    { name: 'About Me', link: '/' },
    { name: 'Work Experience', link: '/work' },
    { name: 'Technical Projects', link: '/projects' },
    { name: 'Awards', link: '/awards' },
  ];

  const navRef = useRef()

  function showNavBar () {
    navRef.current.classList.toggle("responsive_nav");
  }


  return (
    <header className='flex justify-between items-center bg-transparent px-4 sh'
    >
      {/* logo Part */}
      <h2 
      // className="text-sm m-1 font-bold text-white"
      >Marco A. Padilla</h2>
      {/* Navigation Part */}
      <div 
      className="flex"
      >
        {menulinkslist.map(item => (
          <ul>
            <li className="list-none block text-white p-2 mx-2 rounded-lg hover:bg-sky-400 hover:text-white">
              <NavLink to={item.id}>{item.name}</NavLink>
              </li>
          </ul>
          
        ))}
      </div>
    )
}

function TopNaviBar(){
    return(
        <>
            <nav className='flex justify-between items-center bg-primary px-4'>
              <p className="text-sm m-1 font-bold text-white">Marco A. Padilla</p>
              <ShowMenuLinks />
            </nav>
        </>
    )
}

export default TopNaviBar;