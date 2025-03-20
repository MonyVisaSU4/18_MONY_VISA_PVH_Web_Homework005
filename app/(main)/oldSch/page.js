import { HomeIcon, BookOpenIcon, FilmIcon, MusicNoteIcon, CameraIcon, HeartIcon, DeviceMobileIcon, GlobeAltIcon, PencilAltIcon, CogIcon } from '@heroicons/react/outline';
import Image from 'next/image'
import Link from "next/link";

export default async function OldSchool() {
    const res = await fetch('https://nextjs-homework005.vercel.app/api/cartoon')
    const data = await res.json()

    const resCartCate = await fetch('https://nextjs-homework005.vercel.app/api/cartoon_genre')
    const dataCartCate = await resCartCate.json();
    return<>
        <div className="grid grid-cols-10 gap-[11%] bg-gray-200">
      <div className="col-span-2" id="sidebar">
      <div className="bg-gray-100 text-teal-600 rounded-lg p-4 w-64 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-w-1">
      <div className="flex flex-col items-center mb-6">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv2Crj4vaNlafTJhTE8JVC-9Cv2zPwMWoUgQ&s" alt="Profile" className="rounded-full w-24 h-24 mb-2" />
        <h2 className="text-xl font-semibold">Mony Visa</h2>
        <p className="text-sm text-gray-500">blackmonster@gmail.com</p>
      </div>
      <nav className="flex flex-col space-y-2">
        <Link href="/homePg" className="flex items-center space-x-2 hover:bg-teal-600 hover:text-white p-2 rounded">
          <HomeIcon className="w-6 h-6" />
          <span>Home</span>
        </Link>
        <Link href="/allBK" className="flex items-center space-x-2 hover:bg-teal-600 hover:text-white p-2 rounded">
          <BookOpenIcon className="w-6 h-6" />
          <span>Book Categories</span>
        </Link>
        <Link href="/oldSch" className="flex items-center space-x-2 bg-teal-600 text-white p-2 rounded">
          <FilmIcon className="w-6 h-6" />
          <span>Old-School Cartoons</span>
        </Link>
        <Link href="#" className="flex items-center space-x-2 hover:bg-teal-600 hover:text-white p-2 rounded">
          <FilmIcon className="w-6 h-6" />
          <span>Movies & TV Shows</span>
        </Link>
        <Link href="#" className="flex items-center space-x-2 hover:bg-teal-600 hover:text-white p-2 rounded">
          <MusicNoteIcon className="w-6 h-6" />
          <span>Music</span>
        </Link>
        <Link href="#" className="flex items-center space-x-2 hover:bg-teal-600 hover:text-white p-2 rounded">
          <CameraIcon className="w-6 h-6" />
          <span>Photography</span>
        </Link>
        <Link href="#" className="flex items-center space-x-2 hover:bg-teal-600 hover:text-white p-2 rounded">
          <HeartIcon className="w-6 h-6" />
          <span>Sports & Fitness</span>
        </Link>
        <Link href="#" className="flex items-center space-x-2 hover:bg-teal-600 hover:text-white p-2 rounded">
          <DeviceMobileIcon className="w-6 h-6" />
          <span>Technology & Gadgets</span>
        </Link>
        <Link href="#" className="flex items-center space-x-2 hover:bg-teal-600 hover:text-white p-2 rounded">
          <GlobeAltIcon className="w-6 h-6" />
          <span>Travel & Exploration</span>
        </Link>
        <Link href="#" className="flex items-center space-x-2 hover:bg-teal-600 hover:text-white p-2 rounded">
          <PencilAltIcon className="w-6 h-6" />
          <span>Writing & Journaling</span>
        </Link>
      </nav>
      <div className="mt-6">
        <Link href="#" className="flex items-center space-x-2 hover:bg-teal-600 hover:text-white p-2 rounded">
          <CogIcon className="w-6 h-6" />
          <span>Settings</span>
        </Link>
      </div>
    </div>
    </div>
    <div className="col-span-8 pt-5 pr-4">
      <div className="pb-5" id='search'>
        <div>
            <input type="text" placeholder="Search..." className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 w-full rounded-lg text-sm focus:outline-none"/>
        </div>
      </div>
      <div className="bg-white w-full h-[480px] rounded-lg overflow-y-auto p-5">
      <div className="flex justify-between">
            <div className="bg-gray-100 text-teal-600 rounded-lg px-4 py-2 text-lg w-fit font-bold">
                Old School Cartoons
            </div>
            <select className="border border-gray-300 rounded-lg px-4 py-2">
                {dataCartCate.payload.map((CartCate) => (
                    <option key={CartCate.id} value={CartCate.id}>{CartCate.cartoon_genre}</option>
                ))}
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
      </div>
    </div>
  </div>
    </>
}