import { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Markdown from "react-markdown";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SkillItem from "../components/SkillItem";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { attributes as data } from "../content/home.md";

export default function Home() {
  const aboutRef = useRef();
  const experienceRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.meta_description} />
        <meta property="og:image" content={data.portrait} />
        <meta name="description" content={data.meta_description} />
        <title>{data.title}</title>
      </Head>

      <Header
        handleStartScroll={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        handleAboutScroll={() => scrollTo(aboutRef)}
        handleExperienceScroll={() => scrollTo(experienceRef)}
        handleWorkScroll={() => scrollTo(workRef)}
        handleContactScroll={() => scrollTo(contactRef)}
      />

      <main className="pt-16 tablet:pt-20">
        <section className="mx-auto max-w-[1440px] px-5 py-14 tablet:px-10 tablet:py-20 laptop:px-16">
          <div className="mx-auto max-w-6xl">
            <p className="accent-text mb-7 text-center text-xs font-semibold uppercase tracking-[0.24em] tablet:text-sm">
              Искусствоведение · Кураторство
            </p>
            <h1 className="title-font text-center text-[clamp(2.75rem,7.7vw,7.5rem)] font-light leading-[0.92] tracking-[-0.035em]">
              <span className="accent-text mb-2 block italic">{data.header_first_line}</span>
              <span className="block">{data.header_second_line}</span>
              <span className="mt-2 block">{data.header_third_line}</span>
            </h1>
          </div>
          <div className="mt-12 border-t border-ink/25 pt-5 tablet:mt-16">
            <Socials />
          </div>
        </section>

        <section ref={aboutRef} className="scroll-mt-20 px-5 py-14 tablet:px-10 tablet:py-20 laptop:px-16">
          <div className="mx-auto max-w-[1440px] pt-7">
            <div className="grid gap-10 laptop:grid-cols-12 laptop:gap-8">
              <div className="laptop:col-span-4">
                <h2 className="section-title">Обо мне</h2>
                <figure className="mt-7 max-w-md overflow-hidden bg-white p-3">
                  <img
                    alt="Мария Зинина-Хализова"
                    className="aspect-[4/5] w-full object-cover object-top grayscale-[12%]"
                    src={data.portrait}
                  />
                </figure>
              </div>
              <div className="laptop:col-span-7 laptop:col-start-6">
                <div className="about-copy max-w-3xl text-lg leading-relaxed tablet:text-xl">
                  <Markdown>{data.about}</Markdown>
                </div>
                <div className="mt-9">
                  <h2 className="section-title mb-4">Принципы работы</h2>
                  <div className="divide-y divide-ink/20 border-y border-ink/20">
                    {data.principles?.map((principle, index) => (
                      <div key={index} className="grid gap-3 py-4 tablet:grid-cols-[2.5rem_1fr]">
                        <span className="accent-text title-font text-lg italic">0{index + 1}</span>
                        <p className="text-base leading-relaxed text-ink/80 tablet:text-lg">{principle.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={experienceRef} className="dark-surface scroll-mt-20 bg-ink px-5 py-14 text-paper tablet:px-10 tablet:py-20 laptop:px-16">
          <div className="mx-auto grid max-w-[1440px] gap-8 laptop:grid-cols-2">
            <div className="border-t border-paper/30 pt-6">
              <h2 className="section-title mb-5">Опыт</h2>
              <div className="divide-y divide-paper/20 border-b border-paper/20">
                {data.experience?.map((item, index) => (
                  <SkillItem key={index} skill={item} index={index} dark />
                ))}
              </div>
            </div>
            <div className="border-t border-paper/30 pt-6">
              <h2 className="section-title mb-5">Навыки</h2>
              <div className="divide-y divide-paper/20 border-b border-paper/20">
                {data.skills?.map((skill, index) => (
                  <SkillItem key={index} skill={skill} index={index} dark />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="work" ref={workRef} className="scroll-mt-20 px-5 py-14 tablet:px-10 tablet:py-20 laptop:px-16">
          <div className="mx-auto max-w-[1440px] border-t border-ink/25 pt-7">
            <div className="grid gap-8 desktop:grid-cols-12">
              <h2 className="section-title desktop:col-span-4">Исследования</h2>
              <div className="min-w-0 border-t border-ink/30 desktop:col-span-8">
                {data.academy_projects?.map((project, index) => (
                  <Link
                    key={project.slug}
                    href={`/${project.slug}`}
                    className="group grid gap-3 border-b border-ink/30 py-5 transition-colors hover:text-accent tablet:grid-cols-[2.5rem_1fr_auto] tablet:items-start"
                  >
                    <span className="accent-text title-font text-lg italic">0{index + 1}</span>
                    <span>
                      <span className="block text-2xl font-bold leading-tight tablet:text-3xl">{project.title}</span>
                      {project.description && (
                        <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-ink/60 tablet:text-base">{project.description}</span>
                      )}
                    </span>
                    <span className="flex items-center gap-3">
                      {project.file && (
                        <span title="К исследованию прикреплён файл" aria-label="К исследованию прикреплён файл" className="text-ink/50 group-hover:text-accent">
                          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 3.75H7.5A2.25 2.25 0 0 0 5.25 6v12A2.25 2.25 0 0 0 7.5 20.25h9A2.25 2.25 0 0 0 18.75 18V8.25L14.25 3.75Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 3.75v4.5h4.5M9 14.25h6M12 11.25v6" />
                          </svg>
                        </span>
                      )}
                      <span aria-hidden="true" className="text-xl transition-transform group-hover:translate-x-1">↗</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-16 tablet:mt-20">
              <div className="mb-7 border-b border-ink/30 pb-3">
                <h2 className="section-title">Творческая практика</h2>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 tablet:grid-cols-2 laptop:gap-x-12">
                {data.art_projects?.map((project, index) => (
                  <WorkCard key={index} project={project} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer ref={contactRef} />
    </div>
  );
}
