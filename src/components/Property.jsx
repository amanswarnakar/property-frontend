import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import Card from "./Card";

const Property = () => {
  const { id } = useParams();
  const cardData = data.find((d) => d.id == id);
  console.log(cardData);

  return (
    <div>
      <Card data={cardData} />
    </div>
  );
};

export default Property;
