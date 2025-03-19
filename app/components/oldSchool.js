import Image from 'next/image'

export default function OldSchool() {
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
        <div className='p-10 grid grid-cols-3 gap-4 place-items-center'>
            <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg bg-white">
                {/* Image Container */}
                <div className="relative">
                    <Image
                    src="/images/shin-chan.jpg" 
                    alt="Anime character holding a camera"
                    width={300}
                    height={300}
                    className="w-full object-cover"
                    />
                </div>
            
                {/* Card Content */}
                <div className="p-4 absolute">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">The Hidden Treasure</h2>
                    
                    <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-teal-500">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                        </svg>
                        <span className="text-teal-500 font-medium">20 times |</span>
                        <span className="text-teal-500">1996</span>

                    </div>
                    </div>
                </div>
            </div>
        </div>  
    </>
}