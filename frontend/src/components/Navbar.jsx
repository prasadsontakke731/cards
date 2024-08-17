/* eslint-disable no-unused-vars */
import React from 'react'

function Navbar() {
  return (
      <nav className="bg-black text-white p-4">
          <div className="container mx-auto flex justify-between">
              <div className="text-lg font-bold">Abstract | Help Center</div>
              <button className="bg-gray-800 px-4 py-2 rounded">Submit a request</button>
          </div>
      </nav>
  )
}

export default Navbar