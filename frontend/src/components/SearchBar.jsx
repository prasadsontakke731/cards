/* eslint-disable no-unused-vars */
import React from 'react'

function SearchBar() {
    return (
        <div className="text-center my-8">
            <h1 className="text-4xl font-bold mb-4">How can we help?</h1>
            <input
                type="text"
                placeholder="Search"
                className="p-3 border border-gray-300 rounded w-2/3 sm:w-1/2 lg:w-1/3"
            />
        </div>
    )
}

export default SearchBar