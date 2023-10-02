import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Martian+Mono:wght@200;300;400;500&display=swap" rel="stylesheet" />

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}