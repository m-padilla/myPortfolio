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
          // <a href={item.link}>{item.name}</a>
          <NavLink
            ref={navRef}
            to={item.link}
          // className={({ isActive }) => {
          //   return (
          //     (isActive ? 'list-none block font-bold bg-calstatela bg-400 text-transparent bg-clip-text animate-gradient' : 'text-white bg-primary')
          //   )

          // }}
          >
            <ul>
              <li 
              className="p-2 mx-2 font-bold"
              >
                {item.name}
              </li>
            </ul>
          </NavLink>
        ))}
        <button onClick={showNavBar}>
          <FaTimes />
        </button>

      </div >

      <button onClick={showNavBar}>
        <FaBars />
      </button>
    </header>

  )
}

export default TopNaviBar;