import { Outlet, Link, NavLink } from "react-router-dom";

function Layout() {
  const activeStyle = ({ isActive }) => ({
    color: isActive ? "green" : "",
    fontSize: isActive ? "2rem" : "",
  });

  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* 선택한 컴포넌트에 스타일 지정이 가능하다. */}
            <NavLink to="/" style={activeStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={activeStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" style={activeStyle}>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/main" style={activeStyle}>
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/nothing-here" style={activeStyle}>
              Nothing Here
            </NavLink>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

export default Layout;
