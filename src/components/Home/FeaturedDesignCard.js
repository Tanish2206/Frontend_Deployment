import { Center, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
export default function FeaturedDesignCards({ elem }) {

const router=useRouter();
  const handleRedirect=()=>{

    router?.push('/designs');
  }
  return (
    <Center h="14.3rem" marginX="8px">
      <Stack
        borderRadius="lg"
        
        w={{ sm: "100%", md: "580px" }}
        height={{ sm: "100%", md: "13.5rem" }}
        direction={{ base: "column", md: "row" }}
        padding={0}
      >
        <Flex
          height="100%"
          w="100%"
          cursor="pointer"
          transition="all 0.4s ease"
          _hover={{
            transform: "translateY(-3px)",
            boxShadow:
              "0px 4px 16px rgba(17, 17, 26, 0.2), 0px 2px 12px rgba(17, 17, 26, 0.3)",
            transition: "all 0.4s ease",
          }}
          borderRadius="md"
          overflow="hidden"
          position="relative"
        >
          <Image
            //src={elem?.siteImagesUrls[0]}
            src={elem?.image}
            objectFit="cover"
            width="100%"
            height="100%"
            onClick={handleRedirect}
          />

          <Flex
            position="absolute"
            bottom="0"
            left="0"
            width="100%"
            padding="8px" // Add padding to the text
            background="linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"
          >
            <Text
              color="white"
              fontWeight="bold"
              fontSize="24px"
              width="100%" // Ensure the text takes up the full width of the container
            >
              {elem?.title}
            </Text>
          </Flex>
        </Flex>
      </Stack>
    </Center>
  );
}
