import { Box, HStack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Link } from 'wouter';

import { WalletButton } from './WalletButton';

interface IProps {}

export const Header: FC<IProps> = (props) => {
  return (
    <Box borderBottom="1px solid #999" height="2.5rem">
      <HStack width="100%" height="2rem" justify="space-between">
        <Box>
          <Link to="/">Home</Link>
        </Box>
        <Box>
          <Link to="/status">Status</Link>
        </Box>
        <WalletButton variant="solid" />
      </HStack>
    </Box>
  );
};
