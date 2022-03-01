import React from "react";
import { Flex, Box } from "@chakra-ui/react";

import { baseUrl, fetchApi } from "../../utils/fetchApi";

import Banner from "../../components/Banner";
import Property from "../../components/Property";

import heroImg from "../../public/assets/images/hero.jpg";
import { GetStaticProps, NextPage } from "next";

const Properties: NextPage<{
  propertiesForSale: any[];
  propertiesForRent: any[];
}> = ({ propertiesForSale, propertiesForRent }) => {
  console.log(propertiesForSale);
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

export const getStaticProps: GetStaticProps<{
  propertiesForSale: any;
  propertiesForRent: any;
}> = async () => {
  const propertyForSale: any = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent: any = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
};

export default Properties;
