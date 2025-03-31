import React from 'react'

const SubscriptionCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

        <div className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="bg-gray-800 text-white py-6 text-center">
                <h2 className="text-2xl font-bold">Basic</h2>
            </div>
            <div className="text-center py-6 border-b">
                <h2 className="text-4xl font-bold"><span className="text-lg">$</span><span class="line-through text-gray-400">59</span> <span className="text-lg text-red-500">$49</span><span className="text-lg text-gray-500">/month</span></h2>
            </div>
            <div className="p-6">
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2"><span>&#10003;</span> Personal Trainer</li>
                    <li className="flex items-center gap-2"><span>&#10003;</span> Special Class</li>
                    <li className="flex items-center gap-2"><span>&#10003;</span> Free Tutorials</li>
                    <li className="flex items-center gap-2"><span>&#10003;</span> Group Training</li>
                </ul>
            </div>
            <div className="px-6 pb-6 text-center">
                <a href="#" className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Join Now</a>
            </div>
        </div>
    
    </div>
  )
}

export default SubscriptionCard