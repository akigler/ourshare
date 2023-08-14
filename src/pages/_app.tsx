import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/styles.css";
import SEO from "../components/SEO";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
