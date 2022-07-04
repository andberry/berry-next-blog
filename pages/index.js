import Head from 'next/head'
import Link from 'next/link';
import Layout from '../components/layout.js';
import { getMdArticlesByDate } from '../lib/content/mdArticles.js';
import styleUtils from '../styles/utils.module.css';

export default function Home({ articles }) {
  
  return (
    <Layout fixed isHomepage>
    
      <Head>
        <title>Berry Next Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h2 className={ styleUtils.headingXl }>Articles list</h2>
        <ul className="articles">
          {articles.map(({id, content, data}) => (
            <li key={ id } className={ `article ${styleUtils.listItem}` }>
              <Link href={ `/articles/${id}` } className="article__link">
                <a>
                { data.title }
                </a>
              </Link>
              <div className="article__date">{ data.date }</div>
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  )
}



export async function getStaticProps() {
  const articles = getMdArticlesByDate();
  
  return {
    props: {
      articles
    }
  }
}
