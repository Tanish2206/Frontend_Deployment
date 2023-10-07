import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,

  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Alert,
  AlertIcon,
  CloseButton,
  SlideFade,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import AuthService from "../../utils/AuthService";
import secureLocalStorage from "react-secure-storage";
import { useEffect } from "react";
import TosterShow from "../Common/ToseterMessage/tosterMessage";
import { toast } from 'react-toastify';
import { useRouter } from "next/router";
export default function UserProfile({ userProfileData }) {
  const [profileData, setProfileData] = useState(userProfileData);
  const [isEditSuccess, setIsEditSuccess] = useState(false);

  const userId = secureLocalStorage.getItem("id");
  const router=useRouter();
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  
useEffect(()=>{
  setProfileData(userProfileData)
},[userProfileData])


  const handleSubmit = () => {
    // Handle form submission here
    AuthService.editProfile(userId,profileData).then((Response)=>{
      
      if(Response?.status ===200){
        toast.success("Profile Update Successfully");
        setIsEditSuccess(true);
        router?.back();
      }
      else{
        toast.error("Profile can't updated");
        setIsEditSuccess(true);
      }
      
    }).catch((error)=>{
      toast.error(error);
    })
  };

  useEffect(() => {
    if (isEditSuccess) {
      const timer = setTimeout(() => {
        setIsEditSuccess(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isEditSuccess]);

  return (
    <>
    <TosterShow/>
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      // bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        // bg={useColorModeValue("gray.100", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading
          lineHeight={1.1}
          fontSize={{ base: "2xl", sm: "3xl" }}
          textAlign="center"
        >
          User Profile
        </Heading>

        <FormControl id="userName">
          <Stack>
            <Center>
              <Avatar size="xl" src={profileData?.displayPicture}>
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon />}
                />
              </Avatar>
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="firstName" isRequired>
          <FormLabel>First name</FormLabel>
          <Input
            placeholder="First Name"
            _placeholder={{ color: "gray.500" }}
            type="text"
            name="firstName"
            value={profileData?.firstName}
            onChange={handleOnChange}
          />
        </FormControl>
        <FormControl id="lastName" isRequired>
          <FormLabel>Last name</FormLabel>
          <Input
            placeholder="Last Name"
            _placeholder={{ color: "gray.500" }}
            type="text"
            name="lastName"
            value={profileData?.lastName}
            onChange={handleOnChange}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
            name="email"
            value={profileData?.email}
            onChange={handleOnChange}
          />
        </FormControl>
        <FormControl id="mobile" isRequired>
          <FormLabel>Mobile</FormLabel>
          <Input
            placeholder="Mobile"
            _placeholder={{ color: "gray.500" }}
            type="number"
            name="mobile"
            disabled
            value={profileData?.mobile}
            onChange={handleOnChange}
          />
        </FormControl>
        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            bg={"orange.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "grey.500",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button
            bg={"red.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "white.500",
            }}
          >
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Flex>
    <SlideFade in={isEditSuccess} offsetY="-20px"
    position="absolute"
    >
          <Alert status="success" my={4}>
            <AlertIcon />
            Edit Successfully
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={() => setIsEditSuccess(false)}
            />
          </Alert>
        </SlideFade>
    </>
  );
}
