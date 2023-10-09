import React, { useEffect, useState } from "react";
import {
  Text,
  Box,
  Flex,
  Spacer,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon, EditIcon } from "@chakra-ui/icons";
import secureLocalStorage from "react-secure-storage";
import AuthService from "../../utils/AuthService";

const PersonalInfo = () => {
  const [api, setApi] = useState(true);
  const [designer, setDesigner] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const designerId = secureLocalStorage.getItem("designerId");

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const specializations = ["Web Development", "Mobile Development", "UI/UX Design", "Data Science"];



  const userData = () => {
    if (designerId) {
      AuthService.getDesignerProfile(designerId)
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
  
  useEffect(() => {
    if (api) {
      userData();
    }
  }, [api, userData]);

 

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // You can implement logic to save the edited data here
    setIsEditing(false);
  };

  return (
    <Flex flexDir={{ base: "column", md: "row" }} p={4}>
      {/* Left Part */}
      <Box
        flex={{ base: "1", md: "2" }}
        bg="white"
        p={4}
        rounded="lg"
        shadow="md"
        mb={{ base: "4", md: "0" }}
      >
        <Text fontSize="xl" textAlign="center" mb="4" fontWeight="semibold">
          Personal Info
        </Text>
        <Flex flexDir={{ base: "column", md: "row" }}>
          <Box mb={{ base: "4", md: "0" }}>
            <Text>Name: {`${designer?.firstName} ${designer?.lastName}`}</Text>
            <Text>Phone: {designer?.mobile}</Text>
            <Text>Email: {designer?.email}</Text>
            <Text>Gender: {designer?.gender}</Text>
          </Box>
          <Spacer />
          <Box>
            {isEditing ? (
              <Button
                leftIcon={<EditIcon />}
                colorScheme="blue"
                size="sm"
                mb="2"
                onClick={handleSaveClick}
              >
                Save
              </Button>
            ) : (
              <Button
                leftIcon={<EditIcon />}
                colorScheme="blue"
                size="sm"
                mb="2"
                onClick={handleEditClick}
              >
                Edit
              </Button>
            )}
            <Text>Info: {designer?.about}</Text>
            <Text>Username: {designer?.username}</Text>
            {/* Specialization Dropdown */}
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<ChevronDownIcon />}
                variant="outline"
                colorScheme="gray"
                size="sm"
              />
              <MenuList bg="white" boxShadow="lg" p="2">
                {specializations?.map((specialization) => (
                  <MenuItem key={specialization}>{specialization}</MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>

      {/* Right Part */}
      <Box flex={{ base: "1", md: "1" }} bg="gray.100" p={4} rounded="lg" shadow="md">
        <Flex direction="column">
          <Text fontSize="xl" textAlign="center" mb="4" fontWeight="semibold">
            Set Your Work Schedule
          </Text>
          <Text textAlign="center" fontWeight="medium">
            Day Active
          </Text>
          <Flex justify="center" mt="2">
            <Box
              w="6px"
              bg="green.500"
              h="20px"
              mx="2"
              display="inline-block"
              verticalAlign="middle"
              rounded="full"
            />
            <Box
              w="6px"
              bg="gray.500"
              h="20px"
              mx="2"
              display="inline-block"
              verticalAlign="middle"
              rounded="full"
            />
          </Flex>
          <Flex justify="center" mt="2">
            {days?.map((day, index) => (
              <Box
                key={day}
                w="30px"
                h="30px"
                mx="1"
                rounded="full"
                bg={index === 6 ? "green.500" : "gray.500"}
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                fontSize="lg"
                fontWeight="bold"
              >
                {day[0]}
              </Box>
            ))}
          </Flex>
          <Text textAlign="center" mt="4" fontWeight="medium">
            Active Hours:
          </Text>
          <Box textAlign="center" mt="2" bg="green.500" color="white" rounded="md" p={2}>
            2:00 PM - 8:00 PM
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default PersonalInfo;
