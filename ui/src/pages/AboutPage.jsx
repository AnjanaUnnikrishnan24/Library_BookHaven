import React from 'react'

const AboutPage = () => {
  return (
    <>
    <div className="bg-cover mt-10 bg-center h-full w-full bg-blend-lighten" style="background-image: url('/images/4301-1.jpg');">
        <main className="container mx-auto px-4 py-8">
            <section className="bg-white shadow-md rounded-lg p-6 mt-10">
              <h2 className="text-2xl font-semibold mb-4">About Us</h2>
              <p className="mb-4">Welcome to <span className="font-bold text-blue-600">Book Heaven Library</span>, a sanctuary for book lovers and knowledge seekers. At Book Heaven, we aim to 
                foster a community that cherishes the joy of reading and exploration.</p>
              <p className="mb-4">Our library offers a vast collection of books spanning various genres, from timeless classics to contemporary bestsellers. We believe in providing our 
                members with an enriching experience by ensuring they have access to the books they love and need.</p>
              <p className="mb-4"> To maintain a seamless borrowing experience, we operate exclusively through pre-booking. This ensures that you can reserve your favorite books in advance 
                and pick them up at your convenience without any hassle. </p>
              <p className="mb-4">Join our community today and embark on a journey of endless discovery. We look forward to welcoming you to <span className="font-bold text-blue-600">Book Heaven Library</span>.</p>
            </section>
        
            <section className="mt-8">
              <h3 className="text-3xl font-bold mb-4 text-white">Why Choose Us?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Extensive Collection</h4>
                  <p>Our library features a diverse range of books across multiple genres and topics, catering to readers of all interests and age groups.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Pre-booking Convenience</h4>
                  <p>Enjoy a hassle-free experience by reserving your desired books online before visiting the library. Your time matters to us.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Community-Focused</h4>
                  <p> Join a vibrant community of readers and attend exclusive events, book clubs, and discussions hosted by the library.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Personalized Service</h4>
                  <p> Our friendly staff is always ready to assist you in finding the perfect book or answer any of your queries.</p>
                </div>
              </div>
            </section>
          </main>

    </div>
    
    </>
  )
}

export default AboutPage