import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from '../styles/theme'
import { SidebarDrawerContextProvider } from '../contexts/SidebarDrawerContext'
import { createStandaloneToast } from '@chakra-ui/toast'
const { ToastContainer } = createStandaloneToast()

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme} >
      <SidebarDrawerContextProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </SidebarDrawerContextProvider>
    </ChakraProvider>
    
  )
  
}

export default MyApp