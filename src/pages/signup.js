import { Box, Center, SimpleGrid } from '@chakra-ui/react';
import SignUpUserBox from '../components/Auth/SignUpUserBox';
import SignUpDesignerBox from '../components/Auth/SignUpDesignerBox';

const signup = () => {
  return (
    
    <Center h="100vh">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <SignUpUserBox />
        <SignUpDesignerBox />
      </SimpleGrid>
      </Center>

  );
};

export default signup;
