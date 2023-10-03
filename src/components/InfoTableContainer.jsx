import React, { useState } from "react";
import NavFilterMenu from "./NavFilterMenu";
import InfoTable from "./InfoTable";
import Button from "./Button";

const InfoTableContainer = () => {
  const [currentSelected, setCurrentSelected] = useState("London");

  return (
    <div className="flex flex-col">
      <NavFilterMenu
        currentSelected={currentSelected}
        setCurrentSelected={setCurrentSelected}
      />
      <InfoTable currentSelected={currentSelected} />
    </div>
  );
};

export default InfoTableContainer;
