/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Card({ title, description }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    )
}

export default Card