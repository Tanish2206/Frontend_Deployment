import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineSketch } from "react-icons/ai";
import { BiBuildingHouse, BiHomeHeart } from "react-icons/bi";
import { FiPlayCircle } from "react-icons/fi";
import { GiLightBulb } from "react-icons/gi";
import { RiLandscapeLine } from "react-icons/ri";

export const OurServicesList = [
  {
    text: "Architectural Designs",
    iconColor: "yellow.500",
    iconBg: "yellow.100",
    icon: AiOutlineSketch,
  },
  {
    text: "Interior Designs",
    iconColor: "green.500",
    iconBg: "green.100",
    icon: BiHomeHeart,
  },
  {
    text: "MEP Designs",
    iconColor: "purple.500",
    iconBg: "purple.100",
    icon: GiLightBulb,
  },
  {
    text: "Building Permissions",
    iconColor: "yellow.500",
    iconBg: "yellow.100",
    icon: BiBuildingHouse,
  },
  {
    text: "Landscaping",
    iconColor: "green.500",
    iconBg: "green.100",
    icon: RiLandscapeLine,
  },
  {
    text: "Walkthrough",
    iconColor: "purple.500",
    iconBg: "purple.100",
    icon: FiPlayCircle,
  },
];

const Service = ({ text, icon, iconBg }) => {
  return (
    <Stack
      direction="column"
      align="center"
      textAlign="center"
    >
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        rounded="full"
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} fontSize={["sm", "md"]} mt={2}>
        {text}
      </Text>
    </Stack>
  );
};

export default function OurServices() {
  return (
    <Box px={4}>
      <Container maxW="l" mt={8}>
        <Heading
          color="gray.700"
          fontSize={["2xl", "3xl"]}
          textAlign={["center", "left"]}
        >
          Our Services
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          mt="2rem"
        >
          {OurServicesList?.map((service, index) => (
            <Service
              key={index}
              icon={
                <Icon
                  as={service?.icon}
                  color={service?.iconColor}
                  w={10}
                  h={10}
                />
              }
              text={service?.text}
              marginLeft={0}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
