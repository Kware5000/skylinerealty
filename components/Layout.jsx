import Head from 'next/head'
import { Box, Heading } from '@chakra-ui/react'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({children}) => (

    <Box >
        <Head overflowX='hidden'>
            <title>Skyline Realtors</title>
        </Head>
        <Box >
            <Box>
                <Navbar overflowX='hidden'/>
            </Box>
            <Box>
                {children}
            </Box>
            <footer>
                <Footer/>
            </footer>
        </Box>
    </Box>
)
export default Layout