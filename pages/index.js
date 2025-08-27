import { useRef } from "react";
import Header from "../components/Header";
import SkillItem from "../components/SkillItem";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Head from "next/head";
import { attributes as data } from "../content/home.md";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();

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

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className="relative px-4">
      <Head>
        <link rel="icon" href="./favicon.ico"/>
        <meta name="description" content="{data.meta_description}"></meta>
        <title>{data.title}</title>
      </Head>
      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>
      <div className="max-w-7xl mx-8 tablet:mx-16 laptopl:mx-auto mb-8">
        <Header
          handleStartScroll={handleStartScroll}
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleContactScroll={handleContactScroll}
        />
        <section className="-mt-28 mb-8 laptop:mb-28 h-screen flex flex-col justify-between align-baseline">
          <h1
            className="title-font text-center text-2xl tablet:text-6xl laptopl:text-8xl w-full"
            style={{ marginTop: 'calc(50vh - 1.5em)' }}
          >
            <span ref={textOne} className="block">
              {data.header_first_line}
            </span>
            <span ref={textTwo} className="block">
              {data.header_second_line}
            </span>
            <span ref={textThree} className="block">
              {data.header_third_line}
            </span>
          </h1>
          <Socials />
        </section>
        <section className="mb-8 laptop:mb-28 p-2 laptop:p-0" ref={workRef}>
          <h2 className="mb-8 laptop:mb-16 title-font text-6xl text-bold">Проекты</h2>
          <h3 className="mb-4 laptop:mb-8  title-font text-3xl text-bold">Искуствоведческая деятельность</h3>
          <div className="mb-8 laptop:mb-16 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.academy_projects?.map((project) => (
              <p className="block w-full text-xl">{project.description}</p>
            ))}
          </div>
          <h3 className="mb-4 laptop:mb-8 title-font text-3xl text-bold">Творческая деятельность</h3>
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.art_projects?.map((project, index) => (
              <WorkCard key={index} project={project} />
            ))}
          </div>
        </section>
        <section className="mb-8 laptop:mb-28 p-2 laptop:p-0">
          <h2 className="mb-4 title-font text-4xl text-bold">Навыки и опыт</h2>
          <div className="flex flex-col tablet:m-10 gap-8">
            {data.skills?.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
        </section>
        <section className="mb-8 laptop:mb-28 p-2 laptop:p-0">
          <h2 className="mb-4 title-font text-4xl text-bold">Принципы</h2>
          <div className="flex justify-center items-center flex-wrap tablet:flex-nowrap tablet:m-10 gap-4">
            {data.principles?.map((principle) => (
              <p className="block w-full text-2xl text-center italic">{principle.description}</p>
            ))}
          </div>
        </section>
        <section className="mb-8 laptop:mb-28 p-2 laptop:p-0" ref={aboutRef}>
          <h2 className="pb-4 title-font text-4xl text-bold">Обо мне</h2>
          <div className="grid laptop:grid-cols-3 gap-4 tablet:p-10 tablet:pb-0">
            <p className="text-l laptop:text-xl laptop:col-span-2 self-center">
              {data.about}
            </p>
            <img
              alt={data.title}
              className="w-full h-full max-h-96 object-contain row-start-1 laptop:row-start-auto"
              src={data.portrait}
            ></img>
          </div>
        </section>
        <section className="p-2 laptop:p-0" ref={contactRef}>
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
    </div>
  );
}
