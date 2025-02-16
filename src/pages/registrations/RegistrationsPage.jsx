import React from 'react'
import Hero from './Hero'
import Counter from './Counter'
import Applications from './Applications'

const RegistrationsPage = () => {
  return (
    <>
      <Hero />
      <div className="max-w-5xl mx-auto py-8 text-center">

        <Counter />
        <h2 className="text-4xl  mb-24 mt-24 text-gray-700">Register Now and get ready for a <span className="py-1 px-3 rotate-45 rounded-xl bg-[#2a2a2a] text-white">remarkable</span> MUN experience!</h2>
        <Applications />
      </div>
    </>
  )
}

export default RegistrationsPage