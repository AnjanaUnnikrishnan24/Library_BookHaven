import React from 'react'

const PlanManage = () => {
  return (
    <div classNameName="bg-gray-100 p-6">
    <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Manage Subscription Plans</h2>
        <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="py-3 px-4 text-left">Plan Name</th>
                        <th className="py-3 px-4 text-left">Offer Price</th>
                        <th className="py-3 px-4 text-left">Original Price</th>
                        <th className="py-3 px-4 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    <tr className="border-b">
                        <td className="py-3 px-4">Basic</td>
                        <td className="py-3 px-4 text-red-500 font-bold">$49</td>
                        <td className="py-3 px-4 text-green-400">$59</td>
                        <td className="py-3 px-4">
                            <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-700">Update</button>
                            <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700 ml-2">Delete</button>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}

export default PlanManage