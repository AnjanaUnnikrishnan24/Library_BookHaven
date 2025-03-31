import React from 'react';

const UserManage = () => {
  return (
    <div className="bg-gray-100 p-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Reader Subscription List</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Sl. No</th>
                <th className="py-3 px-4 text-left">Reader Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Phone No</th>
                <th className="py-3 px-4 text-left">Subscribed Plan</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b">
                <td className="py-3 px-4">1</td>
                <td className="py-3 px-4">John Doe</td>
                <td className="py-3 px-4">john@example.com</td>
                <td className="py-3 px-4">123-456-7890</td>
                <td className="py-3 px-4">Premium</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManage;
