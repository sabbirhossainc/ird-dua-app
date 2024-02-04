import Image from "next/image";
import DuaIcons from "@/app/components/DuaIcons";
import getAllDuas from "@/app/lib/getAllDuas";

export default async function Duas() {
  const duas = await getAllDuas();

  return (
    <div className="w-full lg:overflow-y-auto overflow-hidden scroll-smooth scroll-my-2 overflow-y-scroll scrollbar-width-thin delay-1000 transition duration-1000 ease-linear">
      {/* duas list */}
      <div className="group scroll-mt-4">
        {duas.data.map((dua) => (
          <div className="">
            <div
              id="sec_1"
              className="flex undefined mb-5 flex-row bg-white rounded-lg px-5 py-4 justify-start items-center"
            >
              <p className="text-title font-medium leading-[25px] dark:text-dark-text text-mss style-Kalpurush subpixel-antialiased">
                <span className="text-primary font-medium leading-[25px] text-mss style-Kalpurush">
                  Section:{" "}
                </span>
                Sections
              </p>
            </div>
            <div
              id={dua.dua_id}
              className="bg-white rounded-lg mb-5"
              key={dua.id}
            >
              <div className="p-6">
                <div>
                  <div className="flex flex-row  justify-start items-center">
                    <Image
                      className="mr-3"
                      src="/icons/duacard.svg"
                      alt="duacard"
                      width={24}
                      height={24}
                    />
                    <p className="text-primary font-medium style-Kalpurush-dua-title">
                      {dua.dua_name_en}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <div className="w-full">
                    <p className="style-Kalpurush style-inter dark:text-[#e4e4e4] mt-5 text-justify leading-8 font-normal text-[18px]">
                      <span>{` ${dua.top_en}`}</span>
                    </p>
                  </div>
                  <div>
                    <p className="mt-5 text-[18px] style-Kalpurush style-inter font-normal text-primary subpixel-antialiased">
                      Reference:
                    </p>
                    <div className="mt-1 style-Kalpurush style-inter font-normal dark:text-dark-text">
                      <span>{dua.refference_en}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-row items-center justify-between px-6">
                  <div className="py-4 flex flex-row items-center xs:w-full xs:gap-x-4">
                    <audio src={`${dua.audio}`}></audio>
                  </div>
                  <DuaIcons />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const duas = await getAllDuas();
  return duas.map((dua) => ({
    id: dua.id.toString(),
  }));
}
