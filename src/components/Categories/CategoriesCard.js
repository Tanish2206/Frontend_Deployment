import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  Link
} from "@chakra-ui/react";

export default function CategoriesCard({ cardData }) {
  return (
    <Box h="100%">
      <Center my={2} h="100%">
        <Flex
          h="100%"
          cursor="pointer"
          transition="all 0.4s ease"
          _hover={{
            transform: "translateY(-5px)",
            transition: "all 0.4s ease",
          }}
          borderRadius="md"
          overflow="hidden"
        >
            <Link href={cardData.href} _hover={{ textDecoration: "none" }}>
          <Box
            w="xs"
            rounded={"sm"}
            my={5}
            mx={[5, 5]}
            overflow={"hidden"}
            bg="white"
            h="100%"
          >
            <Box h={"200px"}>
              <Img
                src={cardData.img}
                roundedTop={"sm"}
                objectFit="cover"
                h="full"
                w="full"
                alt={"Blog Image"}
              />
            </Box>
            <Box py={4}>
              <Heading color={"black"} fontSize={"l"} noOfLines={1}>
                {cardData.heading}
              </Heading>
              <Text color={"gray.500"} noOfLines={2}>
                {cardData.description}
              </Text>
            </Box>
          </Box>
          </Link>
        </Flex>
      </Center>
    </Box>
  );
}
