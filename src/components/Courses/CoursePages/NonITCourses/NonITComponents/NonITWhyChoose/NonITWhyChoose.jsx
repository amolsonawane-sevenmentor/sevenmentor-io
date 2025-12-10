import React from "react";
import { NonITWhyChooseData } from "./NonITWhyChooseData";
import Image from "next/image";

const NonITWhyChoose = ({ courseName }) => {
  const data = NonITWhyChooseData[courseName];

  if (!data) {
    return (
      <p className="text-center bg-black text-black">Course data not found.</p>
    );
  }

  return (
    <div className="mx-auto px-[1rem] md:px-[3rem] md:py-16 mt-8 md:mt-0 rounded-lg shadow-lg bg-black">
      <h2 className="text-4xl font-bold text-center text-white mb-4">
        {data.headings[0].split("–")[0]} –{" "}
        <span className="text-orange-500">
          {data.headings[0].split("–")[1]?.trim()}
        </span>
      </h2>
      <h2 className="text-3xl font-bold text-center text-white mb-4">
        {data.headings[1]}
      </h2>
      <p className="text-center text-xl text-white mb-8">{data.paragraph}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        {data.cards.map((card) => (
          <div key={card.id} className="flex flex-col items-center md:p-4">
            <Image
              src={card.image || "/placeholder.svg"}
              alt={card.text || "Card image"}
              width={250} // Matches w-[250px]
              height={150} // Estimated height; adjust if needed
              className="w-[250px] h-auto object-cover mb-2"
            />
            <p className="text-center text-sm font-semibold text-white">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NonITWhyChoose;
