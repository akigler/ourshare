// components/SEO.tsx

// import { DefaultSeo, DefaultSeoProps } from "next-seo";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Image from "next/image";

const SEO: React.FC = () => {
  return (
    <>
      <NextSeo
        title="Ourshare"
        description="Diversify your equity."
        openGraph={{
          type: "website",
          url: "https://ourshare.ai", // Replace with your website URL
          title: "Ourshare",
          description:
            "Ourshare enables anyone to diversify their equity by pooling shares",
          images: [
            {
              url: "https://ourshare.ai/RECT_SEO.jpg",
              width: 800,
              height: 600,
              alt: "Ourshare",
            },
          ],
        }}
      />
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default SEO;
