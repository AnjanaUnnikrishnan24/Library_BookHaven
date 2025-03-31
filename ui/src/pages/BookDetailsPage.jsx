import React from 'react';

const BookDetailsPage = () => {
  return (
    <div className="flex flex-row gap-8 mt-[100px] ml-[260px] mr-10 mb-10 mx-auto">
      <div>
        <img src="/images/book001.jpeg" alt="book image" className="h-full w-full" />
      </div>
      <div className="w-[50%]">
        <h2 className="text-4xl mt-10">Create your Own Business</h2>
        <table cellSpacing="30px" className="mt-10 text-xl">
          <tbody>
            <tr>
              <td className="font-semibold">Book Title:</td>
              <td>Create your Own Business</td>
            </tr>
            <tr>
              <td className="font-semibold">Author Name:</td>
              <td>James Murdor</td>
            </tr>
            <tr>
              <td className="font-semibold">Category:</td>
              <td>Business</td>
            </tr>
            <tr>
              <td className="font-semibold">Edition:</td>
              <td>First Edition</td>
            </tr>
            <tr>
              <td className="font-semibold">Published Year:</td>
              <td>2022</td>
            </tr>
            <tr>
              <td className="font-semibold">ISBN:</td>
              <td>20225484464</td>
            </tr>
            <tr>
              <td className="font-semibold">Description:</td>
              <td>
                This comprehensive guide to starting your own business acts as an invaluable blueprint for your path to business success.
                It's the ultimate gift for entrepreneurs or anyone who wants to learn more about the world of business management.
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button className="bg-green-500 text-white pt-2 pb-2 w-[180px] rounded hover:bg-green-600 mt-4 mb-4">
                  <a href="#">Add to Cart</a>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookDetailsPage;
