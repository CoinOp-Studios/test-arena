import {
  Box,
  ChakraProvider,
  Grid,
  VStack,
  theme,
  useToast,
} from '@chakra-ui/react';
import { WalletProvider } from '@raidguild/quiver';
import ethProvider from 'eth-provider';
import * as React from 'react';
import type { IProviderOptions } from 'web3modal';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { DEFAULT_CHAIN_ID, chains } from './config';
import Routes from './routes';

const providerOptions: IProviderOptions = {
  frame: {
    package: ethProvider,
  },
  // .. Other providers
};

const web3modalOptions = {
  cacheProvider: true,
  providerOptions,
  theme: 'dark',
};

function Inner(): JSX.Element {
  const toast = useToast();
  return (
    <WalletProvider
        web3modalOptions={web3modalOptions}
        networks={chains}
        // Optional if you want to auto switch the network
        defaultChainId={DEFAULT_CHAIN_ID}
        // Optional but useful to handle events.
        handleModalEvents={(eventName, error) => {
          if (error) {
            toast({
              id: 'error',
              title: 'Error',
              description: error.message,
              status: 'error',
              position: 'top'
            });
          }

          console.log(eventName);
        }}
      >
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <Header />

            <VStack spacing={8}>
              <Routes />
            </VStack>
          </Grid>
          <Footer />
        </Box>
      </WalletProvider>
  );
}

export default function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Inner />
    </ChakraProvider>
  );
}
