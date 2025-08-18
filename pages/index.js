import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
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
        <title>{data.title} </title>
      </Head>
      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>
      <div className="container mx-auto mb-10">
        <Header
          handleStartScroll={handleStartScroll}
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleContactScroll={handleContactScroll}
        />
        <div className="-mt-28 h-screen flex flex-col justify-between align-baseline">
          <h1
            className="font-unbounded text-3xl tablet:text-5xl laptop:text-5xl laptopl:text-7xl
              p-1 tablet:p-2 w-full laptop:w-4/5 mt-36"
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
          <Socials className="mt-2 laptop:mt-5" />
        </div>
        <div className="mt-10 laptop:mt-28 p-2 laptop:p-0" ref={workRef}>
          <h2 className="font-unbounded text-4xl text-bold">Проекты</h2>
          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project, index) => (
              <WorkCard key={index} project={project} />
            ))}
          </div>
        </div>
        <div className="mt-10 laptop:mt-28 p-2 laptop:p-0">
          <h2 className="font-unbounded text-4xl text-bold">Навыки</h2>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.skills.map((skill, index) => (
              <ServiceCard key={index} skill={skill} />
            ))}
          </div>
        </div>
        <div className="mt-10 laptop:mt-28 p-2 laptop:p-0" ref={aboutRef}>
          <h2 className="font-unbounded text-4xl text-bold">Обо мне</h2>
          <div className="grid laptop:grid-cols-3 gap-4 tablet:p-10 tablet:pb-0 pt-5">
            <p className="text-xl laptop:text-3xl laptop:col-span-2 self-center">
              {data.about}
            </p>
            <img
              alt={data.title}
              className="w-auto h-full max-h-96 object-cover row-start-1 laptop:row-start-auto"
              src={data.portrait}
            ></img>
          </div>
        </div>
        <div className="mt-5 laptop:mt-28 p-2 laptop:p-0" ref={contactRef}>
          <div>
            <h2 className="font-unbounded text-4xl text-bold">Контакты</h2>
            <div className="mt-10">
              <p className="font-unbounded text-3xl mob:text-5xl laptopl:text-7xl text-bold">
                ДАВАЙТЕ
                <br />
                РАБОТАТЬ
                <br />
                ВМЕСТЕ
              </p>
              <div className="mt-10">
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
