import React from 'react'

const UpdateBook = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Add Subscription Plan</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Plan Name</label>
          <input 
            type="text" 
            value={planName} 
            onChange={(e) => setPlanName(e.target.value)} 
            className="w-full px-3 py-2 border rounded-md" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Duration (in months)</label>
          <input 
            type="number" 
            value={duration} 
            onChange={(e) => setDuration(e.target.value)} 
            className="w-full px-3 py-2 border rounded-md" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Price ($)</label>
          <input 
            type="number" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            className="w-full px-3 py-2 border rounded-md" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Book Rental Limit</label>
          <input 
            type="number" 
            value={bookLimit} 
            onChange={(e) => setBookLimit(e.target.value)} 
            className="w-full px-3 py-2 border rounded-md" 
            required 
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          Add Subscription
        </button>
      </form>
    </div>
  )
}

export default UpdateBook