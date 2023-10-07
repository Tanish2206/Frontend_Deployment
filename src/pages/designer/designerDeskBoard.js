"use client";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import {
  IconButton,
  Avatar,
  Box,
  CloseButton, 
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  Select,
  Spacer,
  Heading,
  keyframes, 
  Tooltip,
  Square
} from "@chakra-ui/react";

import { FiMenu, FiBell, FiChevronDown ,FiCheckCircle, FiXCircle} from "react-icons/fi";

import { LinkItemsD } from "../../utils/ConstantFields";

import secureLocalStorage from "react-secure-storage";
import AuthService from "@/Utils/AuthService";

import Deskboard from "../../components/Designer/Deskborad";
import PersonalInfo from "../../components/Designer/PersonalInfo";

export default function SidebarWithHeader() {
  const designerId = secureLocalStorage.getItem("designerId");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedComponent, setSelectedComponent] = useState("DeskBoard");
  const [designer, setDesigner] = useState({});
  const [api, setApi] = useState(true);
  const router = useRouter();

  const handleLinkItemClick = (name) => {
    setSelectedComponent(name);
    // router.push(`/${name.toLowerCase()}`);
  };

  const isActiveLink = (name) => {
    return selectedComponent === name;
  };

  const handleHomePage = () => {
    // router.push('/')
  };
  function handleProfile(e) {
    if (e?.target?.innerHTML === "profile") {
      setSelectedComponent(e?.target?.innerHTML);
      return;
    } else {
      secureLocalStorage.clear();
      router.push("/");
    }
  }

  useEffect(() => {
    if (api) {
      userData();
    }
  }, [api]);

  const userData = () => {
    if (storedId) {
      AuthService.getDesignerProfile(designerId 
        )
        .then((response) => {
          if (response.status === 200) {
           
            setDesigner(response?.data?.response_data);
            setApi(false);
          } else {
            // Handle error
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.50", "gray.800")}>
      <SidebarContent
        onClose={onClose}
        display={{ base: "none", md: "block" }}
        handleLinkItemClick={handleLinkItemClick}
        isActiveLink={isActiveLink}
        handleHomePage={handleHomePage} // Pass handleHomePage to SidebarContent
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent
            onClose={onClose}
            handleLinkItemClick={handleLinkItemClick}
            isActiveLink={isActiveLink}
            handleHomePage={handleHomePage} // Pass handleHomePage to SidebarContent
          />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} onhandleProfile={handleProfile} />
      <Box ml={{ base: 0, md: 60 }} p="4">
      {selectedComponent === "DeskBoard" && <Deskboard />}
      {selectedComponent === "PerSonal Info" && <PersonalInfo />}
      </Box>
    </Box>
  );
}







const SidebarContent = ({
  handleLinkItemClick,
  isActiveLink,
  onClose,
  handleHomePage,
  ...rest
}) => {
  const [selectedStatus, setSelectedStatus] = useState('active');

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const iconColor = useColorModeValue('green.500', 'green.300');
 
    const activeColor = 'green.500'
    const inactiveColor = 'gray.400'
    const ringScaleMin = 0.33
    const ringScaleMax = 0.66
  
    const pulseRing = keyframes`
      0% {
        transform: scale(${ringScaleMin});
      }
      30% {
        transform: scale(${ringScaleMax});
      }
      40%, 50% {
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    `
  
    const pulseDot = keyframes`
    0% {
      transform: scale(0.9);
    }
    25% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(0.9);
    }
    `
  
  
  return (
    <Box
      transition="0.3s ease"
      bg="primaryColor"
      borderRight="1px"
      borderRightColor="gray.200"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" justifyContent="space-between" px="4">
        {/* Logo and Profile */}
        <Flex
          marginTop={6}
          shadow="lg"
          bg="gray.100"
          p="2"
          w={400}
          borderRadius="lg"
          justifyContent="center"
        >
          <Box marginTop={3}>
          <Image
          src="/imageHouse.jpg"
          borderRadius={50}
          alt="Logo"
          h={10}
          w={10}
          ml={2}
          onClick={handleHomePage}
          cursor="pointer"
        />
          </Box>
          <Spacer />
          <Box>
            <Text fontSize="md" color="blueviolet">
              Vishal Rathore
            </Text>

            <Box mt="4">
              <Flex alignItems="center">
                <Tooltip label={`Status: ${selectedStatus}`} textTransform="capitalize">
                  <Box
                    as="div"
                    h="24px"
                    w="24px"
                    position="relative"
                    bgColor={selectedStatus === 'active' ? 'green.500' : 'gray.400'}
                    borderRadius="50%"
                    mr="2"
                    _before={
                      selectedStatus === 'active'
                        ? {
                             content: "''",
                             position: 'relative',
                             display: 'block',
                              width: '300%',
                              height: '300%',
                              marginLeft: '-100%',
                              marginTop: '-110%',
                              borderRadius: '50%',
                            bgColor: 'green.500',
                            animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                          }
                        : null
                    }
                    _after={
                      selectedStatus === 'active'
                        ? {
                          animation: `2.25s ${pulseDot} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                          }
                        : null
                    }
                    transition="background-color 0.3s ease"
                  />
                </Tooltip>
                <Select border="none" value={selectedStatus} onChange={handleStatusChange}>
                  <option value="active">
                    Active <FiCheckCircle color={iconColor} />
                  </option>
                  <option value="inactive">
                    Inactive <FiXCircle color={iconColor} />
                  </option>
                </Select>
              </Flex>
            </Box>
          </Box>

          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
      </Flex>

      {/* Total Earning */}
      <Flex
        marginTop={6}
        shadow="lg"
        bg="orange.500"
        p="2"
        w={200}
        borderRadius="lg"
        justifyContent="center"
        ml={5}
      >
           <Box>
          <Text fontSize="xl" color="white">
            Total Earning
          </Text>
          <Heading size="lg" color="whiteAlpha.900" textAlign="center">
            ₹ 20
          </Heading>
        </Box>
      </Flex>

      {/* Navigation Items */}
      <VStack spacing="1" mt="6" alignItems="stretch">
        {LinkItemsD?.map((link) => (
          <NavItem
          key={link?.id}
          icon={link?.icon}
          onClick={() => handleLinkItemClick(link?.name)}
          isActive={isActiveLink(link?.name)}
          >
            {link?.name}
          </NavItem>
        ))}
      </VStack>
    </Box>
  );
};





const NavItem = ({ icon, children, isActive, ...rest }) => {
  const color = isActive ? "orange.500" : "gray.500";
  const bgColor = isActive ? "orange.100" : undefined;

  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "orange.50",
          color: "orange.500",
        }}
        bg={bgColor}
        color={color}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "orange.500",
            }}
            as={icon}
          />
        )}
        <Text fontWeight={isActive ? "bold" : "normal"} fontSize="sm">
          {children}
        </Text>
      </Flex>
    </Link>
  );
};


const MobileNav = ({ onOpen, onhandleProfile, ...rest }) => {
  const router = useRouter(); // Import and use useRouter here

  const handleProfile = (e) => {
    if (e?.target?.innerHTML === "profile") {
      onhandleProfile(e); // Call the original onhandleProfile function
    } else {
      secureLocalStorage.clear();
      router.push("/");
    }
  };

  return (  
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.800")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.600")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Flex alignItems="center">
        <Image
          src="/logo.png"
          boxSize="30px"
          mr="2"
          onClick={() => router.push("/")}   
          // Use router.push for navigation
          style={{ cursor: "pointer" }}
        />
      </Flex>

      <HStack spacing={{ base: "0", md: "6" }}>
        <Menu>
          <MenuButton
            as={IconButton}
            variant="ghost"
            aria-label="options"
            icon={<Icon as={FiChevronDown} />}
          />
          <MenuList onClick={handleProfile}>
            <MenuItem>profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};




