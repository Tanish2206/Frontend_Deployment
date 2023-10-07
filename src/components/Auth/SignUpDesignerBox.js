import { Box, Button, Icon, Center } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import { useRouter } from "next/router";
const SignUpDesignerBox = () => {
  const router = useRouter();
  const handleRegisterDesigner=()=>{
    
     router.push("/designer/register");
    //router.push("/SignUpHome");

  }
  return (
   
      <Box
        p={8}
        shadow="2xl"
        borderWidth="2px"
        borderRadius="2xl"
        textAlign="center"
        // bgColor="orange.400"
        color="gray"
        w={{ base: '90%', md: '500px' }}
        h={{ base: '90%', md: '300px' }}
        maxW="100%"
        position="relative"
        transition="transform 0.3s"
        _hover={{ transform: 'scale(1.05)' }}
        
      >
        <Icon
          as={FaUser}
          boxSize={10}
          color="blue.400"
          position="relative"
        //   top={5}
          left="5%"
          transform="translateX(-50%)" // Center the icon horizontally
        />
        <Box fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" mb={4}>
          Designer Sign Up
        </Box>
        <Button
        colorScheme="blue"
        size="lg"
        _hover={{ bg: 'blue.500' }}
        _active={{ bg: 'blue.600' }}
        _focus={{ boxShadow: 'outline' }}
        onClick={ handleRegisterDesigner}
      >
        Sign Up
      </Button>
      </Box>
   
  );
};

export default SignUpDesignerBox;
