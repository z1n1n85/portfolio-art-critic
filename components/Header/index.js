import React, { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import Button from "../Button";
import { attributes as data } from "../../content/home.md";

const Header = ({
  handleStartScroll,
  handleWorkScroll,
  handleAboutScroll,
  handleContactScroll,
}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <Popover className="sticky block tablet:hidden mt-5 top-4 z-10">
        {({ open }) => (
          <>
            <div className={`flex items-center justify-between p-2 px-4 laptop:p-0 
            backdrop-blur-md ${mounted && "bg-black/10"} rounded-xl`}>
              <a
                onClick={handleStartScroll}
                className="title-font p-2 laptop:p-0 link transition-all ease-out
                duration-300 hover:scale-105 active:scale-100 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </a>
              <div className="flex items-center">
                {mounted && (
                  <Popover.Button>
                    <img
                      className="h-5"
                      src={`./images/${
                        !open
                          ? "menu-white.svg"
                          : "cancel-white.svg"
                      }`}
                    ></img>
                  </Popover.Button>
                )}
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 p-4 backdrop-blur-md 
                ${mounted && "bg-black/10"} rounded-xl mt-1`}
            >
              <div className="flex justify-end flex-col">
                <Button onClick={handleWorkScroll}>Проекты</Button>
                <Button onClick={handleAboutScroll}>Обо мне</Button>
                <Button onClick={handleContactScroll}>Контакты</Button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky 
          backdrop-blur-md ${mounted && "bg-black/10"}
          rounded-2xl px-4 dark:text-white top-4 z-10 tablet:flex`}
      >
        <a
          onClick={handleStartScroll}
          className="title-font font-medium transition-all ease-out duration-300
          hover:scale-105 active:scale-100 cursor-pointer mob:p-2 laptop:p-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </a>
        <div className="flex">
          <Button onClick={handleWorkScroll}>Проекты</Button>
          <Button onClick={handleAboutScroll}>Обо мне</Button>
          <Button onClick={handleContactScroll}>Контакты</Button>
        </div>
      </div>
    </>
  );
};

export default Header;
