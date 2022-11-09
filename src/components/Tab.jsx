import React from "react";

export const Tab = (props) => (
  <li className="nav-item">
    <a className="nav-link" href={props.vinculo}>
      {props.descripcion}
    </a>
  </li>
);