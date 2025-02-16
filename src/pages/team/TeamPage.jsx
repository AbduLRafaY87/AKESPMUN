import React from "react";
import Hero from "./Hero"; // Assuming Hero component is imported
import MemberOne from "../../assets/team/teamOne.webp";
import MemberTwo from "../../assets/team/teamTwo.jpg";
import MemberThree from "../../assets/team/teamThree.webp";
import MemberFour from "../../assets/team/teamFour.webp";
import MemberFive from "../../assets/team/teamFive.webp";
import MemberSix from "../../assets/team/teamSix.webp";
import MemberSeven from "../../assets/team/teamSeven.webp";
import MemberEight from "../../assets/team/teamEight.webp";
import MemberNine from "../../assets/team/teamNine.jpg";
import MemberTen from "../../assets/team/teamTen.jpg";
import MemberEleven from "../../assets/team/teamEleven.jpg";
import MemberTwelve from "../../assets/team/teamTwelve.jpg";


// Team Members Categorized by Department
const teamData = [
  {
    department: "Executive Board",
    members: [
      { name: "Syed Ali Arish", role: "Secretary General", image: MemberOne },
      { name: "Saad Ahmed", role: "Director General", image: MemberTwo },
      { name: "Hasnain Bin Rashid", role: "Deputy Director General", image: MemberThree },
      { name: "Muhammad Zubair Ahmed", role: "Patron", image: MemberFive },
      { name: "M.Ayan Yasir", role: "Under Secretary General", image: MemberFour },
      { name: "Ayesha Tanveer", role: "Under Secretary General", image: MemberSix },
      { name: "Mustufa Malik", role: "Under Secretary General", image: MemberSeven },
      { name: "Aniqa Kamran", role: "Under Secretary General", image: MemberEight },
    ],
  },
  {
    department: "DEPARTMENT DIRECTORS",
    members: [
      { name: "Maham Zubairi", role: "HOPITALITY", image: MemberNine },
      { name: "Waniya Khayyam", role: "IT & Design", image: MemberTen },
      { name: "Anas Raza", role: "Media & Photography", image: MemberEleven },
      { name: "Hasan Sheikh", role: "Social Media", image: MemberTwelve },
      // { name: "John Doe", role: "Backend Developer", image: MemberNine },
      // { name: "Jane Smith", role: "UI/UX Designer", image: MemberTen },
    ],
  },
];

const TeamPage = () => {
  return (
    <section className="text-center mb-12 bg-gray-50">
      <Hero />

      <div className="max-w-7xl py-5 mx-auto">
        {teamData.map((team, idx) => (
          <div key={idx} className="pb-12">
            <h2 className="text-3xl mt-12 font-bold text-gray-900 mb-12">{team.department}</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {team.members.map((member, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl max-w-xs mx-auto"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover hover:scale-110 object-center"
                  />
                  <div className="absolute bottom-0 left-0 w-full py-6 bg-gradient-to-t from-black to-transparent opacity-100">
                    <h3 className="text-lg text-white font-bold">{member.name}</h3>
                    <p className="text-white border border-slate text-sm bg-[#000] w-fit mx-auto px-2 py-1 rounded-lg">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamPage;