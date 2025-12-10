"use client";
import Image from "next/image"

import Link from 'next/link';
const ContactTeam = () => {
  const teams = [
    {
      name: "Placement Team",
      phone: "020-48556661",
      email: "placement@sevenmentor.com",
      image: "/assets/PlacementImages/placement.webp",
    },
    {
      name: "Customer Relationship Manager Team",
      phone: "020-48553350",
      email: "CRM@sevenmentor.com",
      image: "/assets/PlacementImages/crm.webp",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-white p-6">
      <h2 className="text-3xl font-bold text-white text-center">
        Contact Our Placement & Customer Relationship Management Team
      </h2>
      <div className="flex justify-center items-center mt-2">
        <div className="w-16 h-1 bg-orange-500 rounded"></div>
        <div className="w-3 h-3 bg-orange-500 rounded-full mx-2"></div>
        <div className="w-16 h-1 bg-orange-500 rounded"></div>
      </div>

      <div className="md:flex md:gap-6 gap-10 mt-5 space-y-6 md:space-y-0">
        {teams.map((team, index) => (
          <div
            key={index}
            className="bg-black border-2 border-orange-500 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transform w-64 transition"
          >
            <Image
              src={team.image}
              alt={team.name}
              className="rounded-full border-2 border-orange-500"
              width={80}
              height={80}
            />
            <h3 className="text-lg font-semibold text-center mt-4">{team.name}</h3>
            <Link
              href={`mailto:${team.email}`}
              className="text-orange-500 font-bold mt-2 hover:underline"
            >
              {team.email}
            </Link>
            <Link
              href={`tel:${team.phone}`}
              className="text-orange-500 font-bold mt-2 hover:underline"
            >
              {team.phone}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactTeam;