import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav className="mb-4">
        <ul className="flex flex-col space-y-4">
          <li>
            <Link to="/contact" className="btn">Contact - Actividad 1</Link>
          </li>
          <li>
            <Link to="/blogs" className="btn">Blogs - Actividad 2</Link>
          </li>
          <li>
            <Link to="/sidebar" className="btn">SideBar - Actividad 3</Link>
          </li>
          <li>
            <Link to="/" className="btn">Home - Actividad 4</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;
