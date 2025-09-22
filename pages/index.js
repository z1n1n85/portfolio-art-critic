import { useRef } from "react";
import Header from "../components/Header";
import SkillItem from "../components/SkillItem";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import BackgroundGradient from "../components/BackgroundGradient";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Head from "next/head";
import { attributes as data } from "../content/home.md";
import Markdown from 'react-markdown'
import Link from 'next/link';

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  // Handling Scroll
  const handleStartScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop - 50,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop - 50,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleContactScroll = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative px-4 backgound-root">
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.meta_description} />
        <meta name="description" content={data.meta_description}></meta>
        <title>{data.title}</title>
      </Head>
      <div className="relative max-w-7xl mx-8 tablet:mx-16 laptopl:mx-auto mb-8">
      <Header
        handleStartScroll={handleStartScroll}
        handleWorkScroll={handleWorkScroll}
        handleAboutScroll={handleAboutScroll}
        handleContactScroll={handleContactScroll}
      />
      <section className="-mt-28 pb-8 laptop:pb-28 h-screen flex flex-col justify-between align-baseline">
        <h1
          className="title-font text-center text-2xl tablet:text-6xl laptopl:text-8xl w-full"
          style={{ marginTop: 'calc(50vh - 1.5em)' }}
        >
          <span className="block">
            {data.header_first_line}
          </span>
          <span className="block">
            {data.header_second_line}
          </span>
          <span className="block">
            {data.header_third_line}
          </span>
        </h1>
        <Socials />
      </section>
      <section className="pb-8 laptop:pb-28 p-2 laptop:p-0" ref={aboutRef}>
        <h2 className="pb-8 title-font text-4xl text-bold">Обо мне</h2>
        <div className="grid laptop:grid-cols-3 gap-4 tablet:p-10 tablet:pb-0">
          <div className="text-l laptop:text-xl laptop:col-span-2 self-center">
            <Markdown
              components={{
                ul(props) {
                  const {node, ...rest} = props
                  return <ul className="list-disc ml-8 mb-2" {...rest} />
                },
                p(props) {
                  const {node, ...rest} = props
                  return <p className="mb-2" {...rest} />
                }
              }}
            >
              {data.about}
            </Markdown>
          </div>
          <img
            alt={data.title}
            className="w-full h-full max-h-[500px] object-contain row-start-1 laptop:row-start-auto"
            src={data.portrait}
          ></img>
        </div>
      </section>
        <section className="pb-8 laptop:pb-28 p-2 laptop:p-0">
          <h2 className="mb-8 title-font text-4xl text-bold">Принципы</h2>
          <div className="flex justify-center items-center flex-wrap tablet:flex-nowrap tablet:m-10 gap-4">
            {data.principles?.map((principle) => (
              <p className="block w-full text-l laptop:text-xl tablet:text-center italic">{principle.description}</p>
            ))}
          </div>
        </section>
        <section className="pb-8 laptop:pb-28 p-2 laptop:p-0">
          <h2 className="mb-8 title-font text-4xl text-bold">Навыки и опыт</h2>
          <div className="flex flex-col tablet:m-10 gap-8">
            {data.skills?.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
        </section>
        <section className="pb-8 laptop:pb-28 p-2 laptop:p-0" ref={workRef}>
          <h2 className="mb-8 laptop:mb-16 title-font text-4xl laptop:text-6xl text-bold">Проекты</h2>
          <h3 className="mb-4 laptop:mb-8  title-font text-2xl laptop:text-3xl text-bold">Искуствоведческая деятельность</h3>
          <div className="mb-8 laptop:mb-16 grid grid-cols-1 tablet:grid-cols-2 gap-8">
            {data.academy_projects?.map((project) => (
              <Link 
                key={project.slug} 
                href={`/projects/${project.slug}`}
                className="flex items-center w-full text-l hover:-translate-y-1 transition-all"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex-shrink-0 size-6 me-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                {project.title}
              </Link>
            ))}
          </div>
          <h3 className="mb-4 laptop:mb-8 title-font text-2xl laptop:text-3xl text-bold">Творческая деятельность</h3>
          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              {data.art_projects?.filter((_, index) => index % 2 === 0).map((project, index) => (
                <WorkCard key={index * 2} project={project} />
              ))}
            </div> 
            <div className="flex flex-col gap-4">
              {data.art_projects?.filter((_, index) => index % 2 === 1).map((project, index) => (
                <WorkCard key={index * 2 + 1} project={project} />
              ))}
            </div>
          </div>
        </section>
        <section className="pb-8 p-2 laptop:p-0" ref={contactRef}>
          <div>
            <h2 className="mb-8 title-font text-4xl text-bold">Контакты</h2>
            <div className="mb-8">
              <p className="title-font text-3xl mob:text-5xl laptopl:text-7xl text-bold">
                ДАВАЙТЕ
                <br />
                РАБОТАТЬ
                <br />
                ВМЕСТЕ
              </p>
              <div>
                <Socials />
              </div>
            </div>
          </div>
        </section>
      </div>
      <BackgroundGradient/>
    </div>
  );
}
