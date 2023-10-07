import { Box, Badge, Heading, Text, Table, Tbody, Tr, Td, Button, useBreakpointValue } from '@chakra-ui/react';
import { useCallback } from 'react';

const DesignSimple = ({ product, handleShowDetails, label,handleBuyNow }) => {
  const handleSingleDetails = useCallback(
    (data) => {
      handleShowDetails(data);
    },
    [handleShowDetails]
  );
  
  const isMobile = useBreakpointValue({ base: true, sm: false });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      mt={10}
      flexWrap="wrap"
    >
      <Box
        p={4}
        maxW={isMobile ? 'full' : '330px'}
        w={isMobile ? 'full' : '330px'}
        bg="white"
        boxShadow="xl"
        rounded="lg"
        pos="relative"
        zIndex={1}
        display="flex"
        flexDirection="column"
        height="fit-content"
      >
        <Box
          rounded="lg"
          mt={-8}
          pos="relative"
          height={isMobile ? 'auto' : '150px'}
          overflow="hidden"
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            bgImage={`url(${product?.designImagesUrls[0]})`}
            bgSize="cover"
            bgPosition="center"
            filter="blur(10px)"
            zIndex={-1}
            transition="all .3s ease"
            _groupHover={{
              filter: 'blur(15px)',
            }}
          />
          <Box
            as="img"
            rounded="lg"
            height={isMobile ? 'auto' : '150px'}
            width="330px"
            cursor="pointer"
            objectFit="cover"
            src={product?.designImagesUrls[0]}
            alt="Not-Found"
            onClick={() => handleSingleDetails(product)}
          />
        </Box>
        <Box pt={4} pb={6} align="flex-start" spacing={2}>
          <Badge
            borderRadius="full"
            px={2}
            colorScheme="orange"
            fontWeight={500}
            textTransform="uppercase"
            fontSize="xs"
          >
            {label ? label : product?.designCategory}
          </Badge>
          <Heading fontSize={isMobile ? 'sm' : 'md'} fontFamily="body" fontWeight={500} mt={2}>
            {product?.name}
          </Heading>
          <Table variant="simple" colorScheme="teal" size={isMobile ? 'xs' : 'sm'} mt={4}>
            <Tbody>
              <Tr>
                <Td fontWeight={500}>Plot Area:</Td>
                <Td>{product?.plotArea}</Td>
              </Tr>
              <Tr>
                <Td fontWeight={500}>Facing:</Td>
                <Td>{product?.facing}</Td>
              </Tr>
            </Tbody>
          </Table>
          <Box display="flex" alignItems="center" mt={4}>
            <Text
              fontWeight={800}
              fontSize={isMobile ? 'sm' : 'lg'}
              color={product?.isFree ? 'green.300' : 'red.300'}
            >
              {product?.isFree ? 'FREE' : `₹ ${product?.amount}`}
            </Text>
            {product?.originalPrice && (
              <Text textDecoration="line-through" color="gray.600" fontSize={isMobile ? 'xs' : 'sm'} ml={2}>
                {product?.originalPrice}
              </Text>
            )}
          </Box>
          <Button
            // colorScheme="teal"
            size={isMobile ? 'sm' : 'md'}
            onClick={() => handleSingleDetails(product)}
            mt={6}
            width="100%"
            bg={"orange.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "grey.500",
            }}
          >
            Show Details
          </Button>
          {!product?.isFree &&
          <Button
            colorScheme="teal"
            size={isMobile ? 'sm' : 'md'}
            onClick={() => handleBuyNow(product)}
            mt={2}
            width="100%"
            variant="outline"
            borderColor={'orange.400'}
            color={'orange.400'}
            _hover={{
              bg: "grey.500",
            }}
          >
            Buy Now
          </Button>
          }
        </Box>
      </Box>
    </Box>
  );
};

export default DesignSimple;
