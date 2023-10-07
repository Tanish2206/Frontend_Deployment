import { useState } from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  GridItem,
  Heading,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import FloorPlanCard from "./FloorPlanCard";
import { designs } from "../../utils/ConstantFields"; 
// Sample floor plans data (replace with actual data)
const floorPlansData = [
  {
    id: 1,
    imageUrl: "/design1.jpg",
    name: "Modern Loft",
    size: "900 sq. ft.",
  },
  {
    id: 2,
    imageUrl: "/design2.jpg",
    name: "Traditional Home",
    size: "1500 sq. ft.",
  },
  // Add more floor plan objects as needed
];




const FloorPlansPage = () => {
  const [filters, setFilters] = useState({
    minSize: 500,
    maxSize: 2000,
    bedrooms: [],
    bathrooms: [],
    // Add more filter states as needed
  });

  // Handler for updating filters
  const handleFilterChange = (filter, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: value,
    }));
  };

  // Apply filters to floor plans
  const filteredFloorPlans = floorPlansData?.filter((floorPlan) => {
    // Apply size filters
    const { minSize, maxSize } = filters;
    const size = parseFloat(floorPlan.size);

    if (size < minSize || size > maxSize) {
      return false;
    }

    // Apply other filters as needed

    return true;
  });

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={8}>
        Floor Plans
      </Heading>

      <Flex mb={4}>
        <Input
          placeholder="Search by name"
          mr={4}
          w="300px"
          onChange={(event) => handleFilterChange("search", event.target.value)}
        />

        <Select
          placeholder="Select a style"
          w="200px"
          mr={4}
          onChange={(event) => handleFilterChange("style", event.target.value)}
        >
          <option value="modern">Modern</option>
          <option value="traditional">Traditional</option>
          <option value="farmhouse">Farmhouse</option>
          {/* Add more style options as needed */}
        </Select>

        {/* Add more filter inputs as needed */}
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing={5} me="4rem">
          {designs?.map((elem) => (
            <FloorPlanCard key={elem?.id} cardData={elem} />
          ))}
        </SimpleGrid>
    </Box>
  );
};

export default FloorPlansPage;
