import style from './layout.module.css';
import styleUtils from '../styles/utils.module.css';
import Image from 'next/image';
import Link from 'next/link';

const siteName = 'Berry Next Blog';

export default function Layout({ children, fixed, isHomepage }) {
    const layoutClass = fixed ? style.container : '';
    
    return (
        <div>
            <header className={style.header}>
                <div className={ style.header__inner }>
                { isHomepage ? (
                        <>
                            <Image
                                priority
                                src="/images/berry.jpg"
                                className={ styleUtils.borderCircle }
                                height={ 200 }
                                width={ 200 }
                                alt={ siteName }
                            />
                            <h1>This is the homepage</h1>
                        </>
                    ) : (
                        <>
                            <Link href="/">
                                <a>
                                    <Image
                                        priority
                                        src="/images/berry.jpg"
                                        className={ styleUtils.borderCircle }
                                        height={ 200 }
                                        width={ 200 }
                                        alt={ siteName }
                                    />
                                </a>
                            </Link>
                            <h1>This is not the homepage</h1>
                        </>
                    )
                }
                </div>
            </header>
            
            <main className={ `${style.main} ${layoutClass}` } >
                { children }    
            </main>
            
            <footer className={ style.footer }>
                <p>This is the footer</p>
                { !isHomepage && (
                    <Link href="/">
                        <a className={ style.backToHome }>Back to Homepage</a>
                    </Link>
                )}
            </footer>
        </div>
    );
}