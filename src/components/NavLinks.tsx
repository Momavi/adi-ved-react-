import { NavLink } from "react-router-dom";

interface NavLinkProps {
  to: string;
  text: string;
}

function NavLinks(): JSX.Element {
  const links: NavLinkProps[] = [
    { to: "/adi-ved-react-/", text: "О нас" },
    { to: "/adi-ved-react-/price", text: "Услуги" },
    { to: "/adi-ved-react-/employees", text: "Сотрудники" },
    { to: "/adi-ved-react-/contact", text: "Контакты" },
    { to: "/adi-ved-react-/medcard", text: "МедКарта" },
  ];

  return (
    <ul className="nav-text flex items-end md:ml-2 xl:ml-14">
      {links.map(({ to, text }) => (
        <li key={to} className="h-full md:ml-3 xl:ml-4">
          <NavLink
            to={to}
            className="block h-full border-b-4 border-transparent text-base font-medium transition hover:border-b-[#37daff] hover:transition-all dark:text-white md:text-base xl:hover:border-b-[#37daff80] xl:text-lg"
          >
            {text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
