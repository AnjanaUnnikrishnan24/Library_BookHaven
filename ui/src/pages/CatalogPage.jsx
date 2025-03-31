import React from 'react'

const CatalogPage = () => {
  return (
    <>
    <div className="mt-[80px] p-4 bg-slate-200 flex flex-row justify-between">
        <button className="py-2 px-4 hover:bg-blue-600 hover:rounded-2xl text-xl">All</button>
        <button className="py-2 px-4 hover:bg-blue-600 hover:rounded-2xl text-xl">Science</button>
        <button className="py-2 px-4 hover:bg-blue-600 hover:rounded-2xl text-xl">Fiction</button>
        <button className="py-2 px-4 hover:bg-blue-600 hover:rounded-2xl text-xl">Novel</button>
        <button className="py-2 px-4 hover:bg-blue-600 hover:rounded-2xl text-xl">Sports</button>
        <button className="py-2 px-4 hover:bg-blue-600 hover:rounded-2xl text-xl">Business</button>
        <button className="py-2 px-4 hover:bg-blue-600 hover:rounded-2xl text-xl">Literary Fiction </button>
        <button className="py-2 px-4 hover:bg-blue-600 hover:rounded-2xl text-xl">Biography </button>
        <button className="py-2 px-4 hover:bg-blue-600 hover:rounded-2xl text-xl">Autobiography</button>
        <button className="py-2 px-4 hover:bg-blue-600 hover:rounded-2xl text-xl">History </button>
        <button className="py-2 px-4 hover:bg-blue-600 hover:rounded-2xl text-xl">Encyclopedias</button>
        <button className="py-2 px-4 hover:bg-blue-600 hover:rounded-2xl text-xl">Economics </button>
    </div>

    <div className="grid grid-cols-6 mt-10 ml-10 mb-10 mr-10 w-full gap-4">
        
     </div> 
     </>
  )
}

export default CatalogPage