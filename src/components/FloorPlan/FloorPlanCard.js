import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  HStack,
  Link,
} from "@chakra-ui/react";
import { BsArrowUpRight, BsHeartFill, BsHeart } from "react-icons/bs";

export default function FloorPlanCard({ cardData }) {
  const [liked, setLiked] = useState(false);

  return (
    <Box h="100%">
      <Center h="100%">
        <Flex
          h="100%"
          //   cursor="pointer"
          transition="all 0.4s ease"
          _hover={{
            transform: "translateY(-5px)",
            transition: "all 0.4s ease",
          }}
          borderRadius="md"
          overflow="hidden"
        >
          <Box
            w="xs"
            rounded={"sm"}
            my={5}
            mx={[5, 5]}
            overflow={"hidden"}
            bg="white"
            border={"1px"}
          >
            <Box h={"200px"} borderBottom={"1px"} borderColor="black">
              <Img
                src={cardData.img}
                roundedTop={"sm"}
                objectFit="cover"
                h="full"
                w="full"
                alt={"Blog Image"}
              />
            </Box>
            {/* <Box p={4}>
              <Box
                bg="black"
                display={"inline-block"}
                px={2}
                py={1}
                color="white"
                mb={2}
              >
                <Text fontSize={"xs"} fontWeight="medium">
                  Size: 25 x 55
                </Text>
              </Box>
              <Heading color={"black"} fontSize={"l"} noOfLines={1}>
                Plot area: 1500 Sqft
              </Heading>
              <Text color={"gray.500"} noOfLines={1}>
                Duplex
              </Text>
            </Box> */}
            <Box p={4}>
              <HStack alignContent={"left"}>
                <Flex
                  alignItems="right"
                  justifyContent={"space-between"}
                  w="full"
                >
                  <Text fontSize={"10px"} fontWeight="medium">
                    Dimension: 25 ft. x 55 ft.
                  </Text>
                  <Text fontSize={"10px"} fontWeight="medium">
                    Plot Area: 25 x 55
                  </Text>
                </Flex>
              </HStack>
              <HStack>
                <Flex
                alignContent={"left"}
                  justifyContent={"space-between"}
                  w="full"
                >
                  <Text fontSize={"10px"} fontWeight="medium">
                    Facing: East facing
                  </Text>
                  <Text fontSize={"10px"} fontWeight="medium">
                    Type: Duplex
                  </Text>
                </Flex>
              </HStack>
            </Box>
            <HStack borderTop={"1px"} color="black">
              <Flex
                p={4}
                alignItems="center"
                justifyContent={"space-between"}
                roundedBottom={"sm"}
                cursor={"pointer"}
                w="full"
              >
                <Link href={cardData.href}>
                  <Text fontSize={"md"} fontWeight={"semibold"}>
                    View more
                  </Text>
                </Link>
              </Flex>
              <Flex
                p={4}
                alignItems="center"
                justifyContent={"space-between"}
                roundedBottom={"sm"}
                borderLeft={"1px"}
                cursor="pointer"
                onClick={() => setLiked(!liked)}
              >
                {liked ? (
                  <BsHeartFill fill="red" fontSize={"24px"} />
                ) : (
                  <BsHeart fontSize={"24px"} />
                )}
              </Flex>
            </HStack>
          </Box>
        </Flex>
      </Center>
    </Box>
  );
}
