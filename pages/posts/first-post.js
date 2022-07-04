import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';
import devImage from '../../public/images/dev.jpg';

export default function FirstPost() {
    return (
        <Layout fixed>
            <Head>
                <title> This is my first blog post</title>
            </Head>
            
            <Script 
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                  console.log(`script loaded correctly, window.FB has been populated`)
                }
            />

            <h1>This is the Fist Post page!</h1>
            <div className="l-grid">
                <div className="l-cols-2">
                <Image
                    src={ devImage }
                    // layout="responsive"
                    /*
                    width="600"
                    height="600"
                    */
                    alt="Berrh Thumbnail"
                />
                </div>
                <div className="l-cols-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vero facere voluptate nihil recusandae architecto eos consequuntur repellat. Commodi ut blanditiis natus facilis placeat eligendi quo accusamus, nobis delectus a.</p>
                </div>
            </div>
        </Layout>
    );
}