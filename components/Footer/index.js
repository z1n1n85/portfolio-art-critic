import { forwardRef } from "react";
import Socials from "../Socials";

const Footer = forwardRef(function Footer(_, ref) {
  return (
    <footer ref={ref} id="contacts" className="dark-surface bg-ink px-5 pb-7 pt-14 text-paper tablet:px-10 tablet:pt-20 laptop:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 laptop:grid-cols-12 laptop:items-end">
          <h2 className="title-font text-[clamp(3.2rem,7vw,7rem)] leading-[0.86] laptop:col-span-9">
            Давайте<br />работать<br /><span className="accent-text italic">вместе</span>
          </h2>
          <Socials className="socials-light pb-2 laptop:col-span-3 laptop:justify-end" />
        </div>
        <div className="mt-14 flex justify-between border-t border-paper/20 py-5 text-xs font-semibold uppercase tracking-[0.14em] text-paper/40">
          <span>Мария Зинина-Хализова</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
