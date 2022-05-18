import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from '../styles/theme'
import { SidebarDrawerContextProvider } from '../contexts/SidebarDrawerContext'
import { createStandaloneToast } from '@chakra-ui/toast'
import { ModalContextProvider } from '../contexts/ModalContext'
import { ModalBase } from '../components/Modal'
const { ToastContainer } = createStandaloneToast()
import '../styles/global.css'


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme} >
      <SidebarDrawerContextProvider>
        <ModalContextProvider>
          <ToastContainer />
          <ModalBase />

          <Component {...pageProps} />
          
        </ModalContextProvider>
      </SidebarDrawerContextProvider>
    </ChakraProvider>
  )
}

export default MyApp