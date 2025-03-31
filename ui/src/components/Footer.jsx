import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Library Address</h2>
            <p>Book Haven</p>
            <p>Library Lane</p>
            <p>Booktown</p>
            <p>Email: <a href="mailto:bookhaven@library.com" className="text-blue-400 hover:underline">bookhaven@library.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-blue-400 hover:underline">9855595556</a></p>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/viewBook" className="hover:underline">Library Catalog</a></li>
              <li><a href="/signUp" className="hover:underline">Membership</a></li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-4">Subscribe to get updates</h2>
            <p>Get updates on new books, events, and more.</p>
            <form className="mt-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 rounded-md text-gray-900" 
                required
              />
              <button 
                type="submit" 
                className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <hr className="mt-2 mb-2" />
        <div className="container mt-2 mx-auto text-center">
          <p>&copy; 2024 Book Haven Library. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;