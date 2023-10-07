// MobileNavItem.js
import { Stack, Flex, Text, Link, Icon, Collapse } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDisclosure, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  const Router = useRouter();
  const onhandleClick = () => {
    Router.push({
      pathname: "/designs",
    });
  };
  const onHandleChange = (label, title) => {
    Router.push({
      pathname: "/designs",
      query: { name: label, data: title },
    });
  };
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
          onClick={() => onhandleClick}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children?.map((child, index) => (
                <Link
                  key={child?.label}
                  py={2}
                  href={child?.href}
                  onClick={() => onHandleChange(child?.label, child?.title)}
                  cursor="pointer"
                >
                  {child.label}
                </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default MobileNavItem;
