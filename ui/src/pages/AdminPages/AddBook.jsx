import React from 'react'

const AddBook = () => {
  return (
    <div class="flex flex-col border border-gray-400 bg-slate-300 shadow-xl rounded-lg p-6 shadow-md w-[60%] mx-auto mt-10">
        <form class="text-2xl font-bold text-gray-800 mb-2 w-full mt-2 p-4" >
            <h1 class="text-3xl font-bold text-gray-800 mb-2 text-center">Add Book</h1>

            <label for="title" class="text-gray-700 font-medium ">Book Title</label>
            <input type="text" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required placeholder="Enter the book name"/>

            <label for="image" class="text-gray-700 font-medium ">Book Image</label>
            <input type="file" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required placeholder="Enter the book name"/>

            <label for="author" class="text-gray-700 font-medium">Author Name</label>
            <input type="text"  class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
            <label for="category" class="text-gray-700 font-medium ">Book Category</label>
            <select class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Science</option>
                <option>Fiction</option>
                <option>Literature</option>
                <option>Business</option>
                <option>Economics</option>
                <option>Autobiography</option>
                <option>Biography</option>
                <option>Sports</option>
                <option>Encyclopedias</option>
            </select>
            <label for="edition" class="text-gray-700 font-medium mb-2" >Edition</label>
            <input type="text" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"  />
            <label for="year" class="text-gray-700 font-medium mb-2" >Published Year</label>
            <input type="date" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"  />
            <label for="description" class="text-gray-700 font-medium">Description</label>
            <textarea name="description" id="description" rows="5" maxlength="500" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <div class="flex gap-4">
                <button type="submit" value="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" >Add Book</button>
                <button type="reset" value="reset"  class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 ">Reset</button>
            </div>
        </form>
    </div>
  )
}

export default AddBook