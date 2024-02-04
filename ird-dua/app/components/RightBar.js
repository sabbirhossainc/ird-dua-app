
import Image from "next/image";
export default function RightBar() {
  return (
    
      <div id="right-bar" className="overflow-hidden w-full 2xl:w-[270px] 3xl:w-[300px]">
        <div className="bg-white w-full h-[76vh] lg:h-[calc(86vh)] xl:h-[92vh] 2xl:h-[86vh] 3xl:h-[96vh] rounded-3xl overscroll-y-contain scroll-smooth scroll-my-2 overflow-y-scroll scrollbar-width-thin pb-16 2xl:w-full 3xl:w-full">
          <div className="mt-8 pb-6">
            <p className="text-center text-2xl">
              Settings
            </p>
          </div>
          <div className="xs:pb-4 sm:pb-4 w-full">
            <div className="mx-4 my-4">
              <div className="border-x-devider border-x-1 border-b-1 border-solid border divide-[#cccdcf] rounded-lg">
                <div className="">
                  <div className="dark:bg-dark-bg-lite transition duration-300 delay-[10ms] bg-dua-bg flex flex-row w-full rounded-lg">
                    <div className="bg-primary w-1 rounded-tl-lg rounded-bl-lg"></div>
                    <div className="p-2 flex flex-row items-center w-full cursor-pointer">
                      <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center">
                        <Image
                          src="/icons/language.svg"
                          alt="language"
                          className="dark:invert"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p className="text-primary font-medium text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                        Language Settings
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="py-6 rounded-b-lg">
                    <div className="flex flex-row gap-x-3 mx-4 justify-center">
                      <button className="bg-primary text-white rounded-md w-29 h-10 text-ms xs:w-full sm:w-full">
                        English
                      </button>
                      <button className="text-black border border-solid border-[#cccdcf] dark:border-none rounded-md w-29 h-10 text-ms xs:w-full sm:w-full">
                        বাংলা
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-4 my-4">
              <div className="">
                <div className="cursor-pointer">
                  <div className="bg-dua-bg flex flex-row w-full rounded-lg">
                    <div className=" w-1 rounded-tl-lg rounded-bl-lg"></div>
                    <div className="p-2 flex flex-row items-center w-full">
                      <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center">
                        <Image
                          src="/icons/general.svg"
                          alt="general"
                          className="dark:invert"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p className="text-mute-grey-200 dark:text-dark-text text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                        General Settings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-4 my-4">
              <div className="">
                <div className="cursor-pointer">
                  <div className="bg-dua-bg flex flex-row w-full rounded-lg">
                    <div className=" w-1 rounded-tl-lg rounded-bl-lg"></div>
                    <div className="p-2 flex flex-row items-center w-full">
                      <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center">
                        <Image
                          src="/icons/font.svg"
                          alt="font"
                          className="dark:invert"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p className="text-mute-grey-200 text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                      Font Settings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-4 my-4">
              <div className="">
                <div className="cursor-pointer">
                  <div className="bg-dua-bg flex flex-row w-full rounded-lg dark:bg-dark-bg-dark">
                    <div className="w-1 rounded-tl-lg rounded-bl-lg"></div>
                    <div className="p-2 flex flex-row items-center w-full">
                      <div className="bg-icon-bg flex p-2 items-center rounded-full mr-5 justify-center">
                        <Image
                          src="/icons/font.svg"
                          alt="font"
                          className="dark:invert"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p className="text-mute-grey-200 text-start text-base leading-5 xs:text-sm lg-min:text-sm style-Kalpurush">
                      Appearance Settings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
