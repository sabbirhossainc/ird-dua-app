"use client";

import Image from "next/image";
import { useState } from "react";

export default function MenuCom() {
  const [open, setOpen] = useState(false);

  const data = [
    {
      item: "1",
      icon: "supportgr",
      alt: "settings/support",
      title: "Support Us",
      href: "",
    },
    {
      item: "2",
      icon: "download",
      alt: "settings/download",
      title: "Download Dua App",
      href: "",
    },
    {
      item: "3",
      icon: "privacy",
      alt: "settings/privacy",
      title: "Privacy Policy",
      href: "",
    },
    {
      item: "4",
      icon: "credit",
      alt: "settings/credit",
      title: "Thanks & Credits",
      href: "",
    },
    {
      item: "5",
      icon: "about",
      alt: "settings/about",
      title: "About Us",
      href: "",
    },
    {
      item: "6",
      icon: "copyright",
      alt: "settings/copyright",
      title: "Copyright Warning",
      href: "",
    },
    {
      item: "7",
      icon: "projects",
      alt: "settings/projects",
      title: "Our Other Projects",
      href: "",
    },
  ];

  function handleClick(e) {
    setOpen(e);
    // let dropdown = document.getElementById('dropdown');
    // dropdown.classList.toggle('block');
//     const dropdownContainer = document.querySelector(".dropdown-container");
// const menuTitle = document.querySelector(".menu-title");
// const dropdownMenu = document.querySelector(".dropdown-menu");
//     window.addEventListener("click", (e) => {
//   if (!dropdownContainer.contains(e.target)) {
//     dropdownMenu.classList.remove("visible")
  }
})
  }
  return (
    <div className="">
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-2 bg-transparentpx-3 py-2 text-sm font-semibold text-gray-900"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => handleClick((pre) => !pre)}
          >
            <Image
              src="/icons/profile1.svg"
              alt="up_iocn"
              className="dark:invert"
              width={40}
              height={40}
            />
            {open ? (
              <Image
                src="/icons/caret-up-solid.svg"
                alt="up_iocn"
                className="dark:invert"
                width={10}
                height={10}
              />
            ) : (
              <Image
                src="/icons/caret-down-solid.svg"
                alt="down_iocn"
                className="dark:invert"
                width={10}
                height={10}
              />
            )}
          </button>
        </div>

        {open && (
          <div
            id="dropdown"
            className="absolute pt-6 py-4 px-3 -right-4 z-10 mt-2 w-60 origin-top-right rounded-2xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            {data.map((menu) => (
              <div
                className="inline-flex w-full justify-start py-2 hover:text-gray-900 hover:rounded-xl transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 cursor-pointer"
                role="none"
                key={menu.item}
              >
                <div className="flex items-center  px-2">
                  <div className="shrink-0 justify-center">
                    <span>
                      <Image
                        src={`/icons/${menu.icon}.svg`}
                        alt={menu.alt}
                        className="dark:invert"
                        width={20}
                        height={20}
                      />
                    </span>
                  </div>
                  <div className="flex px-2 justify-center">
                    <a
                      href={menu.href}
                      className="text-gray-900  text-sm ml-1"
                      role="menuitem"
                      id={`menu-item-${menu.item}`}
                    >
                      {menu.title}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
