import React from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

import Banner from "../../components/Banner";
import Property from "../../components/Property";

import heroImg from "../../public/assets/images/hero.jpg";

const Properties = () => {
  return (
    <Box>
      <Banner
        purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='Everyone'
        desc1='Explore from Apartments, builder floors, villas'
        desc2='and more'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        imageUrl={heroImg}
      />
      <Flex flexWrap='wrap' justifyContent='center'>
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
      </Flex>
      <Banner
        purpose='BUY A HOME'
        title1=' Find, Buy & Own Your'
        title2='Dream Home'
        desc1=' Explore from Apartments, land, builder floors,'
        desc2=' villas and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imageUrl={heroImg}
      />
      <Flex flexWrap='wrap' justifyContent='center'>
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
      </Flex>
    </Box>
  );
};
export default Properties;
