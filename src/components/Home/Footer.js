import React from "react";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { menuData } from "../../utils/ConstantFields";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const router = useRouter();
  const bgg = useColorModeValue('gray.50', 'gray.900'); 

  return (
    <Box bg="gray.50" color="gray.700">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          {menuData?.map((menu, index) => (
            <Stack key={menu?.id} align={"flex-start"}>
              <ListHeader>{menu?.header}</ListHeader>
              {menu?.items?.map((item, itemIndex) => (
                <React.Fragment key={itemIndex}>
                  {menu.header === "Product" ? (
                    <span>
                      {item}
                      <Tag
                        size={"sm"}
                        bg={bgg}
                        ml={2}
                        mt={1}
                        color={"white"}
                      >
                        Coming soon
                      </Tag>
                    </span>
                  ) : (
                    <Link
                      key={itemIndex}
                      href={menu?.href?.[itemIndex]}
                      textDecoration="none" // Add this line to remove underline
                    >
                      {item}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Image
            src="/logo.png"
            boxSize="50px"
            onClick={() => router.push("/")}
            style={{ cursor: "pointer" }}
          />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2023 Daji & Engineers LLP. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
