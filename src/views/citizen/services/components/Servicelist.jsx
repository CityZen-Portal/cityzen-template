import React from "react";
import img1 from "../../../../assets/img/service/govimg-2.jpeg";
import data from "../variables/data"; 

function Servicelist() {
  return (
    <>
      <div
        className="h-60 bg-cover bg-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <h1 className="flex items-center justify-center pt-6 text-4xl font-bold text-white">
          Services
        </h1>
        <p className="pe-14 ps-14 pt-4 text-center text-lg text-white">
          Municipality services include water supply, waste management, road
          maintenance, street lighting, sanitation, public health, and
          infrastructure development—ensuring essential civic amenities and
          improving the quality of life in urban and rural areas.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-3 p-10 md:grid-cols-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="mt-6 max-w-lg overflow-hidden rounded bg-white shadow-lg"
          >
            <img
              src={item.img}
              alt={item.nameOfService}
              className="h-60 w-full transform object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="px-6 py-4">
              <div className=" flex justify-center text-xl font-bold">
                {item.nameOfService}
              </div>
            </div>
            <div className="flex justify-center pb-4">
              <button className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                Get service
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Servicelist;
