// components/SEO.tsx

import { DefaultSeo, DefaultSeoProps } from "next-seo";
import Head from "next/head";
import Image from "next/image";

const SEO: React.FC = () => {
  return (
    <>
      <DefaultSeo
        title="Ourshare"
        description="Diversify your equity"
        openGraph={{
          type: "website",
          url: "https://ourshare.ai", // Replace with your website URL
          title: "Ourshare",
          description: "Ourshare - Diversify your equity",
          images: [
            {
              url: "/images/RECT_SEO.svg",
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
