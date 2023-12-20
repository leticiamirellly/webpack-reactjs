import { NavLink, matchRoutes, useLocation  } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    return (
        <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <div className="w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex py-4">
              <li className="mr-4">
                <NavLink to="/" className={() => location.pathname === '/' ? 'text-sky-500' : 'text-gray-400 ' + `block rounded  md:p-0`} aria-current="page">Home</NavLink>
              </li>
              <li className="mr-4">
                <NavLink to="/rockets" className={() => location.pathname === '/rockets' ?  'text-sky-500' : 'text-gray-400 ' + `block rounded  md:p-0`} aria-current="page">Rockets</NavLink>
              </li>
              <li className="mr-4">
                <NavLink to="/crew" className={() => location.pathname === '/crew' ? 'text-sky-500' : 'text-gray-400 ' + `block rounded  md:p-0`} aria-current="page">Crew</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default Header;