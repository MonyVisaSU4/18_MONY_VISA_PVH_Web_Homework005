import Image from 'next/image'

export default async function OldSchool() {
    const res = await fetch('https://nextjs-homework005.vercel.app/api/cartoon')
    const data = await res.json()
    return<>
        <div className="flex justify-between">
            <div className="bg-gray-100 text-teal-600 rounded-lg px-4 py-2 text-lg w-fit font-bold">
                Old School Cartoons
            </div>
            <select className="border border-gray-300 rounded-lg px-4 py-2">
                <option value="filter1">Filter 1</option>
                <option value="filter2">Filter 2</option>
                <option value="filter3">Filter 3</option>
            </select>
        </div>
        <hr className="border-t-2 border-teal-600 mt-2" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {data.payload.map((cartoon) => (
                <div key={cartoon.id} className="max-w-xs rounded-2xl overflow-hidden shadow-lg bg-white">
                    {/* Image Container */}
                    <div className="relative">
                        <Image
                        src={cartoon.image} 
                        alt="Anime character holding a camera"
                        width={300}
                        height={300}
                        className="w-full object-cover"
                        />
                    </div>
                
                    {/* Card Content */}
                    <div className="p-4">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">{cartoon.ct_title || 'Title not available'}</h2>
                        
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-teal-500">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                                </svg>
                                <span className="text-teal-500 font-medium">20 times |</span>
                                <span className="text-teal-500">{cartoon.published_year || 'Year not available'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
}