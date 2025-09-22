import React, { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import Button from "../Button";
import { attributes as data } from "../../content/home.md";
import Link from 'next/link';

const Header = ({
  handleStartScroll,
  handleWorkScroll,
  handleAboutScroll,
  handleContactScroll,
  isHomePage = true
}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <div className="fixed bottom-4 left-4 backdrop-blur-md bg-black/10 rounded-xl h-10 w-10 flex items-center justify-center">
        <a
          onClick={handleStartScroll}
          className="title-font p-2 laptop:p-0 link transition-all ease-out
          duration-300 hover:scale-105 active:scale-100 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 6-6m0 0 6 6m-6-6v12a6 6 0 0 1-12 0v-3" />
          </svg>
        </a>
      </div>
      <Popover className="sticky block tablet:hidden mt-5 top-4 z-10 mx-4">
        {({ open }) => (
          <>
            <div className={`flex items-center justify-between p-2 px-4 laptop:p-0 
            backdrop-blur-md ${mounted && "bg-black/10"} rounded-xl`}>
              <div className="flex items-center gap-8">
                {(isHomePage)
                ? (                
                <p
                  onClick={handleStartScroll}
                  className="p-2 laptop:p-0 link"
                >
                  Мария Хализова
                </p>
                ) : (
                  <Link
                    className="p-2 laptop:p-0 link transition-all ease-out
                    duration-300 hover:scale-105 active:scale-100 cursor-pointer"
                    href={'/'}
                  >
                    Мария Хализова
                  </Link>
                )
                }
              </div>
              <div className="flex items-center">
                {mounted && (
                  <Popover.Button>
                    <img
                      className="h-5"
                      src={`/images/${
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
                {isHomePage && (
                  <>
                    <Button onClick={handleAboutScroll}>Обо мне</Button>
                    <Button onClick={handleWorkScroll}>Проекты</Button>
                  </>
                )}
                <Button onClick={handleContactScroll}>Контакты</Button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky mx-4
          backdrop-blur-md ${mounted && "bg-black/10"}
          rounded-2xl px-4 dark:text-white top-4 z-10 tablet:flex`}
      >
        <div className="flex items-center gap-8">
          {(isHomePage)
          ? (                
          <p
            onClick={handleStartScroll}
            className="p-2 laptop:p-0 link"
          >
            Мария Хализова
          </p>
          ) : (
            <Link
              className="p-2 laptop:p-0 link transition-all ease-out
              duration-300 hover:scale-105 active:scale-100 cursor-pointer"
              href={'/'}
            >
              Мария Хализова
            </Link>
          )
          }
        </div>
        <div className="flex">
          {isHomePage && (
            <>
              <Button onClick={handleAboutScroll}>Обо мне</Button>
              <Button onClick={handleWorkScroll}>Проекты</Button>
            </>
          )}
          <Button onClick={handleContactScroll}>Контакты</Button>
        </div>
      </div>
    </>
  );
};

export default Header;
