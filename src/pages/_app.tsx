import "@/styles/global.css";
import { AppProps } from "next/app";
import React from "react";


// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}