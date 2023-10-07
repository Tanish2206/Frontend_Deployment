import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
import React from "react";
import FeaturedDesignElement from "./FeatureDesignElement";

const FeatureDesignCarousel = ({ data }) => {
  return (
    <Box w="100%" marginTop={"32px"} position={"relative"} px={4}>
      <Flex h="15%" justify="space-between" py="10px">
        <Flex className="left" align="center">
          {!data && (
            <Heading color="gray.700" ml={6} fontSize={"3xl"}>
              Popular Designs
            </Heading>
          )}
        </Flex>
      </Flex>
      <FeaturedDesignElement />
    </Box>
  );
};

export default FeatureDesignCarousel;
