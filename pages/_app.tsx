import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Roboto, Roboto_Mono, Roboto_Slab } from 'next/font/google';
import { ThemeContextWrapper } from 'lib/ThemeContext';
import { useEffect } from 'react';

const roboto = Roboto({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
});

const robotoSlab = Roboto_Slab({
  weight: ['300', '700'],
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
  weight: ['400'],
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
    const onResize = () => {
        const html = window.document.documentElement;
        html.style.setProperty('--app-height', `${window.innerHeight}px`);
    };

    useEffect(() => {
        onResize();
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <>
            <style jsx global>{`
              :root {
                --roboto-font: ${roboto.style.fontFamily};
                --roboto-slab-font: ${robotoSlab.style.fontFamily};
                --roboto-mono-font: ${robotoMono.style.fontFamily};
              }
            `}</style>
            <ThemeContextWrapper>
                <Component {...pageProps} />
            </ThemeContextWrapper>
        </>
    );
}

export default MyApp
