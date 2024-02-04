import Image from "next/image";



const Search = (props) => (
  <div className="sm-max:w-full" >
    <div className="w-82 sm-max:w-full relative md:mr-6 md:w-76 lg:mr-6">
      <div className="flex justify-between sm-max:flex-col sm-max:gap-4">
        <label className="relative block w-full">
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <button className="bg-dua-bg h-9 w-12 items-center justify-center flex rounded-md">
              <Image
                src="/icons/search-svgrepo-com.svg"
                alt="up_iocn"
                className=""
                width={24}
                height={24}
              />
            </button>
          </span>
          <input
            id="search_box"
            className="h-12 placeholder:text-mute-grey placeholder:text-sm border-[1px] block bg-white w-full xl:w-80 rounded-md pl-4 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-0.5 sm:text-sm"
            placeholder="Search by Dua Name"
            type="text"
            name="search"
            // {...props}
          />
        </label>
      </div>
    </div>
  </div>
);
export default Search;
