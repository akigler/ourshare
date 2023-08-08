import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/styles.css";
import SEO from "../components/SEO";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
