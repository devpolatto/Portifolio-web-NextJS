import Head from 'next/head'
import Router from 'next/router';
import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import { ChakraProvider } from '@chakra-ui/react';
import ThemeProfile from '../../styles/theme';

import Header from '../components/Header';

import { GlobalStyled } from '../../styles/Global';
import '../../styles/nprogress.css';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', url => {
  console.log(`Loading ${url}`);
  NProgress.start();
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

Router.events.on('routeChangeError', () => {
  NProgress.done()
})

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={ThemeProfile}>
      <Head>
        <title>Polatto.dev</title>
      </Head>
      <Header/>
      <Component {...pageProps} />
    </ChakraProvider>
  )

}
export default MyApp
