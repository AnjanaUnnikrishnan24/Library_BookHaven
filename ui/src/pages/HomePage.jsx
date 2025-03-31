import React from 'react';

const HomePage = () => {
  return (
    <>
      <div 
        className="relative bg-cover mt-10 bg-center h-[700px] w-full" 
        style={{ backgroundImage: "url('/images/IntroBackground.webp')" }}
      >
        <div className="absolute inset-0 bg-opacity-50 p-12">
          <h1 className="text-3xl font-bold italic mt-12">Hello Readers, welcome to
            <span className="text-blue-400 text-6xl"> Book Haven</span>
          </h1>
          <p className="w-[400px] mt-10 text-2xl italic">
            Discover a world of knowledge, imagination, and inspiration at your fingertips. Whether you're here to explore new stories, dive into research, or simply 
            enjoy a quiet corner to read, our library is here to support your journey. Explore our extensive collection, access digital resources, or join community events 
            designed for curious minds of all ages.<br/><br/>
            We're thrilled to have you here—happy reading! 📚✨
          </p>
        </div>
      </div>

      <div className="container mx-auto p-6 flex flex-row gap-10">
        <section className="mb-8 mt-10 text-center border-4 border-dashed border-red-500 rounded-2xl p-6 shadow-lg bg-gray-200 h-[600px]">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Important Announcements</h2>
          <img src="/images/announcement.jpg" alt="Christmas greetings banner" className="mx-auto rounded-lg shadow-md"/>
          <p className="mt-4 text-xl text-gray-700">Library stays closed on 25th December due to Christmas Holiday</p>
        </section>
    
        <section className="bg-gray-200 rounded-2xl shadow-lg h-[600px] mt-10 mb-8 w-full">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center italic">New Arrivals</h2>
          <div className="grid lg:grid-cols-5 gap-4 p-4">
            {/* Add new book arrival components here */}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;