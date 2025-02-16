import React from 'react'
import formOne from "../../assets/images/formOne.png"
import { useState, useEffect } from "react";
import formTwo from "../../assets/images/formTwo.png"


const registrationCategories = [
    { title: "Individual Delegate", link:"https://www.google.com", image: formTwo },
    { title: "Delegation", link:"https://www.primecreators.co", image: formOne },
];

const Applications = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">

        {registrationCategories.map((category, index) => (
          <div
            key={index}
            className="relative w-100 text-center mx-auto rounded-lg shadow-lg overflow-hidden group"
          >
            <img src={category.image} alt={category.title} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-300 translate-y-full group-hover:translate-y-0">
              <h3 className="text-xl text-white font-semibold text-center mb-2">{category.title}</h3>
              <a href={category.link} target='_blank' className="text-white font-bold border rounded-lg py-2 px-4 text-lg hover:bg-gray-700 hover:shadow-xl transition-all duration-300">
                Register Here
              </a>
            </div>
          </div>
        ))}
      </div>
    )
}

export default Applications