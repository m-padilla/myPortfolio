import { NavLink } from "react-router-dom";

function ShowMenuLinks() {
  const menulinkslist = [
      {name:'About',id:'/'},
      // {name:'Interests',id:'/interests'},
      // {name:'Work Experience', id:'/work'},
      // {name:'Technical Projects',id:'/projects'},
    ];

    return (
      <div className="flex">
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