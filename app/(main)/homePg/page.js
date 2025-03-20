import { HomeIcon, BookOpenIcon, FilmIcon, MusicNoteIcon, CameraIcon, HeartIcon, DeviceMobileIcon, GlobeAltIcon, PencilAltIcon, CogIcon } from '@heroicons/react/outline';
import Link from "next/link";

export default function Homepage() {
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
        <Link href="/homePg" className="flex items-center space-x-2 bg-teal-600 text-white p-2 rounded">
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
      <div id="homepage">
                <div>
            <div className="bg-gray-100 text-teal-600 rounded-lg px-4 py-2 text-lg w-fit font-bold">
              Homepage
            </div>
            <hr className="border-t-2 border-teal-600 mt-2" />
            <div className="p-10 grid grid-cols-2 gap-2 place-items-center">
                {/* Card 1 */}
                <div className="w-64 bg-white rounded-3xl overflow-hidden shadow-lg relative group">
                    <img
                      alt="Whisper of the Heart"
                      src="https://i.pinimg.com/736x/4b/94/ff/4b94ff941e7263e7f67e01b77c7cfe41.jpg"
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-white text-teal-600 px-3 py-1 rounded-xl text-xs font-medium">
                      <span className="text-cyan-600">&#x1F3F7;</span> Book
                    </div>
                    <Link href={"/allBK"} className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-lg font-bold">View All Available Books</p>
                    </Link>
                </div>
                {/* End of Card 2 */}
                {/* Card 2 */}
                <div className="w-64 bg-white rounded-3xl overflow-hidden shadow-lg relative group">
                    <img
                      alt="Whisper of the Heart"
                      src="https://i.pinimg.com/736x/27/84/f8/2784f851eb77878fa2d50975a230745d.jpg"
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-white text-teal-600 px-3 py-1 rounded-xl text-xs font-medium">
                      <span className="text-cyan-600">&#x1F3F7;</span> Cartoons
                    </div>
                    <Link href={"/oldSch"} className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-lg font-bold">View All Available Cartoons</p>
                    </Link>
                </div>
                {/* End of Card 2 */}
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}