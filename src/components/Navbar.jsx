import React from "react";
import { useSelector } from "react-redux";
import { Dropdown } from "./Dropdown";
import { Tab } from "./Tab";

export const Navbar = () => {
  const { menus } = useSelector(state => state.data)

  return (
    <nav className='navbar-light bg-light d-flex justify-content-between p-2'>
      <ul className='nav nav-tabs border-bottom-0'>
        {
          menus.map((menu, i) => (
            !!menu.submenus.length
              ? <Dropdown key={i} {...menu} />
              : <Tab key={i} {...menu} />
          ))
        }
      </ul>
      <a className='btn btn-dark col-1' href="/salir">
        <i class="mr-1 fa-solid fa-right-from-bracket"></i> Salir
      </a>
    </nav>
  );
};