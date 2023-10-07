import React, { useState, useEffect,useRef } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Select,
  Avatar,
  AvatarBadge,
  IconButton,
  Alert,
  AlertIcon,
  CloseButton,
  SlideFade,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

import AuthService from "../../utils/AuthService";
import secureLocalStorage from "react-secure-storage";
import { useToast } from '@chakra-ui/react';
function DesignerProfile({ DesignerData }) {
  const toast = useToast();
  const [profileData, setProfileData] = useState(DesignerData);
  const [isEditSuccess, setIsEditSuccess] = useState(false);
const [imageProfile,setImageProfile]=useState();
  const designerId = secureLocalStorage.getItem("designerId");
  const fileInputRef = useRef(null); // Ref to hold the file input reference

  const handleImageClick = () => {
    // Programmatically trigger the click event of the file input
    fileInputRef.current.click();
  };

   const handleImageUpload = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      // Perform upload logic here
      // Update the profile picture URL in the profileData state
      setImageProfile({
        profilePhotoUrl:URL.createObjectURL(file),
      })
      setProfileData((prevValue) => ({
        ...prevValue,
       profilePhotoUrl:file,
      }));
    }
  };
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  useEffect(() => {
    setProfileData(DesignerData);
  }, [DesignerData]);

  const handleSubmit = () => {
    // Handle form submission here
    const form = new FormData();
    Object.entries(profileData).forEach(([key, value]) => {
    
        form.append(key, value);
      
    });
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    AuthService.updateDesigner(designerId, form,config)
  
      .then((res) => {
        if(res?.status===200){
          toast({
            title: 'Media.',
            position: 'top-right',
            description: "Edit Profile successfully",
            status: 'success',
            duration: 3000,
            isClosable: true,
          }); 
        }else{
          toast({
            title: 'Media.',
            position: 'top-right',
            description: "Can't edit profile",
            status: 'error',
            duration: 3000,
            isClosable: true,
          }); 
        }
       
      })
      .catch((error) => {
        // Handle error
        toast({
          title: 'Media.',
          position: 'top-right',
          description: "Can't edit profile",
          status: 'error',
          duration: 3000,
          isClosable: true,
        }); 
      });
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
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"white"} // White background
    >
      <Flex
        direction="column"
        w={{ base: "full", md: "md" }}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
        bg={"white"} // Background color for the form container
      >
        <Heading
          lineHeight={1.1}
          fontSize={{ base: "2xl", sm: "3xl" }}
          textAlign="center"
          mb={6}
        >
          Designer Profile
        </Heading>
        <FormControl id="userName" mb={6}>
        <Flex justify="center">
          <Avatar size="xl" src={imageProfile?.profilePhotoUrl ?imageProfile?.profilePhotoUrl : profileData?.profilePhotoUrl}>
            <AvatarBadge
              as={IconButton}
              size="sm"
              rounded="full"
              top="-10px"
              colorScheme="orange"
              aria-label="browse Image"
              icon={<EditIcon/>}
              onClick={handleImageClick} // Changed the click handler
            />
          </Avatar>
          <Input
            type="file"
            id="profilePhoto"
            ref={fileInputRef} // Attach the ref to the input
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
        </Flex>
      </FormControl>

        <Stack spacing={4}>
          <Flex justify="space-between">
            {/* First Name */}
            <FormControl id="firstName" isRequired flex={1} mr={2}>
              <FormLabel>First Name</FormLabel>
              <Input
                placeholder="Enter your first name"
                name="firstName"
                value={profileData?.firstName}
                onChange={handleOnChange}
                variant="filled" // Filled variant
              />
            </FormControl>

            {/* Last Name */}
            <FormControl id="lastName" isRequired flex={1} ml={2}>
              <FormLabel>Last Name</FormLabel>
              <Input
                placeholder="Enter your last name"
                name="lastName"
                value={profileData?.lastName}
                onChange={handleOnChange}
                variant="filled" // Filled variant
              />
            </FormControl>
          </Flex>

          {/* Email */}
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="Enter your email"
              type="email"
              name="email"
              value={profileData?.email}
              onChange={handleOnChange}
              variant="filled" // Filled variant
            />
          </FormControl>

          {/* Mobile */}
          <FormControl id="mobile" isRequired>
            <FormLabel>Mobile</FormLabel>
            <Input
              placeholder="Enter your mobile number"
              type="number"
              name="mobile"
              disabled
              value={profileData?.mobile}
              onChange={handleOnChange}
              variant="filled" // Filled variant
            />
          </FormControl>

          <Flex justify="space-between">
            {/* Gender */}
            <FormControl id="gender" isRequired flex={1} mr={2}>
              <FormLabel>Gender</FormLabel>
              <Select
                placeholder="Select gender"
                name="gender"
                value={profileData?.gender}
                onChange={handleOnChange}
                variant="filled" // Filled variant
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Select>
            </FormControl>

            {/* Date of Birth */}
            <FormControl id="dateOfBirth" isRequired flex={1} ml={2}>
              <FormLabel>Date of Birth</FormLabel>
              <Input
                placeholder="Select your date of birth"
                type="date"
                name="dateOfBirth"
                value={profileData?.dateOfBirth}
                onChange={handleOnChange}
                variant="filled" // Filled variant
              />
            </FormControl>
          </Flex>

          {/* Address */}
          <FormControl id="address" isRequired>
            <FormLabel>Address</FormLabel>
            <Input
              placeholder="Enter your address"
              type="text"
              name="address"
              value={profileData?.address}
              onChange={handleOnChange}
              variant="filled" // Filled variant
            />
          </FormControl>

          {/* Country */}
          <FormControl id="country" isRequired>
            <FormLabel>Country</FormLabel>
            <Input
              placeholder="Enter your country"
              type="text"
              name="country"
              value={profileData?.country}
              onChange={handleOnChange}
              variant="filled" // Filled variant
            />
          </FormControl>

          {/* City */}
          <FormControl id="city" isRequired>
            <FormLabel>City</FormLabel>
            <Input
              placeholder="Enter your city"
              type="text"
              name="city"
              value={profileData?.city}
              onChange={handleOnChange}
              variant="filled" // Filled variant
            />
          </FormControl>

          {/* State */}
          <FormControl id="state" isRequired>
            <FormLabel>State</FormLabel>
            <Input
              placeholder="Enter your state"
              type="text"
              name="state"
              value={profileData?.state}
              onChange={handleOnChange}
              variant="filled" // Filled variant
            />
          </FormControl>

          {/* About */}
          <FormControl id="about" isRequired>
            <FormLabel>About</FormLabel>
            <Input
              placeholder="Tell us about yourself"
              type="text"
              name="about"
              value={profileData?.about}
              onChange={handleOnChange}
              variant="filled" // Filled variant
            />
          </FormControl>

          {/* Buttons */}
          <Flex justify="space-between">
            <Button colorScheme="orange" size="lg" onClick={handleSubmit}>
              Submit
            </Button>
            <Button colorScheme="red" size="lg">
              Cancel
            </Button>
          </Flex>
        </Stack>

        {/* Success Alert */}
        <SlideFade in={isEditSuccess} offsetY="-20px" position="absolute">
          <Alert status="success" my={4}>
            <AlertIcon />
            Edit Successful
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={() => setIsEditSuccess(false)}
            />
          </Alert>
        </SlideFade>
      </Flex>
    </Flex>
  );
}

export default DesignerProfile;
