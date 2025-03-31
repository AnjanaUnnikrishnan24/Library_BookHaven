import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 p-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Library Admin Dashboard</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold">Total Books</h3>
            <p className="text-2xl font-bold text-blue-600">1500</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold">Active Members</h3>
            <p className="text-2xl font-bold text-green-600">350</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold">Books Issued</h3>
            <p className="text-2xl font-bold text-red-600">120</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <h3 className="bg-gray-800 text-white text-lg font-semibold py-3 px-4">Recent Transactions</h3>
          <table className="w-full text-left">
            <thead className="bg-gray-300">
              <tr>
                <th className="py-3 px-4">Member Name</th>
                <th className="py-3 px-4">Book Title</th>
                <th className="py-3 px-4">Issue Date</th>
                <th className="py-3 px-4">Return Date</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b">
                <td className="py-3 px-4">John Doe</td>
                <td className="py-3 px-4">The Great Gatsby</td>
                <td className="py-3 px-4">2025-03-20</td>
                <td className="py-3 px-4">2025-04-10</td>
                <td className="py-3 px-4 text-green-600">Returned</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">Jane Smith</td>
                <td className="py-3 px-4">1984</td>
                <td className="py-3 px-4">2025-03-25</td>
                <td className="py-3 px-4">2025-04-15</td>
                <td className="py-3 px-4 text-red-600">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <main>
        <section id="manage_books" className="w-4/5 bg-slate-300 mx-auto mt-10 pt-8 pl-10 rounded-2xl">
          <h2 className="text-2xl pb-4">Manage Books</h2>
          <div>
            <button className="bg-blue-500 text-white py-2 px-4 mb-4 rounded-lg hover:bg-blue-600">Add New Book</button>
            <button className="bg-blue-500 text-white py-2 px-4 mb-4 rounded-lg hover:bg-blue-600">Update Book</button>
            <button className="bg-blue-500 text-white py-2 px-4 mb-4 rounded-lg hover:bg-blue-600">View All Books</button>
          </div>
        </section>

        <section id="manage_members" className="w-4/5 bg-slate-300 mx-auto mt-10 pt-8 pl-10 rounded-2xl">
          <h2 className="text-2xl pb-4">Manage Members</h2>
          <div>
            <button className="bg-blue-500 text-white py-2 px-4 mb-4 rounded-lg hover:bg-blue-600">Add New Member</button>
            <button className="bg-blue-500 text-white py-2 px-4 mb-4 rounded-lg hover:bg-blue-600">View All Members</button>
          </div>
        </section>

        <section id="books_trans" className="w-4/5 bg-slate-300 mx-auto mt-10 pt-8 pl-10 rounded-2xl">
          <h2 className="text-2xl pb-4">Book Transactions</h2>
          <div>
            <button className="bg-blue-500 text-white py-2 px-4 mb-4 rounded-lg hover:bg-blue-600">Issue New Book</button>
            <button className="bg-blue-500 text-white py-2 px-4 mb-4 rounded-lg hover:bg-blue-600">Return Issued Book</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
