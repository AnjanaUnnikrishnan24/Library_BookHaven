import React from 'react';

const BooksManage = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Manage Books</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Book ID</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Author</th>
            <th className="border border-gray-300 px-4 py-2">Genre</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">1</td>
            <td className="border border-gray-300 px-4 py-2">The Great Gatsby</td>
            <td className="border border-gray-300 px-4 py-2">F. Scott Fitzgerald</td>
            <td className="border border-gray-300 px-4 py-2">Classic</td>
            <td className="border border-gray-300 px-4 py-2">$10.99</td>
            <td className="border border-gray-300 px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">Update</button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BooksManage;