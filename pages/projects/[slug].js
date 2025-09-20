import { useRouter } from "next/router";
import Header from "../../components/Header";
import Socials from "../../components/Socials";
import { attributes as homeData } from "../../content/home.md";
import Markdown from 'react-markdown';
import Head from "next/head";

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Находим проект по slug
  const project = homeData.academy_projects?.find(p => p.slug === slug);

  // Если проект не найден или данные еще не загружены
  if (!project) {
    return <div>Проект не найден</div>;
  }

  // Функции для скролла (аналогичные index.js)
  const handleStartScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleContactScroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative px-4">
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="description" content={project.meta_description || homeData.meta_description}></meta>
        <title>{project.title || homeData.title}</title>
      </Head>
      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>
      <div className="max-w-7xl mx-8 tablet:mx-16 laptopl:mx-auto mb-8">
        <Header
          handleStartScroll={handleStartScroll}
          handleContactScroll={handleContactScroll}
          isHomePage={false} // Добавьте этот пропс в Header компонент
        />
        
        <section className="mt-16 mb-16">
          <div className="mb-8">
            <h1 className="title-font text-3xl tablet:text-5xl mb-4">
              {project.title}
            </h1>
            {project.description && (
              <p className="text-xl text-white">
                {project.description}
              </p>
            )}
          </div>

          {project.image && (
            <div className="mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-h-96 object-cover rounded-lg"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <Markdown
              components={{
                ul(props) {
                  const {node, ...rest} = props
                  return <ul className="list-disc ml-8 mb-4" {...rest} />
                },
                p(props) {
                  const {node, ...rest} = props
                  return <p className="mb-4" {...rest} />
                },
                h2(props) {
                  const {node, ...rest} = props
                  return <h2 className="text-2xl font-bold mb-4 mt-8" {...rest} />
                },
                h3(props) {
                  const {node, ...rest} = props
                  return <h3 className="text-xl font-bold mb-3 mt-6" {...rest} />
                }
              }}
            >
              {project.text}
            </Markdown>
          </div>
        </section>

        <section className="p-2 laptop:p-0">
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

// Генерируем статические пути во время сборки
export async function getStaticPaths() {
  const { attributes: data } = require('../../content/home.md');
  
  // Получаем все slugs из академических проектов
  const paths = data.academy_projects?.map((project) => ({
    params: { slug: project.slug },
  })) || [];

  return {
    paths,
    fallback: false, // false означает, что несуществующие пути вернут 404
  };
}

// Получаем данные для каждого пути
export async function getStaticProps({ params }) {
  const { attributes: data } = require('../../content/home.md');
  
  // Находим проект по slug
  const project = data.academy_projects?.find(p => p.slug === params.slug);

  return {
    props: {
      project: project || null,
    },
  };
}