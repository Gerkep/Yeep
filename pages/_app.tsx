import '../styles/globals.css'
import '../styles/footer.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <MantineProvider withNormalizeCSS withGlobalStyles>
    <NotificationsProvider zIndex={2077}>
      <Head>
        <title>Yepp</title>
      </Head>
      <Component {...pageProps} />
    </NotificationsProvider>
  </MantineProvider>
  )
}

export default MyApp
