import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import heroImg from "../public/assets/images/hero.jpg";

const Property = () => {
  return (
    <Link href={`/`} passHref>
      <Flex
        flexWrap='wrap'
        w='420px'
        p='5'
        paddingTop='0px'
        justifyContent='flex-start'
        cursor='pointer'
      >
        <Box>
          <Image src={heroImg} width={400} height={260} alt='house' />
        </Box>
        <Box w='full'>
          <Flex
            paddingTop='2'
            alignItems='center'
            justifyContent='space-between'
          >
            <Flex alignItems='center'>
              <Box paddingRight='3' color='green.400'>
                <GoVerified />
              </Box>
              <Text fontWeight='bold' fontSize='lg'>
                AED {millify}
              </Text>
            </Flex>
            <Box>
              <Avatar size='sm' src='/assets/images/hero.jpg' />
            </Box>
          </Flex>
          <Flex
            alignItems='center'
            p='1'
            justifyContent='space-between'
            w='250px'
            color='blue.400'
          >
            15
            <FaBed /> | mn bv <FaBath /> | {millify} sqft <BsGridFill />
          </Flex>
          <Text fontSize='lg'>jnbhgfdxdcfvgbhnjmk,./</Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default Property;
