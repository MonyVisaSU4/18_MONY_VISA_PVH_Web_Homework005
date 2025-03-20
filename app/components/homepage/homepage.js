export default async function Homepage() {
  return (
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
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-lg font-bold">View All Available Books</p>
              </div>
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
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-lg font-bold">View All Available Cartoons</p>
              </div>
          </div>
          {/* End of Card 2 */}
        </div>
    </div>
  );
}