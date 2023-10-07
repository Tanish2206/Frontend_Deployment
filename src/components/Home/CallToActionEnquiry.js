import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 0px 0px orange;
  }
  50% {
    box-shadow: 0 0 20px 10px orange;
  }
  100% {
    box-shadow: 0 0 0px 0px orange;
  }
`;
export default function CallToActionWithIllustration() {
  
  return (
    <Container maxW={"5xl"}>
      <Stack textAlign={"center"} align={"center"} spacing={8} my={8}>
        <Heading fontWeight={"bold"} fontSize={"4xl"} lineHeight={"110%"}>
          From Concept{" "}
          <Text as={"span"} color={"orange.400"}>
            to Completion
          </Text>
        </Heading>
        <Text fontSize={"xl"} color={"gray.700"} maxW={"4xl"}>
          From conceptualization to the final touch, we guide you through every
          step of the journey. Experience seamless collaboration, innovative
          solutions, and exceptional results, all under one roof.
        </Text>
        <Link href="/enquire">
        <Button
          rounded={"full"}
          px={6}
          colorScheme={"green"}
          bg={"green.400"}
          _hover={{ bg: "green.500" }}
          href={"/enquire"}
          animation={`${glowAnimation} 2s infinite`}        
          >
          Enquire Now
        </Button>
        </Link>
      </Stack>
    </Container>
  );
}
