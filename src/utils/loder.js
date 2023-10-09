import { Box, CircularProgress } from '@chakra-ui/react';
import { Image, Progress, VStack, Text, HStack } from '@chakra-ui/react';
const Loader = () => {
  return (
    <VStack
      w='100%'
      h='100vh'
      spacing='4'
      justifyContent='center'
      alignItems='center'
    >
      <Image src={'logo.png'}  alt="Daji & Engineers LLP Logo" width='150px' />
      <Progress size='xs' w='40%' colorScheme='brown' isIndeterminate />
      <HStack>
        <Text fontWeight='300' color='gray.400'>
          search less, wear more
        </Text>
      </HStack>
    </VStack>
  );
};

export default Loader;
 