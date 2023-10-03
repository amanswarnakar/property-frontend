import React, { useState, useCallback, useEffect } from "react";
import data from "../data";
import Button from "./Button";
import Card from "./Card";

const InfoTable = ({ currentSelected }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [array, setArray] = useState([]);
  const [initialItems, setInitialItems] = useState(6);
  const [lastIndex, setLastIndex] = useState(6);
  const [itemsToAdd, setItemsToAdd] = useState(3);
  const fetchData = useCallback(() => {
    const filtered = data.filter((element) => currentSelected == element.place);
    setFilteredData(filtered);
    setArray(filtered.slice(0, initialItems));
  }, [currentSelected, initialItems]);

  useEffect(() => {
    fetchData();
    setInitialItems(6);
    setLastIndex(6);
    setItemsToAdd(3);
  }, [fetchData, currentSelected, initialItems]);

  const showNextItems = () => {
    const newLastIndex = lastIndex + itemsToAdd;
    const remainingItems = filteredData.length - newLastIndex;
    const itemsToShow =
      remainingItems >= itemsToAdd ? itemsToAdd : remainingItems;

    setItemsToAdd(itemsToShow); // Update itemsToAdd
    setArray([...array, ...filteredData.slice(lastIndex, newLastIndex)]); // Update array
    setLastIndex(newLastIndex); // Update lastIndex
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-8 mt-8 min-h-[400px] min-w-[600px]">
        {array.map((d) => {
          return <Card key={d.id} data={d} />;
        })}
      </div>
      <div className="w-[200px] text-center m-auto mt-12">
        <Button
          disabled={lastIndex == filteredData.length}
          selected
          label={"Show More"}
          onClick={showNextItems}
          currentSelected={currentSelected}
        />
      </div>
    </div>
  );
};

export default InfoTable;
