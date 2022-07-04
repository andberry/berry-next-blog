import Layout from '../../components/layout.js';
import { getMdArticlesIds, getMdArticleData } from '../../lib/content/mdArticles.js';
import Head from 'next/head';
import styleUtils from '../../styles/utils.module.css';



export default function Article( { articleData }) {
    return (
        <Layout fixed>
            <Head>
                <title>{ articleData.data.title }</title>
            </Head>

            <h1 className={styleUtils.heading2Xl}>{ articleData.data.title }</h1>
            <section>
                <div dangerouslySetInnerHTML={ {__html: articleData.content} }></div>
            </section>
        </Layout>
    );
}



export async function getStaticPaths() {
    
    return {
        paths: getMdArticlesIds(),
        fallback: false
    }
}



export async function getStaticProps({ params }) {
    const articleData = getMdArticleData(params.id)

    return {
        props: {
            articleData
        }
    }
}