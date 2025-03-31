import React from 'react';
import BooksCard from './BooksCard';

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    language: "English",
    price: 299,
    image: "/images/book001.jpeg",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    language: "English",
    price: 350,
    image: "/images/book002.jpeg",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    language: "English",
    price: 280,
    image: "/images/book003.jpeg",
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    language: "English",
    price: 320,
    image: "/images/book004.jpeg",
  },
];

const BooksGrid = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Available Books</h2>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
            <BooksCard key={book.id} book={book} onAdd={handleAdd}/>
        ))}
      </div>
    </div>
  );
};

export default BooksGrid;