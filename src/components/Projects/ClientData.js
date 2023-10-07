import { Flex, Box, Text, Image } from "@chakra-ui/react";

const ClientDetails = () => {
  const client = {
    name: "John Doe",
    contactNumber: "+1 1234567890",
    dateRef: "2023-06-01",
    factingSides: 4,
    width: "10 ft",
    length: "20 ft",
    floor: "Ground Floor",
    otherRequirements: "Lorem ipsum dolor sit amet...",
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="stretch"
      justify="center"
      bg="teal.500"
      color="white"
      p={{ base: 4, md: 8 }}
    >
      <Box flex="1" mb={4}>
        <Image
          src="/design1.jpg"
          alt="Client Image"
          w="100%"
          h="auto"
          maxH="400px" // Adjust the max height here
          objectFit="contain" // Adjust the object fit here
        />
      </Box>
      <Box
        bg="gray.700"
        p={4}
        flex="1"
        minH="400px"
        ml={{ base: 0, md: 4 }}
      >
        <Text fontWeight="bold" fontSize="2xl" mb={4}>
          Client Details
        </Text>
        <Text fontSize="lg" mb={2}>
          Name: {client.name}
        </Text>
        <Text fontSize="lg" mb={2}>
          Contact Number: {client.contactNumber}
        </Text>
        <Text fontSize="lg" mb={2}>
          Date/Ref: {client.dateRef}
        </Text>
        <Text fontSize="lg" mb={2}>
          Factoring/Sides: {client.factingSides}
        </Text>
        <Text fontSize="lg" mb={2}>
          Width: {client.width}
        </Text>
        <Text fontSize="lg" mb={2}>
          Length: {client.length}
        </Text>
        <Text fontSize="lg" mb={2}>
          Floor: {client.floor}
        </Text>
        <Text fontSize="lg" mb={2}>
          Other Requirements: {client.otherRequirements}
        </Text>
      </Box>
    </Flex>
  );
};

export default ClientDetails;
