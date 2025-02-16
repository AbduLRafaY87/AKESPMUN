import React from 'react'
import Hero from './Hero'
import image from '../../assets/images/homeAbout.jpg'
import Whyimage from '../../assets/images/whyJoinUsImg.jpg'
import missionImg from '../../assets/images/mission.jpg'
import FAQSection from './FAQSection'

const AboutPage = () => {
  return (
    <>
      <Hero />
      <section className="text-center">
        <div className="max-w-7xl py-8 mx-auto px-6">
          {/* About Section */}
          <div className="flex flex-col md:flex-row items-center py-12 gap-12">
            <div className="md:w-1/2 text-left">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">About AKESPMUN III</h2>
              <p className="text-gray-600 text-lg">
                AKESPMUN III is a premier Model United Nations conference, fostering diplomatic
                dialogue, leadership, and critical thinking. Our mission is to provide an immersive
                experience that challenges participants to tackle global issues through debate and collaboration.
              </p>
            </div>
            <div className="md:w-1/2 h-[300px] overflow-hidden">
              <img
                src={image}
                alt="About Us"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>


          {/* Our Mission Section (Fixed Alignment) */}
          <div className="flex md:flex-row-reverse items-center py-12 gap-12">
            <div className="md:w-1/2 text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                We aim to cultivate future leaders by offering a platform for intellectual discourse
                and innovative solutions. Through rigorous debate, research, and teamwork, delegates
                gain invaluable skills in diplomacy, public speaking, and negotiation.
              </p>
            </div>
            <div className="md:w-1/2 h-[300px] overflow-hidden">
              <img
                src={Whyimage}
                alt="About Us"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Why Join Us Section */}
          <div className="flex flex-col md:flex-row items-center py-12 gap-12">
            <div className="md:w-1/2 text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Join Us?</h3>
              <p className="text-gray-600 text-lg">
                · Engage in high-quality debates and discussions.<br />· Enhance your leadership and problem-solving skills.<br />· Network with like-minded individuals from various backgrounds.<br />· Experience a well-organized and professional MUN event.
              </p>
              {/* <ul className="text-gray-600 list-disc list-inside space-y-2 text-lg">
              <li>Engage in high-quality debates and discussions.</li>
              <li>Enhance your leadership and problem-solving skills.</li>
              <li>Network with like-minded individuals from various backgrounds.</li>
              <li>Experience a well-organized and professional MUN event.</li>
            </ul> */}
            </div>
            <div className="md:w-1/2 h-[300px] overflow-hidden">
              <img
                src={missionImg}
                alt="About Us"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <FAQSection/>
      </section>
    </>
  )
}

export default AboutPage