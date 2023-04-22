import { NavLink } from "react-router-dom";

const links = [
  {
    to: "/",
    title: "Главная",
  },
  {
    to: "/drift",
    title: "Дрифт-такси",
  },
  {
    to: "/timeattack",
    title: "Time Attack",
  },
  {
    to: "/forza",
    title: "Forza Karting",
  },
];

function Menu() {
  return (
    <nav className="menu">
      {links.map((link, linkIdx) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? "menu__item menu__item-active" : "menu__item"
          }
          to={link.to}
          key={linkIdx}
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Menu;
