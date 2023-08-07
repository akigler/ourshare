// components/SEO.tsx

import { DefaultSeo, DefaultSeoProps } from "next-seo";
import Head from "next/head";

const SEO: React.FC = () => {
  return (
    <>
      <DefaultSeo
        title="Ourshare"
        description="Diversify your equity"
        openGraph={{
          type: "website",
          url: "https://example.com", // Replace with your website URL
          title: "Your Website Title",
          description: "Your website description",
          images: [
            {
              url: "https://example.com/images/preview-image.jpg", // Replace with the URL of your image
              width: 800,
              height: 600,
              alt: "Image Description", // Replace with a short description of the image
            },
          ],
        }}
      />
      <Head>{/* Other meta tags can be added here if needed */}</Head>
    </>
  );
};

export default SEO;
