import React from "react";
import { Text } from "@chakra-ui/react";

import { useBreakpointValue, useColorModeValue } from "@chakra-ui/react";

const Logo: React.FC<{ title?: string }> = ({ children, title }) => {
  return (
    <Text
      textAlign={useBreakpointValue({ base: "center", md: "left" })}
      fontFamily={"heading"}
      fontSize='lg'
      fontWeight='bold'
      color={useColorModeValue("gray.800", "white")}
    >
      {title || children}
    </Text>
  );
};
export default Logo;
