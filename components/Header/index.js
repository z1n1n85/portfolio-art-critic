import { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import Link from "next/link";

const navItems = [
  ["Обо мне", "handleAboutScroll"],
  ["Опыт и навыки", "handleExperienceScroll"],
  ["Проекты", "handleWorkScroll"],
  ["Контакты", "handleContactScroll"],
];

const Header = ({ handleStartScroll, isHomePage = true, ...handlers }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateBackToTop = () => {
      setShowBackToTop(window.scrollY > window.innerHeight * 0.8);
    };

    updateBackToTop();
    window.addEventListener("scroll", updateBackToTop, { passive: true });
    window.addEventListener("resize", updateBackToTop);

    return () => {
      window.removeEventListener("scroll", updateBackToTop);
      window.removeEventListener("resize", updateBackToTop);
    };
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-ink/20 bg-paper/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 tablet:h-20 tablet:px-10 laptop:px-16">
          {isHomePage ? (
            <button onClick={handleStartScroll} className="text-left text-base italic font-bold leading-none tablet:text-lg" type="button">
              Мария Зинина-Хализова
            </button>
          ) : (
            <Link href="/" className="text-base italic font-bold leading-none tablet:text-lg">Мария Зинина-Хализова</Link>
          )}

          <nav className="hidden items-center gap-7 tablet:flex" aria-label="Основная навигация">
            {isHomePage ? navItems.map(([label, handler]) => (
              <button key={handler} type="button" onClick={handlers[handler]} className="text-sm font-semibold text-ink/70 transition-colors hover:text-accent">
                {label}
              </button>
            )) : (
              <>
                <Link href="/#work" className="text-sm font-semibold text-ink/70 transition-colors hover:text-accent">Проекты</Link>
                <button type="button" onClick={handlers.handleContactScroll} className="text-sm font-semibold text-ink/70 transition-colors hover:text-accent">Контакты</button>
              </>
            )}
          </nav>

          <Popover className="relative tablet:hidden">
            {({ open, close }) => (
              <>
                <Popover.Button className="flex h-10 w-10 items-center justify-center" aria-label={open ? "Закрыть меню" : "Открыть меню"}>
                  <span className="relative block h-3.5 w-6">
                    <span className={`absolute left-0 top-0 h-px w-6 bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
                    <span className={`absolute bottom-0 left-0 h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
                  </span>
                </Popover.Button>
                <Popover.Panel className="fixed inset-x-0 top-16 border-b border-ink/20 bg-paper px-5 py-4 shadow-soft">
                  <div className="flex flex-col">
                    {isHomePage ? navItems.map(([label, handler], index) => (
                      <button
                        key={handler}
                        type="button"
                        onClick={() => { handlers[handler]?.(); close(); }}
                        className="flex items-center justify-between border-b border-ink/20 py-3 text-left text-base font-semibold"
                      >
                        {label}<span className="accent-text title-font italic">0{index + 1}</span>
                      </button>
                    )) : (
                      <>
                        <Link href="/" className="border-b border-ink/20 py-3 text-base font-semibold">На главную</Link>
                        <button type="button" onClick={() => { handlers.handleContactScroll?.(); close(); }} className="py-3 text-left text-base font-semibold">Контакты</button>
                      </>
                    )}
                  </div>
                </Popover.Panel>
              </>
            )}
          </Popover>
        </div>
      </header>

      <button
        type="button"
        onClick={handleStartScroll}
        aria-label="Наверх"
        aria-hidden={!showBackToTop}
        tabIndex={showBackToTop ? 0 : -1}
        className={`fixed bottom-5 right-5 z-30 flex h-11 w-11 items-center justify-center border border-ink/30 bg-paper/95 text-xl shadow-soft backdrop-blur transition duration-300 hover:border-accent hover:text-accent tablet:bottom-7 tablet:right-7 ${showBackToTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
      >
        ↑
      </button>
    </>
  );
};

export default Header;
