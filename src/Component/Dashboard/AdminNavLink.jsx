import React from "react";
import { NavLink } from "react-router";

const AdminNavLink = ({ to, Icon, navName, end = false }) => {
  const linkDefault = `is-drawer-close:tooltip is-drawer-close:tooltip-right`;
  return (
    <>
      <li>
        <NavLink
        end={end}
          to={to}
          className={({ isActive }) =>
            isActive ? `bg-primary/50 ${linkDefault}` : linkDefault
          }
          data-tip={navName}
        >
          {/* Home icon */}
          <Icon size={24} />
          <span className="is-drawer-close:hidden">{navName}</span>
        </NavLink>
      </li>
    </>
  );
};

export default AdminNavLink;
