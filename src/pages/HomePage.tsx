import { Box, Button, useToast } from "@chakra-ui/react";
import React, { FC } from "react";

interface IProps {};

const HomePage:FC<IProps> = (props) => {
  const toast = useToast();
  const handleClick = React.useMemo(() => {
    return () => {
      toast({
        title: "Test",
        description: "Testing the toast",
        status: "success",
        duration: 10000,
        isClosable: true,
        position: "top",
      });
    }
  }, [])
  return (
    <Box id="homepage" className="page">
      Home page
      <Button onClick={handleClick}>test toast</Button>
    </Box>
  )
};

export default HomePage;