import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const ClientForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box maxW="600px" m="auto" p={4} bg="gray.100" borderRadius="md">
      <Heading as="h1" mb={4} textAlign="center">Client Requirements</Heading>

      <form onSubmit={handleSubmit}>
        {/* Client Name */}
        <FormControl id="clientName" mb={4}>
          <FormLabel>Client Name</FormLabel>
          <Input type="text" required variant="filled" bg="white" _hover={{ bg: 'gray.200' }} />
        </FormControl>

        {/* Client Contact No. */}
        <FormControl id="clientContactNo" mb={4}>
          <FormLabel>Client Contact No.</FormLabel>
          <Input type="tel" required variant="filled" bg="white" _hover={{ bg: 'gray.200' }} />
        </FormControl>

        {/* Address */}
        <FormControl id="address" mb={4}>
          <FormLabel>Address</FormLabel>
          <Textarea required variant="filled" bg="white" _hover={{ bg: 'gray.200' }} />
        </FormControl>

        {/* Site Picture */}
        <FormControl id="sitePicture" mb={4}>
          <FormLabel>Site Picture (Upload)</FormLabel>
          <Button variant="outline" bg="white" _hover={{ bg: 'gray.200' }}>
            Upload Picture
          </Button>
        </FormControl>

        {/* Site Video */}
        <FormControl id="siteVideo" mb={4}>
          <FormLabel>Site Video (Upload)</FormLabel>
          <Button variant="outline" bg="white" _hover={{ bg: 'gray.200' }}>
            Upload Video
          </Button>
        </FormControl>

        {/* Client Date/Ref */}
        <FormControl id="clientDateRef" mb={4}>
          <FormLabel>Client Date/Ref</FormLabel>
          <Input type="text" variant="filled" bg="white" _hover={{ bg: 'gray.200' }} />
        </FormControl>

        {/* Width */}
        <FormControl id="width" mb={4}>
          <FormLabel>Width</FormLabel>
          <Input type="number" required variant="filled" bg="white" _hover={{ bg: 'gray.200' }} />
        </FormControl>

        {/* Length */}
        <FormControl id="length" mb={4}>
          <FormLabel>Length</FormLabel>
          <Input type="number" required variant="filled" bg="white" _hover={{ bg: 'gray.200' }} />
        </FormControl>

        {/* Number of Floors */}
        <FormControl id="numFloors" mb={4}>
          <FormLabel>Number of Floors</FormLabel>
          <Input type="number" required variant="filled" bg="white" _hover={{ bg: 'gray.200' }} />
        </FormControl>

        {/* Submit Button */}
        <Button type="submit" colorScheme="blue" size="lg" w="100%">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ClientForm;
