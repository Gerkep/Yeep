import '../styles/globals.css'
import '../styles/footer.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <MantineProvider withNormalizeCSS withGlobalStyles>
    <NotificationsProvider>
      <Component {...pageProps} />
    </NotificationsProvider>
  </MantineProvider>
  )
}

export default MyApp
