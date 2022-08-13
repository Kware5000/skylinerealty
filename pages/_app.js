import '../styles/globals.css'
import Router from 'next/router'
import Head from 'next/head'
import nprogress from 'nprogress'
import {ChakraProvider} from '@chakra-ui/react'
import Layout from '../components/Layout'
import ChakraUiCssReset from '@chakra-ui/css-reset'

function MyApp({ Component, pageProps }) {
  return (
    
    
    
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
    
     
     
    )


}

export default MyApp
