// DesktopSubNav.js
import { Box, Text, Link, Stack, Flex, Icon } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
const DesktopSubNav = ({ label, href, subLabel, title }) => {
  const Router = useRouter();
  const onHandleChange = (label, title) => {
    Router.push({
      pathname: "/designs",
      query: { name: label, data: title },
    });
  };
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("orange.50", "gray.900") }}
      onClick={() => onHandleChange(label, title)}
    >
      <Box display={"block"} p={2} rounded={"md"} _hover={{ bg: "orange.50" }}>
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "orange.400" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            _groupHover={{ color: "orange.400" }}
            fontWeight={500}
            onClick={()=>onHandleChange(label,title)}
            cursor='pointer'
          >
            <Icon color={"orange.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Box>
    </Link>
  );
};

export default DesktopSubNav;
