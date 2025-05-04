import React,{ useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'

const BooksCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white shadow-lg rounded-xl p-6 w-80 text-center">
          <img src="/images/book001.jpeg" alt="Book Cover" className="h-48 w-full object-cover rounded-lg mb-4 shadow-md"/>
          
          <h3 className="text-xl font-bold text-gray-800">The Great Gatsby</h3>
          <h4 className="text-md text-gray-600 mt-1">By F. Scott Fitzgerald</h4>
          <p className="text-sm text-gray-500 mt-1">📖 Language: English</p>
          
          <p className="text-lg font-semibold text-green-600 mt-3">Rs. 299</p>
          
          <button className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition">
              🛒 Add to Cart
          </button>

          <p className="mt-3">
              <a href="book1.html" className="text-blue-500 font-semibold hover:underline">More Details →</a>
          </p>
      </div>

    </div>
  )
}

export default BooksCard