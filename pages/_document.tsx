import {Head, Html, Main, NextScript} from 'next/document';
import DefaultHead from 'components/commons/DefaultHead';

function Document() {
    return (
        <Html>
            <Head>
                <DefaultHead />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};


export default Document;
