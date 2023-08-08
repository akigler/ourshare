import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Ourshare from "../components/Ourshare";
import Product from "../components/Product";
import SignUp from "../components/SignUp";
import SEO from "@/components/SEO";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Ourshare</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <Ourshare />
        <Product />
      </main>
      <footer>{/* Footer content goes here */}</footer>
    </div>
  );
};

export default HomePage;
