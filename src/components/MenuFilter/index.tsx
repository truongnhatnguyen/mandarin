import React from "react";
import { NavLink } from "react-router-dom";

interface MenuFilterProps {
  lstLabels: string[];
  activeFilter: string;
  onFilterClick: (filter: string) => void;
}

export function MenuFilter(props: MenuFilterProps) {
  const { lstLabels, activeFilter, onFilterClick } = props;

  return (
    <div className="cs-isotop_filter cs-style1 cs-type1 cs-center">
      <ul className="cs-mp0 cs-center">
        {lstLabels.map((label, idx) => (
          <li key={idx} className={activeFilter === label ? "active" : ""}>
            <NavLink
              to="#"
              data-filter={label}
              onClick={() => onFilterClick(label)}
            >
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
