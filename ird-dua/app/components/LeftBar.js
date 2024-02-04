import Image from "next/image";
import Link from "next/link";
export default function RightBar() {
  const data = [
    {
      id: "1",
      icon: "home",
      alt: "home",
      href: "/",
    },
    {
      id: "2",
      icon: "alldua",
      alt: "alldua",
      href: "/alldua",
    },
    {
      id: "3",
      icon: "memorize",
      alt: "memorize",
      href: "/memorize",
    },
    {
      id: "4",
      icon: "bookmark",
      alt: "bookmark",
      href: "/bookmark",
    },
    {
      id: "5",
      icon: "ruqyah",
      alt: "ruqyah",
      href: "/ruqyah",
    },
    {
      id: "6",
      icon: "dua-info",
      alt: "dua-info",
      href: "/dua-info",
    },
    {
      id: "7",
      icon: "books",
      alt: "books",
      href: "/books",
    },
  ];
  return (
    <div
      id="left-bar"
      className="w-[100px] flex flex-col gap-y-6 fixed overflow-hidden"
    >
      <div className="bg-white rounded-3xl px-4 lg:h-[calc(93vh)] xl:h-[94vh] 2xl:h-[93vh] 3xl:h-[93vh] overscroll-y-contain scroll-smooth scroll-my-2 overflow-y-scroll scrollbar-width-thin pb-16">
        <div className="justify-center pt-7 mb-10 xl:mb-16 2xl:mb-16 3xl:mb-24 container">
          <Link href="/duas">
            <Image
              src="/icons/dua-logo.svg"
              alt="dua-logo"
              className="h-13 w-16 mx-auto drop-shadow-primary xl:mb-0 cursor-pointer"
              width={56}
              height={56}
            />
          </Link>
        </div>
        <div>
          {data.map((link) => (
            <Link href={link.href} key={link.id}>
              <div className="justify-center items-center cursor-pointer my-2 flex flex-row w-full rounded-lg group">
                <div className=" w-1 rounded-tl-lg rounded-bl-lg "></div>
                <div className="p-2 flex flex-row justify-center items-center">
                  <div className="bg-icon-bg flex p-2 rounded-full items-center h-10 w-10 justify-center">
                    <Image
                      src={`/icons/${link.icon}.svg`}
                      alt={link.alt}
                      className="h-13 w-16 mx-auto drop-shadow-primary xl:mb-0 cursor-pointer"
                      width={56}
                      height={56}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="">
          <div className="pt-6 xl:pt-16 2xl:pt-16 3xl:pt-24 pb-2 text-center">
            <Link href="/support">
              <div className="flex justify-center items-center mx-auto">
                <button className="w-14 h-14 bg-primary drop-shadow-primary rounded-lg text-white text-sm">
                  <div className="flex justify-center items-center">
                    <Image
                      src="/icons/support.svg"
                      alt="/support"
                      className="mx-auto drop-shadow-primary xl:mb-0 cursor-pointer"
                      width={26}
                      height={36}
                    />
                  </div>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
