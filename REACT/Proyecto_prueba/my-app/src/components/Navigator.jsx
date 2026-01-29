import { NavLink } from "react-router-dom";

const Navigator = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        {/* Aquí puedes añadir más enlaces en el futuro */}
      </ul>
    </nav>
  );
};

export default Navigator;
