import React from "react";
import team1 from "../../assets/team/teamOne.webp";
import team2 from "../../assets/team/teamTwo.jpg";
import team3 from "../../assets/team/teamThree.webp";

const Team = () => {
    return (
        <section className="py-16 bg-[#2B2B2B] text-center">
            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <h2 className="text-white text-4xl font-extrabold mb-3">
                    The People Who Make It Happen
                </h2>

                {/* Subtext */}
                <p className="text-white text-lg max-w-2xl mx-auto mb-10">
                    A team of passionate individuals working together to bring innovation, 
                    creativity, and excellence to this event.
                </p>

                {/* Team Images - Flexbox for Alignment */}
                <div className="flex flex mt-10 col md:flex-row justify-center gap-3">
                    {/* Member 1 */}
                    <div className="rounded-lg overflow-hidden shadow-lg border transition-all duration-300 hover:border-4 hover:border-white">
                        <img src={team1} alt="Team Member 1" className="w-80 h-80 object-cover rounded-lg" />
                    </div>

                    {/* Member 2 */}
                    <div className="rounded-lg overflow-hidden shadow-lg border transition-all duration-300 hover:border-4 hover:border-white">
                        <img src={team2} alt="Team Member 2" className="w-80 h-80 object-cover rounded-lg" />
                    </div>

                    {/* Member 3 */}
                    <div className="rounded-lg overflow-hidden shadow-lg border transition-all duration-300 hover:border-4 hover:border-white">
                        <img src={team3} alt="Team Member 3" className="w-80 h-80 object-cover rounded-lg" />
                    </div>
                </div>

                {/* View Full Team Button */}
                <div className="mt-10">
                    <a
                        href="/team"
                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    >
                        Click to See Our Full Team
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Team;
