import React from "react";
import { VStack, Box, Text, Flex, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { singleDesignInfo ,designFields} from "../../utils/ConstantFields";
function SingleDesignInfo({ showProject }) {
  const isMobile = useBreakpointValue({ base: true, sm: false });

  const fadeInVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div initial="initial" animate="animate" variants={fadeInVariants}>
      <VStack align="stretch" spacing={4} bg="gray.100" p={4} borderRadius="lg">
        <motion.div whilehover={{ scale: 1.05 }}>
          <Box
            borderWidth={1}
            borderRadius="lg"
            p={4}
            bg="white"
            boxShadow="md"
          >
            <Text
              fontWeight="bold"
              fontSize={isMobile ? "md" : "xl"}
              mb={2}
              color="purple.500"
              textTransform="uppercase"
            >
              Title:
            </Text>
            <Text fontSize={isMobile ? "md" : "lg"}>{showProject?.title}</Text>
          </Box>
        </motion.div>
        <motion.div whilehover={{ scale: 1.05 }}>
          <Box
            borderWidth={1}
            borderRadius="lg"
            p={4}
            bg="white"
            boxShadow="md"
          >
            <Text
              fontWeight="bold"
              fontSize={isMobile ? "md" : "xl"}
              mb={2}
              color="teal.500"
              textTransform="uppercase"
            >
              Description:
            </Text>
            <Text fontSize={isMobile ? "md" : "lg"}>
              {showProject?.description}
            </Text>
          </Box>
        </motion.div>
        <motion.div whilehover={{ scale: 1.05 }}>
          <Box
            borderWidth={1}
            borderRadius="lg"
            p={4}
            bg="white"
            boxShadow="md"
          >
            <Text
              fontWeight="bold"
              fontSize={isMobile ? "md" : "xl"}
              mb={2}
              color="blue.500"
              textTransform="uppercase"
            >
              Details:
            </Text>
           
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold">Construction Year:</Text>
              <Text>{showProject?.constructionYear}</Text>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold">Design Category:</Text>
              <Text>{showProject?.designCategory}</Text>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold">Design Type:</Text>
              <Text>{showProject?.designType}</Text>
            </Flex>
           
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold">Facing:</Text>
              <Text>{showProject?.facing}</Text>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold">Garage Capacity:</Text>
              <Text>{showProject?.garageCapacity}</Text>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold">Is Free:</Text>
              <Text>{showProject?.isFree ? "Free" : "Paid"}</Text>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold">Number of Floors:</Text>
              <Text>{showProject?.numberOfFloors}</Text>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold">Plot Area:</Text>
              <Text>{showProject?.plotArea}</Text>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold">Property Category:</Text>
              <Text>{showProject?.propertyCategory}</Text>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold">Property Type:</Text>
              <Text>{showProject?.propertyType}</Text>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold">Unit Type:</Text>
              <Text>{showProject?.unitType}</Text>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold">Vastu:</Text>
              <Text>{showProject?.vastu ? "YES" : "NO"}</Text>
            </Flex>
            {designFields?.map((elm)=>{
              return(
              elm?.option === showProject?.propertyCategory ?
              <Flex justifyContent="space-between" alignItems="center">
                  <Text fontWeight="bold">{elm?.label}:</Text>
                  <Text>{showProject[elm?.name]}</Text>
              </Flex> :
              elm?.optionType === showProject?.propertyType?
              <Flex justifyContent="space-between" alignItems="center"> 
              <Text fontWeight="bold">{elm?.label}:</Text>
              <Text>{showProject[elm?.name]}</Text>
          </Flex> :""
  )})} 
            
          </Box>
        </motion.div>
      </VStack>
    </motion.div>
  );
}

export default SingleDesignInfo;
