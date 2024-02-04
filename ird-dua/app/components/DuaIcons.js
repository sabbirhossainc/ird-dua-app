import Image from "next/image";
import Link from "next/link";

export default function DuaIcons() {
  const data = [
    {
      id: "1",
      icon: "copy",
      alt: "copy",
      href: "",
    },
    {
      id: "2",
      icon: "bookmarkd",
      alt: "bookmark",
      href: "",
    },
    {
      id: "3",
      icon: "plan",
      alt: "plan",
      href: "",
    },
    {
      id: "4",
      icon: "share",
      alt: "share",
      href: "",
    },
    {
      id: "5",
      icon: "report",
      alt: "report",
      href: "",
    },
  ];
  return (
    <div className="flex items-center flex-row justify-between py-6 gap-x-8 xs:gap-x-6">
      {data.map((item) => (
        <Link href={item.href} key={item.id}>
          <div id={item.alt} className="relative w-6">
            <Image
              className="cursor-pointer"
              src={`/icons/${item.icon}.svg`}
              width={24}
              height={24}
              alt={item.alt}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
