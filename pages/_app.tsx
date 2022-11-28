import '../styles/globals.css'
import '../styles/footer.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications'
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

    <Script id="google analytics"strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
    </Script>
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <NotificationsProvider zIndex={2077}>
        <Head>
          <title>Web3 Development Company in Europe | Yepp</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta name="description" content="Build your web3 business today. We will develop for you smart contracts, design a website and conduct market research." />

          <meta property="og:title" content="Yepp | Web3 Development Company" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://drive.google.com/uc?export=view&id=1woqUDs8-Asfxr01XyX-cZ1kFHnJBTp-F"/>
          <meta property="og:url" content="https://drive.google.com/uc?export=view&id=1woqUDs8-Asfxr01XyX-cZ1kFHnJBTp-F"/>

          <meta name="twitter:card" content="summary_large_image"/>
          <meta property="og:description" content="Build your web3 business today. We will develop for you smart contracts, design a website and conduct market research."/>
          <meta property="og:site_name" content="Yepp | Web3 Development Company"/>
          <meta name="twitter:image:alt" content="Yepp logo"></meta>
          <meta name="twitter:image" content="https://drive.google.com/uc?export=view&id=1woqUDs8-Asfxr01XyX-cZ1kFHnJBTp-F"></meta>
        </Head>
        <Component {...pageProps} />
      </NotificationsProvider>
    </MantineProvider>
  </>
  )
}

export default MyApp
