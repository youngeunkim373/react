import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {/* <Link to="/dashboard">Dashboard</Link> */}
            {/* <a>요소는 전체를 모두 렌더링 하므로 
            <Link>또는 <NavLink>을 사용한다. */}
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

export default Layout;
