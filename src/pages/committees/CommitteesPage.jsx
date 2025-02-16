import React from "react";
import { Tilt } from "react-tilt";
import Hero from "./Hero";
// import SPECPOL from "../../assets/committees/SPECPOL.png";
import committees from "./allCommittees"; // Import the data

const CommitteeCard = ({ name, image, pdf }) => {
  return (
    <Tilt options={{ max: 20, scale: 1.05 }}>
      <a
        href={pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex flex-col items-center justify-center p-6 w-80 h-70 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl border border-transparent hover:border-[#2a2a2a] hover:scale-103"
      >
        <img src={image} alt={name} className="w-55 h-55 mb-3" /> {/* Logo */}
        {/* <div className="text-4xl">{icon}</div>
        <h3 className="text-[#2a2a2a] text-lg font-semibold mt-3">{name}</h3> */}
        {/* Hover Effect */}
        <div className="absolute px-3 inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 opacity-0 transition-opacity duration-300 hover:opacity-90 rounded-xl">
        <h3 className="text-white text-xl font-semibold mt-3">{name}</h3>
        <br/>
          <span className="text-white font-bold shadow-lg px-2 py-1 rounded-lg border border-white text-md">Study Guide</span>
        </div>
      </a>
    </Tilt>
  );
};

const CommitteesPage = () => {
  return (
    <>
      <Hero />
      <section className="py-16 px-12 md:px-12 container mx-auto text-center">
        <div className="flex flex-wrap justify-between gap-15">
          {committees.map((committee, index) => (
            <CommitteeCard key={index} {...committee} />
          ))}
        </div>
      </section>
    </>
  );
};

export default CommitteesPage;
