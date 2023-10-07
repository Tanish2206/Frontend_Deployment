import React from 'react';
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Stack,
  Text,
  Button,
  NumberInput,
  NumberInputField,
  Input,
} from '@chakra-ui/react';
import {
  designOption,
  designType,
  propertyOption,
  propertyType,
} from '../../utils/ConstantFields';

const FilterOptions = ({
  filterOptions,
  setFilterOptions,
  handleFilter,
  handleClearFilter,
}) => {
  const handleInputChange = (e) => {
    
    const { name, value } = e.target;
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
  };

  return (
    <Box
      width={{ base: "100%", md: "300px" }}
      bgGradient="linear(to-b, white, orange.200)"
      boxShadow="md"
      borderRadius="md"
      p={4}
      mb={2}
      mr={4}
    >
      <Stack spacing={4}>
        <Checkbox
          name="isFree"
          isChecked={filterOptions.isFree}
          onChange={handleCheckboxChange}
          fontWeight="bold"
          colorScheme="orange"
        >
          FREE
        </Checkbox>

        <Checkbox
          isChecked={filterOptions?.vastu}
          name="vastu"
          onChange={handleCheckboxChange}
          fontWeight="bold"
          colorScheme="orange"
        >
          Vaastu Certified
        </Checkbox>

        <FormControl>
          <FormLabel fontWeight="bold" color="orange.500">
            Design Category
          </FormLabel>
          <Select
            value={filterOptions?.designCategory}
            name="designCategory"
            onChange={handleInputChange}
            bg="white"
            color="orange.500"
            borderColor="orange.200"
            _focus={{ borderColor: "orange.500" }}
          >
          
            {designOption.map((item) => (
              // item.value !== 'Select Option' && ( 
              <option key={item.value} value={item.value}>
                {item.value}
              </option>
              
              // )
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel fontWeight="bold" color="orange.500">
            Design Type
          </FormLabel>
          <Select
            name="designType"
            value={filterOptions?.designType}
            onChange={handleInputChange}
            bg="white"
            color="orange.500"
            borderColor="orange.200"
            _focus={{ borderColor: "orange.500" }}
          >
            {designType
              .filter(
                (item) => item.designHead === filterOptions?.designCategory
              )
              .map((item) => (
                // item.value !== 'Select Option' && (
                <option key={item.id} value={item?.typeValue}>
                  {item.typeValue}
                </option>
                // )
              ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel fontWeight="bold" color="orange.500">
            Building Design
          </FormLabel>
          <Select
            value={filterOptions?.propertyCategory}
            name="propertyCategory"
            onChange={handleInputChange}
            bg="white"
            color="orange.500"
            borderColor="orange.200"
            _focus={{ borderColor: "orange.500" }}
          >
            {propertyOption?.map((item) => (
              // item.value !== 'Select Option' && (
              <option key={item.value} value={item.value}>
                {item.value}
              </option>
              // )
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel fontWeight="bold" color="orange.500">
            Building Type
          </FormLabel>
          <Select
            value={filterOptions?.propertyType}
            name="propertyType"
            onChange={handleInputChange}
            bg="white"
            color="orange.500"
            borderColor="orange.200"
            _focus={{ borderColor: "orange.500" }}
          >
            {propertyType
              .filter(
                (item) => item.designHead === filterOptions?.propertyCategory
              )
              .map((item) => (
                // item.value !== 'Select Option' && (
                <option key={item.id} value={item?.typeValue}>
                  {item.typeValue}
                </option>
                // )
              ))}
          </Select>
        </FormControl>

        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ md: "center" }}
          justify="space-between"
        >
          <FormControl flex="1" mr={{ base: 0, md: 4 }}>
            <FormLabel fontWeight="bold" color="orange.500">
              Width
            </FormLabel>
            <Select
              value={filterOptions?.width}
              name="width"
              onChange={handleInputChange}
              bg="white"
              color="orange.500"
              borderColor="orange.200"
              _focus={{ borderColor: "orange.500" }}
            >
              <option value="">Width</option>
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="15">15</option>
              <option value="18">18</option>
              <option value="20">20</option>
              <option value="22">22</option>
              <option value="25">25</option>
              <option value="27">27</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </Select>
          </FormControl>

          <FormControl flex="1">
            <FormLabel fontWeight="bold" color="orange.500">
              Length
            </FormLabel>
            <Select
              value={filterOptions?.length}
              name="length"
              onChange={handleInputChange}
              bg="white"
              color="orange.500"
              borderColor="orange.200"
              _focus={{ borderColor: "orange.500" }}
            >
              <option value="">Length</option>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="40">40</option>
              <option value="45">45</option>
              <option value="50">50</option>
              <option value="60">60</option>
              <option value="70">70</option>
            </Select>
          </FormControl>
        </Flex>

        <FormControl>
          <FormLabel fontWeight="bold" color="orange.500">
            Facing
          </FormLabel>
          <Select
            value={filterOptions.facing}
            name="facing"
            onChange={handleInputChange}
            bg="white"
            color="orange.500"
            borderColor="orange.200"
            _focus={{ borderColor: "orange.500" }}
          >
          <option value="">Select Facing</option>
            <option value="East">East Facing</option>
            <option value="West">West Facing</option>
            <option value="North">North Facing</option>
            <option value="South">South Facing</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="bold" color="orange.500">
            Number of Floors
          </FormLabel>
          <Input
            value={filterOptions?.numberOfFloors}
            placeholder="Enter number"
            name="numberOfFloors"
            onChange={handleInputChange}
            bg="white"
            color="orange.500"
            borderColor="orange.200"
            _focus={{ borderColor: "orange.500" }}
          />
        </FormControl>

        <Stack direction="row" mt={6} spacing={4}>
          <Button colorScheme="orange" onClick={handleFilter} flex="1">
            Apply Filter
          </Button>
          <Button colorScheme="gray" onClick={handleClearFilter} flex="1">
            Clear Filter
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default FilterOptions;
