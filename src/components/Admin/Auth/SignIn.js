import { Box, Button, FormControl, FormLabel, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Image from 'next/image';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Implement your sign-up logic here
  };

  return (
    <Box
      bgGradient="linear(to-b, teal.500, teal.300)"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        p={8}
        bg="white"
        rounded="md"
        boxShadow="lg"
        maxWidth="400px"
        width="100%"
      >
        <Box textAlign="center" mb={6}>
          <Image src="/logo.png" alt="Logo" />
        </Box>
        <VStack spacing={4} align="stretch">
          <Heading as="h1" size="lg" textAlign="center" mb={6}>
            Sign Up
          </Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="teal" onClick={handleSignUp}>
            Sign Up
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default SignUp;
