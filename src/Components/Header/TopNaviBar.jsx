import { NavLink } from "react-router-dom";

function ShowMenuLinks() {
  const menulinkslist = [
    { name: 'About Me', id: '/' },
    { name: 'Work Experience', id: '/work' },
    { name: 'Technical Projects', id: '/projects' },
    { name: 'Awards', id: '/awards' },
  ];

  return (
    <div className="flex">
      {menulinkslist.map(item => (
        <NavLink
          to={item.id}
          className={({ isActive }) => {
            return (
              (isActive ? 'list-none block font-bold bg-calstatela bg-400 text-transparent bg-clip-text animate-gradient' : 'text-white bg-primary')
            )

          }}
        >
          <ul>
            <li 
            className="p-2 mx-2 font-bold"
            >

              {item.name}

            </li>
          </ul>
        </NavLink>

      ))
      }
    </div >
  )
}

function TopNaviBar() {
  return (
    <>
      <nav className='flex justify-between items-center bg-primary px-4 sh'>
        <p className="text-sm m-1 font-bold text-white">Marco A. Padilla</p>
        <ShowMenuLinks />
      </nav>
    </>
  )
}

export default TopNaviBar;