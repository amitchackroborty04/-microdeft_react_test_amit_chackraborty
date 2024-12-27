import React from "react";
import cardimage from "../assets/card1.png";

const Card = ({ item }) => {
  console.log(item);

  return (
    <div className=" border rounded-lg shadow-md  bg-white p-4">
      <img src={item.image} alt="rtd" className="w-full  object-cover" />

      <div className="p-6">
        <span
          className="inline-block px-3 py-1 text-sm font-semibold text-white rounded"
          style={{ backgroundColor: item.badge_color }}
        >
          {item.badge_text}
        </span>

        <h2 className="text-xl font-bold text-gray-800 mt-4">{item.title}</h2>

        <p className="text-gray-600 mt-2">{item.description}</p>

        <p className="text-gray-500 text-sm mt-4">
          Instructor:{" "}
          <span className="font-semibold">{item.instructor_name}</span>
        </p>

        <p className="text-gray-400 text-xs mt-2">
          {item.created_at}
          time
        </p>
      </div>
    </div>
  );
};

export default Card;
