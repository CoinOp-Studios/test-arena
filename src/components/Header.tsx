import { Box, HStack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Link } from 'wouter';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { WalletButton } from './WalletButton';

interface IProps {}

export const Header: FC<IProps> = (props) => {
  return (
    <HStack width="100%" height="2rem" justify="space-between">
      <Box>
        <Link to="/">Home</Link>
      </Box>
      <Box>
        <Link to="/status">Status</Link>
      </Box>
      <ColorModeSwitcher />
      <WalletButton />
    </HStack>
  );
};
