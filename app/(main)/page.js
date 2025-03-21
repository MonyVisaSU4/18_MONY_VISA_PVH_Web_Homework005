import { HomeIcon, BookOpenIcon, FilmIcon, MusicNoteIcon, CameraIcon, HeartIcon, DeviceMobileIcon, GlobeAltIcon, PencilAltIcon, CogIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function Home() {
  return (
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
        <Link href="/oldSch" className="flex items-center space-x-2 hover:bg-teal-600 hover:text-white p-2 rounded">
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
        <h1 className='text-gray-300 text-2xl text-center'>Please Click on Home at Sidebar</h1>
      </div>
    </div>
  </div>
  );
}
