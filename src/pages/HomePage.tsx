import { Box } from "@chakra-ui/react";
import React, { FC } from "react";

interface IProps {};

const HomePage:FC<IProps> = (props) => {
  return (
    <Box id="homepage" className="page">
      Home page
    </Box>
  )
};

export default HomePage;