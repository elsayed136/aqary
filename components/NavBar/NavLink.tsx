import React, { ReactNode } from "react";
import NextLink from "next/link";

import { Box, Link, useColorModeValue } from "@chakra-ui/react";

const NavLink: React.FC<{ herf: string }> = ({ children, herf }) => (
  <Box>
    <NextLink href={herf} passHref>
      <Link
        px={2}
        py={1}
        rounded={"md"}
        outline='none'
        border='none'
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
      >
        {children}
      </Link>
    </NextLink>
  </Box>
);

export default NavLink;
