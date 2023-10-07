import React, { useState } from 'react';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Flex,
  Text,
  Icon,
  Divider,
  Link,
} from '@chakra-ui/react';
import Head from 'next/head';

import AuthService from '../utils/AuthService';
import { validateEmail, validateMessage, validatePhone, validateName } from '../utils/validationUtils';
import TosterShow from '../components/Common/ToseterMessage/tosterMessage';
import { toast } from 'react-toastify';
import { contactOptions } from '../utils/ConstantFields';
import { useRouter } from 'next/router';
const Enquire = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    // email: '',
    mobile: '',
    message: '',
  });
  const router =useRouter();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear the error message when the user starts typing
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation for each field
    const nameError = validateName(formData);
    // const emailError = validateEmail(formData);
    const phoneError = validatePhone(formData);
    const messageError = validateMessage(formData);

    // Set the error messages if validation fails
    setFormErrors({
      name: nameError,
      // email: emailError,
      mobile: phoneError,
      message: messageError,
    });

    // Submit the form if there are no errors
    if (!nameError  && !phoneError && !messageError) {
      // Submit the form data
      const fetchData=async(formData)=>{
      
      await  AuthService.postEnquire(formData).then((response)=>{
        if(response?.status===200){
          toast.success(response?.data?.message);
          router?.back();
        }
        else{
          toast.error("not send Enquire");
        }
        }).catch((error)=>{
          toast.error(error); 
           
        })
      }
     fetchData(formData);

      // Clear the form data
      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: '',
      });
    }
  };

  return (
    <>
     <Head>
        <title>Enquire for Our Services | Daji.co.in</title>
      </Head>
    <TosterShow />
    <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }}>
      <Stack spacing={10}>
        <Flex align="center" justify="center" direction="column">
          <Heading fontSize="4xl" mb={2}>
            Enquire Now
          </Heading>
          <Text fontSize="md" textAlign="center">
            Give us an opportunity to serve you.
          </Text>
        </Flex>
        <Stack
          spacing={{ base: 6, md: 0 }}
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
        >
          {contactOptions.map((option, index) => (
            <Flex key={index} align="center" direction="column">
              <Icon as={option.icon} w={10} h={10} color="green.400" />
              <Text fontSize="lg" fontWeight="semibold">
                {option.label}
              </Text>
              <Link href={option?.href} isExternal>
                <Text fontSize="md" textAlign="center">
                  {option.value}
                </Text>
              </Link>
            </Flex>
          ))}
        </Stack>
        <VStack
          as="form"
          spacing={8}
          w="100%"
          bg={useColorModeValue('white', 'gray.700')}
          rounded="lg"
          boxShadow="lg"
          p={{ base: 5, sm: 10 }}
          onSubmit={handleSubmit}
        >
          <VStack spacing={4} w="100%">
            <FormControl id="name" isInvalid={!!formErrors.name}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Your Name"
                rounded="md"
                value={formData.name}
                onChange={handleChange}
                name="name"
              />
              <Text color="red.500">{formErrors.name}</Text>
            </FormControl>
            <FormControl id="email" isInvalid={!!formErrors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Your Email"
                rounded="md"
                value={formData.email}
                onChange={handleChange}
                name="email"
              />
              <Text color="red.500">{formErrors.email}</Text>
            </FormControl>
            <FormControl id="mobile" isInvalid={!!formErrors.mobile}>
              <FormLabel>Mobile</FormLabel>
              <Input
                type="text"
                placeholder="Your Phone Number"
                rounded="md"
                value={formData?.mobile}
                onChange={handleChange}
                name="mobile"
              />
              <Text color="red.500">{formErrors.mobile}</Text>
            </FormControl>
            <FormControl id="message" isInvalid={!!formErrors.message}>
              <FormLabel>Message</FormLabel>
              <Textarea
                size="lg"
                placeholder="Enter your requirements"
                rounded="md"
                value={formData.message}
                onChange={handleChange}
                name="message"
              />
              <Text color="red.500">{formErrors.message}</Text>
            </FormControl>
          </VStack>
          <VStack w="100%">
            <Button
              type="submit"
              bg="green.300"
              color="white"
              _hover={{
                bg: 'green.700',
              }}
              rounded="md"
              w={{ base: '100%', md: 'max-content' }}
            >
              Send Message
            </Button>
          </VStack>
        </VStack>
      </Stack>
    </Container>

    </>
  );
};

export default Enquire;
