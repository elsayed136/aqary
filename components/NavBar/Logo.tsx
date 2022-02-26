import React from "react";
import { Box, Text } from "@chakra-ui/react";

import { useBreakpointValue, useColorModeValue } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Text
      textAlign={useBreakpointValue({ base: "center", md: "left" })}
      fontFamily={"heading"}
      fontSize='lg'
      fontWeight='bold'
      color={useColorModeValue("gray.800", "white")}
    >
      Logo
    </Text>
  );
};
export default Logo;
