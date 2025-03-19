import Sidebar from "../components/sidebar";
import SearchBar from "../components/searchBar";
import Homepage from "../components/homepage";
import OldSchool from "../components/oldSchool";
import AllBooks from "../components/allBook";

export default function Home() {
  return (
    <div className="grid grid-cols-10 gap-[11%] bg-gray-200">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-8 pt-5 pr-4">
        <div className="pb-5">
          <SearchBar />
        </div>
        <div className="bg-white w-full h-[480px] rounded-lg overflow-y-auto p-5">
          <div>
            <AllBooks />
          </div>
        </div>
      </div>
    </div>
  );
}
