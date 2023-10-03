import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import OpenWithIcon from "@mui/icons-material/OpenWith";

const Card = (data) => {
  const navigate = useNavigate();

  return (
    <div className="rounded-xl bg-white">
      <div className="flex flex-col">
        <div className="p-2 h-2/5 w-full">
          <div className="bg-white px-5 py-3 flex justify-center items-center text-black rounded-xl mt-2 ml-2 z-10 absolute font-semibold opacity-70">
            For Rent
          </div>
          <img
            src={data.data.img}
            className="object-cover rounded-xl h-[300px] min-w-full"
            alt=""
          />
          {data.data.isPopular == true && (
            <div className="bg-[#373ae4] h-[50px] w-[110px] flex justify-center items-center text-white rounded-es-lg rounded-se-lg mt-[-50px] z-10 absolute font-semibold">
              Popular
            </div>
          )}
        </div>
        <div className="px-6 py-4">
          <span className="flex items-center">
            <LocationOnIcon />
            &nbsp; {data.data.address}
          </span>
          <h1 className="text-lg font-semibold my-3">{data.data.name}</h1>
          <div className="flex justify-around">
            <span className="flex flex-col items-center">
              <ApartmentIcon />
              &nbsp; {data.data.room} Room
            </span>
            <span className="flex flex-col items-center">
              <HotelIcon />
              &nbsp; {data.data.beds} Bed
            </span>
            <span className="flex flex-col items-center">
              <BathtubIcon />
              &nbsp; {data.data.bathroom} Bath
            </span>
            <span className="flex flex-col justify-center items-center">
              <OpenWithIcon />
              &nbsp; {data.data.area} sqft
            </span>
          </div>
          <hr className="bg-red-800 border-dotted my-4" />
          <div className="flex justify-between items-center">
            <span>
              <span className="text-2xl text-[#373ae4] font-semibold">
                ₹ {data.data.price}{" "}
              </span>
              / month
            </span>
            <Button
              onClick={() => navigate(`/property/${data.data.id}`)}
              outline
              label={"Read More"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
