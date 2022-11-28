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
          <title>Web3 Software House in Europe | Yepp</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta name="description" content="Implement web3 in your business. Custom smart contracts, web design and legal agenda." />
        </Head>
        <Component {...pageProps} />
      </NotificationsProvider>
    </MantineProvider>
  </>
  )
}

export default MyApp
