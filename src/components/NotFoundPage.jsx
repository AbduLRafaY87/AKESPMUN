import React from 'react'

const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh]   flex justify-center items-center">
      <div className="text-center text-white p-10 rounded-lg max-h-[50vh] flex flex-col justify-center">
        <br />
        <br />
        <br />
        <br />
        <h1 style={{fontSize: '100px', color: '#2b2b2b'}} className="font-bold animate-bounce">404</h1> {/* Even larger 404 */}
        <h3 className="text-3xl text-gray-500 mb-6">Page Not Found!</h3>
        <p className="text-xl text-[#fff]">Oops! The page you are looking for does not exist.</p>
        <a href="/" className="mt-8 inline-block bg-[#C0A880] text-gray-800 py-2 px-6 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300">
          Go Home
        </a>
      </div>
    </div>
  )
}

export default NotFoundPage
