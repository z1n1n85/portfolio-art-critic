import React, { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import Button from "../Button";
import { attributes as data } from "../../content/home.md";

const Header = ({
  handleStartScroll,
  handleWorkScroll,
  handleAboutScroll,
  handleContactScroll,
}) => {
  const { theme, setTheme } = useTheme();
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
            backdrop-blur-md ${mounted && (theme === "dark" ? "bg-black/10" : "bg-white/10")}
            rounded-xl`}>
              <a
                onClick={handleStartScroll}
                className="font-unbounded p-2 laptop:p-0 link transition-all ease-out
                duration-300 hover:scale-105 active:scale-100 cursor-pointer"
              >
                {data.title}
              </a>
              <div className="flex items-center">
                <Button
                  className={"mr-2"}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <img
                    className="h-6"
                    src={`./images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  ></img>
                </Button>
                {mounted && (
                  <Popover.Button>
                    <img
                      className="h-5"
                      src={`./images/${
                        !open
                          ? theme === "dark"
                            ? "menu-white.svg"
                            : "menu.svg"
                          : theme === "light"
                          ? "cancel.svg"
                          : "cancel-white.svg"
                      }`}
                    ></img>
                  </Popover.Button>
                )}
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 p-4 backdrop-blur-md ${
                mounted && (theme === "dark" ? "bg-black/10" : "bg-white/10")
              } rounded-xl mt-1`}
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
          backdrop-blur-md ${
            mounted && (theme === "dark" ? "bg-black/10" : "bg-white/10")
          } rounded-2xl px-4 dark:text-white top-4 z-10 tablet:flex`}
      >
        <a
          onClick={handleStartScroll}
          className="font-unbounded font-medium transition-all ease-out duration-300
          hover:scale-105 active:scale-100 cursor-pointer mob:p-2 laptop:p-0"
        >
          {data.title}
        </a>
        <div className="flex">
          <Button onClick={handleWorkScroll}>Проекты</Button>
          <Button onClick={handleAboutScroll}>Обо мне</Button>
          <Button onClick={handleContactScroll}>Контакты</Button>
          <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <img
              className="h-6"
              src={`./images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
            ></img>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
