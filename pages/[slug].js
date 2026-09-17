import Head from "next/head";
import Link from "next/link";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { attributes as homeData } from "../content/home.md";

export default function ProjectPage({ project }) {
  if (!project) {
    return <div className="min-h-screen bg-paper p-8 text-ink">Проект не найден</div>;
  }

  const handleContactScroll = () => {
    document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
  };

  const hasText = typeof project.text === "string" && project.text.trim().length > 0;

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={project.meta_description || homeData.meta_description} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.meta_description || homeData.meta_description} />
        <title>{project.title || homeData.title}</title>
      </Head>

      <Header
        isHomePage={false}
        handleStartScroll={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        handleContactScroll={handleContactScroll}
      />

      <main className="pt-16 tablet:pt-20">
        <header className="px-5 pb-10 pt-9 tablet:px-10 tablet:pb-14 tablet:pt-12 laptop:px-16">
          <div className="mx-auto max-w-[1440px]">
            <Link href="/#work" className="group mb-10 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink/50 transition-colors hover:text-accent">
              <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">←</span>
              Все проекты
            </Link>
            <div className="grid gap-8 laptop:grid-cols-12 laptop:items-end">
              <div className="laptop:col-span-9">
                <p className="accent-text mb-4 text-xs font-semibold uppercase tracking-[0.22em]">Исследование</p>
                <h1 className="max-w-6xl text-[clamp(1.5rem,4vw,4rem)] font-extrabold leading-[0.98] tracking-[-0.035em]">
                  {project.title}
                </h1>
              </div>
              {project.description && (
                <p className="border-l border-accent pl-5 text-base leading-relaxed text-ink/60 laptop:col-span-3">
                  {project.description}
                </p>
              )}
            </div>
            {project.file && (
              <a
                href={project.file}
                download
                className="mt-8 inline-flex items-center gap-3 border border-ink/30 bg-white px-5 py-3 text-sm font-bold transition-colors hover:border-accent hover:text-accent"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 3.75H7.5A2.25 2.25 0 0 0 5.25 6v12A2.25 2.25 0 0 0 7.5 20.25h9A2.25 2.25 0 0 0 18.75 18V8.25L14.25 3.75Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 3.75v4.5h4.5M12 11.25v6m0 0-2.5-2.5M12 17.25l2.5-2.5" />
                </svg>
                Скачать файл исследования
              </a>
            )}
          </div>
        </header>

        {project.image && (
          <div className="px-5 tablet:px-10 laptop:px-16">
            <figure className="mx-auto max-w-[1440px] bg-white p-5 tablet:p-10">
              <img src={project.image} alt={project.title} className="mx-auto max-h-[70vh] w-full object-contain" />
            </figure>
          </div>
        )}

        {hasText && (
          <section className="px-5 py-12 tablet:px-10 tablet:py-16 laptop:px-16">
            <div className="mx-auto grid max-w-[1440px] gap-10 laptop:grid-cols-12">
              <article className="article-body min-w-0 laptop:col-span-7 laptop:col-start-5">
                <Markdown rehypePlugins={[rehypeRaw]}>{project.text}</Markdown>
              </article>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = homeData.academy_projects?.map((project) => ({
    params: { slug: project.slug },
  })) || [];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = homeData.academy_projects?.find((item) => item.slug === params.slug);
  return { props: { project: project || null } };
}
