import { HomeIcon, BookOpenIcon, FilmIcon, MusicNoteIcon, CameraIcon, HeartIcon, DeviceMobileIcon, GlobeAltIcon, PencilAltIcon, CogIcon } from '@heroicons/react/outline';

export default function Sidebar() {
  return (
    <div className="bg-gray-100 text-teal-600 rounded-lg p-4 w-64 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-w-1">
      <div className="flex flex-col items-center mb-6">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv2Crj4vaNlafTJhTE8JVC-9Cv2zPwMWoUgQ&s" alt="Profile" className="rounded-full w-24 h-24 mb-2" />
        <h2 className="text-xl font-semibold">Mony Visa</h2>
        <p className="text-sm text-gray-500">blackmonster@gmail.com</p>
      </div>
      <nav className="flex flex-col space-y-2">
        <a href="#" className="flex items-center space-x-2 hover:bg-teal-600 hover:text-white p-2 rounded">
          <HomeIcon className="w-6 h-6" />
          <span>Home</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-teal-600 hover:text-white p-2 rounded">
          <BookOpenIcon className="w-6 h-6" />
          <span>Book Categories</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-teal-600 hover:text-white p-2 rounded">
          <FilmIcon className="w-6 h-6" />
          <span>Old-School Cartoons</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-teal-600 hover:text-white p-2 rounded">
          <FilmIcon className="w-6 h-6" />
          <span>Movies & TV Shows</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-teal-600 hover:text-white p-2 rounded">
          <MusicNoteIcon className="w-6 h-6" />
          <span>Music</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-teal-600 hover:text-white p-2 rounded">
          <CameraIcon className="w-6 h-6" />
          <span>Photography</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-teal-600 hover:text-white p-2 rounded">
          <HeartIcon className="w-6 h-6" />
          <span>Sports & Fitness</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-teal-600 hover:text-white p-2 rounded">
          <DeviceMobileIcon className="w-6 h-6" />
          <span>Technology & Gadgets</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-teal-600 hover:text-white p-2 rounded">
          <GlobeAltIcon className="w-6 h-6" />
          <span>Travel & Exploration</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-teal-600 hover:text-white p-2 rounded">
          <PencilAltIcon className="w-6 h-6" />
          <span>Writing & Journaling</span>
        </a>
      </nav>
      <div className="mt-6">
        <a href="#" className="flex items-center space-x-2 hover:bg-teal-600 hover:text-white p-2 rounded">
          <CogIcon className="w-6 h-6" />
          <span>Settings</span>
        </a>
      </div>
    </div>
  );
}