import { attributes as data } from "../../content/home.md";

const Socials = ({ className = "" }) => (
  <div className={`${className} flex flex-wrap gap-x-6 gap-y-3`}>
    {data.socials.map((social, index) => (
      <a
        key={index}
        href={social.link}
        target={social.link.startsWith("http") ? "_blank" : undefined}
        rel={social.link.startsWith("http") ? "noreferrer" : undefined}
        className="group inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm transition-colors hover:border-accent hover:text-accent"
      >
        {social.title}
        <span aria-hidden="true" className="text-xs transition-transform group-hover:translate-x-0.5">↗</span>
      </a>
    ))}
  </div>
);

export default Socials;
