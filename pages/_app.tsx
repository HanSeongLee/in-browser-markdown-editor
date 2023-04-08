import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Roboto, Roboto_Slab, Roboto_Mono } from 'next/font/google';

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
  return (
      <>
        <style jsx global>{`
          :root {
            --roboto-font: ${roboto.style.fontFamily};
            --roboto-slab-font: ${robotoSlab.style.fontFamily};
            --roboto-mono-font: ${robotoMono.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </>
  );
}

export default MyApp
