import { NavLink, Outlet } from "react-router";
import "./Shell.css";
import { clientURLs, NAV_ITEMS } from "../../constants";

function Shell() {
  return (
    <div className="shell">
      <nav className="navbar">
        <NavLink
          to={clientURLs.HOME}
          className="logo"
        >
          CampusEats
        </NavLink>
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Shell;
