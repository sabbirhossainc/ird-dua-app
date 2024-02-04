import getAllCatalist from "@/app/lib/getAllCatalist";
import Image from "next/image";
import Link from "next/link";

export default async function Category() {
  const duaCats = await getAllCatalist();
  return (
    <div className="">
      <div className="fixed w-[350px] rounded-t-2xl bg-primary justify-center items-center h-14 flex flex-row px-5">
        <p className="text-base text-white mx-auto">Categories</p>
      </div>
      <div className="fixed overflow-hidden w-[350px] mt-14">
        <div className="mx-3 pt-4">
          <lebel className="relative block w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <Image
                src="/icons/search-svgrepo-com.svg"
                alt="up_iocn"
                width={20}
                height={20}
              />
            </span>
            <input
              id="filterted_catList"
              className="h-12 placeholder:text-mute-grey placeholder:text-sm border-[1px] block bg-white w-full rounded-md pl-12 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm"
              placeholder="Search Categories"
              type="text"
              name="search"
            />
          </lebel>
        </div>
        <div className="h-[calc(100vh-32vh)] lg:h-[calc(100vh_-_45.5vh)] 3xl:h-[68vh] scroll-smooth scroll-my-2 overflow-y-scroll scrollbar-width-thin pb-8 mb-4 overflow-hidden">
          <div className="mt-4">
            {/* mapping data */}
            {duaCats ? (
              <div>
                {duaCats?.data.map((cats) => (
                  <div
                    id="cat_1"
                    className="group scroll-mt-4 style-Kalpurush"
                    key={cats.id}
                  >
                    <Link
                      href={`/duas/${cats.cat_name_en
                        .toLowerCase()
                        .replace(/[\s]/g, "-")}?cat=${cats.cat_id}`}
                    >
                      <div className="cursor-pointer bg-white flex justify-between items-center mx-3  my-2">
                        <div className="flex flex-row gap-x-4 items-center w-full h-18 px-3 rounded-xl group-hover:bg-icon-bg">
                          <div className="flex flex-row w-70 py-4 items-center xs:w-full sm:w-full md:w-full">
                            <div className="bg-dua-bg dark:bg-dark-bg-dark dark:group-hover:bg-dark-bg  flex rounded-lg items-center h-14 w-14 xs:w-12 xs:h-12">
                              <Image
                                src={`/images/${cats.cat_icon}.svg`}
                                alt="duar_gurutto"
                                className="p-3"
                                width={56}
                                height={56}
                              />
                            </div>
                            <div className="w-40 text-left ml-2">
                              <p className="font-semibold text-md style-kalpurush text-black style-inter-cat xl:text-md subpixel-antialiased">
                                {cats.cat_name_en}
                              </p>
                              <p className="text-gray-400 text-sm mt-1 xs:text-[11px] antialiased">
                                Subcategory: {cats.no_of_subcat}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-row w-12 items-center">
                            <div className="border-solid border-l-2 border-dua-bg w-0.1 mr-3 h-12 hover:border-none"></div>
                            <div className="flex flex-col gap-y-1 justify-center items-center">
                              <p className="text-base font-semibold xs:text-sm xl:text-md subpixel-antialiased">
                                {cats.no_of_dua}
                              </p>
                              <p className="text-gray-400 text-xs xs:text-[11px] antialiased">
                                Duas
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <h1>No data !!</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function generateStaticParams() {
//   const duaCats = await getAllCatalist();
//   return duaCats.map((cats) => ({
//     id: cats.id.toString(),
//   }));
// }
