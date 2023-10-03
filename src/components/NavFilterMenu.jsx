import React, { useState } from "react";
import Button from "./Button";

const NavFilterMenu = ({ currentSelected, setCurrentSelected }) => {
  console.log(currentSelected);
  const places = [
    { name: "London", selected: true },
    { name: "New York", selected: false },
    { name: "Mumbai", selected: false },
    { name: "Paris", selected: false },
  ];

  const handleClick = (e) => {
    setCurrentSelected(e.target.innerText);
  };

  return (
    <div className="flex justify-between">
      <div className="flex w-[40%] justify-between">
        {places.map((p) => (
          <Button
            key={p.name}
            label={p.name}
            value={p.name}
            selected={currentSelected == p.name}
            onClick={handleClick}
          />
        ))}
      </div>
      <Button label={"View All →"} outline />
    </div>
  );
};

export default NavFilterMenu;
