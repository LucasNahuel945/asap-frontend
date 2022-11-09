import React from 'react';

export const Dropdown = (props) => (
  <li className="nav-item dropdown">
    <a
      className="nav-link dropdown-toggle"
      data-toggle="dropdown"
      href={props.vinculo}
      role="button"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {props.descripcion}
    </a>
    <div className="dropdown-menu">
      {
        props.submenus.map((submenu, i) => (
          <a key={i} className="dropdown-item" href={submenu.vinculo}>
            {submenu.descripcion}
          </a>
        ))
      }
    </div>
  </li>
);