import { Flex, useColorModeValue } from "@chakra-ui/react";

export default function SearchFilters() {
  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.900")}
      p='4'
      justifyContent='center'
      flexWrap='wrap'
    >
      search filters
    </Flex>
  );
}
