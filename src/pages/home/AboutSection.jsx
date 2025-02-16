import React from 'react';
import image from "../../assets/images/homeAbout.jpg";

const AboutSection = () => {
    return (
        <section className="py-24 bg-[#C0A880] relative xl:mr-0 lg:mr-5 mr-0">
            <div className="w-full max-w-7xl px-6 md:px-10 mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* Text Content */}
                <div className="lg:w-1/2 text-center lg:text-left animate-fadeInUp">
                    <h6 className="text-black text-lg font-semibold uppercase tracking-wide mb-2">About Us</h6>
                    <h2 className="text-white text-5xl font-extrabold leading-tight mb-6">
                        AKESP Model United Nation - III
                    </h2>
                    <p className="text-white text-lg leading-relaxed mb-6">
                        Welcome to AKESPMUN, a dynamic Model United Nations conference where diplomacy meets leadership. Our mission is to empower young minds by fostering critical thinking, public speaking, and global awareness. Through engaging debates and thought-provoking discussions, we strive to shape the leaders of tomorrow.
                    </p>
                    <p className="text-white text-lg leading-relaxed mb-6">
                        At AKESPMUN, delegates step into the shoes of world leaders, tackling real-world issues with innovative solutions. Our conference provides a platform for collaboration, negotiation, and cultural exchange, helping participants develop confidence and diplomacy skills. Join us and be part of a transformative experience that inspires change and global responsibility!
                    </p>
                    <button id='homeAboutBtn' className="px-6 py-3 bg-[#1F3D2B] text-white font-medium text-lg rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full flex items-center justify-center gap-2">
                        Read More About AKESPMUN
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                </div>

                {/* Image Section */}
                <div className="lg:w-1/2 flex justify-center">
                    <div className="relative group">
                        <img className="w-full h-auto rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2" src={image} alt="About AKESPMUN" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
