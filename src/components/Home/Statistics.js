import React from "react";
import {
  Box,
  chakra,
  Flex,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { statsData } from "../../utils/ConstantFields";
function StatsCard({ title, stat, icon }) {
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor="orange.500"
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box my={"auto"} color="orange.500" alignContent={"center"}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Staticstics() {
  return (
    <Box maxW="l" mx={"auto"} px={8} mt={8} mb={16}>
      <Heading color="gray.700" fontSize={"3xl"}>
        We have served for
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 5, lg: 8 }}
        mt="2rem"
      >
        {statsData?.map((data, index) => (
          <StatsCard
            key={index}
            title={data?.title}
            stat={data?.stat}
            icon={data?.icon}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
