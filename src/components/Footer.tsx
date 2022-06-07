import { Box, HStack } from '@chakra-ui/react';
import React, { FC } from 'react';

import { ColorModeSwitcher } from './ColorModeSwitcher';

interface IProps {}

export const Footer: FC<IProps> = (props) => {
  return (
  <Box style={{ position: 'absolute', bottom: '1rem', right: '1rem'}}>
    <ColorModeSwitcher />
  </Box>
  );
};
