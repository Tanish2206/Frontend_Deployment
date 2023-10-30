import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import NavBar from '../components/Home/NavBar';
import '../styles/Home.module.css'
import { Provider } from 'react-redux';
import Store from '../utils/Store/store'; 
import secureLocalStorage from "react-secure-storage";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  const storedId = secureLocalStorage.getItem("designerId");
  return (
    <>
    <ChakraProvider>
      <Flex direction="column" minH="100vh">
      {
        storedId ?""
        :
        <NavBar/>
      }
        <Box >
          <Provider store={Store}>
          <Component {...pageProps} />
          </Provider>
        </Box>
      </Flex>
    </ChakraProvider>
    <Analytics />
    </>
  );
}

export default MyApp;
