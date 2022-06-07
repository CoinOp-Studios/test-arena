import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
} from '@chakra-ui/react';
import { useWallet } from '@raidguild/quiver';
import React, { useCallback, useMemo } from 'react';

import { getNetworkInfo } from '../../config';

// import { getProviderInfo } from 'web3modal';


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WalletStatusModal(props: ModalProps): JSX.Element {
  const { isOpen, onClose } = props;
  const { provider, chainId, disconnect, connectWallet } = useWallet();

  // const providerInfo = useMemo(() => getProviderInfo(provider), [provider]);

  const handleChange = useCallback(() => {
    onClose();
    disconnect();
    localStorage.removeItem('WEB3_CONNECT_CACHED_PROVIDER');
    connectWallet();
  }, [onClose, disconnect, connectWallet]);

  const networkInfo = useMemo(() => {
    if (chainId) {
      const info = getNetworkInfo(chainId);
      return `on ${info.name}`;
    }
    return 'on an unknown network';
  }, [chainId]);

  return (
    <Modal
      blockScrollOnMount={true}
      isOpen={isOpen}
      onClose={onClose}
      preserveScrollBarGap={false}
    >
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
      <ModalContent
        top="0"
        width="50%"
        borderRadius="lg"
      >
        <ModalHeader padding="0 2rem" height="4.5rem" maxHeight="4.5rem">
          <Flex
            flexFlow="row nowrap"
            justify="space-between"
            height="80px"
            width="20em"
            maxWidth="1440px"
            fontSize="1.5rem"
            verticalAlign="middle"
            lineHeight="2.5rem"
            marginTop="1.2rem"
          >
            <Box fontSize="lg">
              Account
            </Box>
            <Spacer />
            <ModalCloseButton top="25px" />
          </Flex>
        </ModalHeader>
        <ModalBody>
          <Box
            border="2px solid"
            borderColor="black"
            borderRadius="lg"
            padding="1rem 2rem"
            mb="2rem"
          >
            <Flex alignItems="baseline">
              <Box>Connected to {networkInfo}</Box>
              <Spacer />
              <Button
                variant="outline"
                bgColor="transparent"
                border="1px solid #000"
                borderRadius="2em"
                _hover={{
                  bgColor: 'gray.400',
                }}
                onClick={handleChange}
              >
                Change
              </Button>
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
