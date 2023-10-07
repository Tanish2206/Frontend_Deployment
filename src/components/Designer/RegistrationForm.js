import React from 'react';
import { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from '@chakra-ui/react';
import { designerCategory } from '../../utils/ConstantFields';
import { useToast } from '@chakra-ui/react'
import AuthService from '../../utils/AuthService';
import VerifyPhone from '../Auth/VerifyPhone';

const Form1 = ({formData, updateFormData }) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const handleInputChange = (e) => {
    updateFormData(e.target.name, e.target.value);
  };
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Designer Registration
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            First name
          </FormLabel>
          <Input 
            id="first-name"
            name="firstName"
            placeholder="First name"
            value={formData.firstName || ''}
            onChange={handleInputChange}
           />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Last name
          </FormLabel>
          <Input 
            id="last-name"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName || ''}
            onChange={handleInputChange}
          />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Email address
        </FormLabel>
        <Input 
         id="email" 
         type="email" 
         name='email'
         placeholder="Emaii"
         value={formData?.email || ''}
         onChange={handleInputChange}
        />
        <FormHelperText>We&apos;ll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            name='password'
            value={formData.password || ''}
            onChange={handleInputChange}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="mobile" fontWeight={'normal'} mt="2%">
          Mobile Number
        </FormLabel>
          <Input
            pr="4.5rem"
            type={"number"}
            placeholder="Mobile Number"
            name='mobile'
            value={formData.mobile || ''}
            onChange={handleInputChange}
          />   
    </FormControl>

    <FormControl mt="2%">
        <FormLabel htmlFor="gender" fontWeight={'normal'}>
          Gender
        </FormLabel>
        <Select
          id="gender"
          name="gender"
          placeholder="Select gender"
          value={formData.gender || ''}
          onChange={handleInputChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Select>
      </FormControl>
    </>
  )
}

const Form2 = ({formData, updateFormData }) => {
  const handleInputChange = (e) => {
    updateFormData(e.target.name, e.target.value);
  };
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        User Details
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Country / Region
        </FormLabel>
        <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={formData.country || ''}
          onChange={handleInputChange}
          >
          <option value="IN">INDIA</option>
          <option value="UK">United States</option>
          <option value="canada">Canada</option>
          <option value="mexico">Mexico</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Street address
        </FormLabel>
        <Input
          type="text"
          name="address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={formData.address || ''}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder='City'
          value={formData.city || ''}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          State / Province
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder='state'
          value={formData.state || ''}
          onChange={handleInputChange}
        />
      </FormControl>

    </>
  )
}

const Form3 = ({formData, updateFormData }) => {
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    // Check if the input is a file input and read the selected image file
    if (files && files[0]) {
        updateFormData(name, files[0]);
    } else {
      updateFormData(name, value);
    }
  };
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Additional Information
      </Heading>
      <FormControl mt="2%">
        <FormLabel htmlFor="dob" fontWeight={'normal'}>
          Date of Birth
        </FormLabel>
        <Input 
        id="dob" 
        type="date"
        name='dateOfBirth'
        placeholder='date of birth'
        value={formData.dateOfBirth || ''}
        onChange={handleInputChange}
        />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="id_proof" fontWeight={'normal'}>
          Upload ID Proof
        </FormLabel>
        <Input
          type="file"
          id="id_proof" 
          accept="image/*"
          name='idProofUrl'
          onChange={handleInputChange}
          />
        <FormHelperText>
          Please upload a valid ID proof for verification.
        </FormHelperText>
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="category" fontWeight={'normal'}>
          Select Category
        </FormLabel>
        <Select 
          id="category"
          name="category"
          placeholder="Select category"
          value={formData?.category}
          onChange={handleInputChange}
          >
          {designerCategory?.map((elm)=>{
            return(
              <option key={elm?.id} value={elm?.category}>{elm?.category}</option>
             )
          })}
        </Select>
      </FormControl>

     
    </>
  );
};

const Form4 = ({formData, updateFormData }) => {
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    // Check if the input is a file input and read the selected image file
    if (files && files[0]) {
      
        updateFormData(name, files[0]);
      
    } else {
      updateFormData(name, value);
    }
  };
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Additional Information
      </Heading>
      <FormControl mt="2%">
        <FormLabel htmlFor="profile_photo" fontWeight={'normal'}>
          Upload Profile Photo
        </FormLabel>
        <Input
          type="file"
          id="profile_photo"
          placeholder='profile_photo'
          name='profilePhotoUrl'
          onChange={handleInputChange}
          />
        <FormHelperText>
          Please upload a profile photo for verification.
        </FormHelperText>
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="working_hours" fontWeight={'normal'}>
          Working hours/Shift
        </FormLabel>
        <Input 
          type="text"
          id="working_hours"
          name='workingHours'
          value={formData?.workingHours}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="payment_condition" fontWeight={'normal'}>
          Payment Condition
        </FormLabel>
        <Select
          id="payment_condition"
          name="paymentCondition"
          placeholder="Select payment condition"
          value={formData?.paymentCondition}
          onChange={handleInputChange}
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </Select>
      </FormControl>

      <FormControl mt="2%">
      <FormLabel htmlFor="design" fontWeight={'normal'}>
        Upload Design
      </FormLabel>
      <Input
         type="file" 
         id="design" 
         name='designUrl'
         onChange={handleInputChange}
         />
      <FormHelperText>
        Please upload your design for review.
      </FormHelperText>
    </FormControl>
    </>
  );
}

const Form5 = ({formData, updateFormData }) => {
  const handleInputChange = (e) => {
    updateFormData(e.target.name, e.target.value);
  };
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Account Details
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Account Holder Name
          </FormLabel>
          <Input
            type="text"
            placeholder="John Doe"
            focusBorderColor="brand.400"
            rounded="md"
            name='accountName'
            value={formData?.accountName}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl id="accountNo" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Account No.
          </FormLabel>
          <Input
            type="tel"
            placeholder="Enter your account number"
            focusBorderColor="brand.400"
            rounded="md"
            name='accountNumber'
            value={formData?.accountNumber}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl id="ifscCode" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            IFSC Code
          </FormLabel>
          <Input
            type="text"
            placeholder="Enter your IFSC code"
            focusBorderColor="brand.400"
            rounded="md"
            name='IFSC'
            value={formData?.IFSC}
            onChange={handleInputChange}
          />
        </FormControl>
      </SimpleGrid>
    </>
  )
} 

const Form6 = ({formData, updateFormData }) => {
  const handleInputChange = (e) => {
    updateFormData(e.target.name, e.target.value);
  };
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Social Handles
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Website
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              color="gray.500"
              rounded="md">
              http://
            </InputLeftAddon>
            <Input
              type="tel"
              placeholder="www.example.com"
              focusBorderColor="brand.400"
              rounded="md"
              name='Website'
              value={formData?.Website}
              onChange={handleInputChange}
            />
          </InputGroup>
        </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            About
          </FormLabel>
          <Textarea
            placeholder="you@example.com"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
            name='about'
            value={formData?.about}
            onChange={handleInputChange}
          />
          <FormHelperText>
            Brief description for your profile. URLs are hyperlinked.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  )
}

const RegistrationFormNew = () => {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(16.66);
  const [formData, setFormData] = useState({
    role: "Designer",
  });

  const [isModalOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState('');
  const [userSignedIn, setUserSignedIn] = useState(false);
  const [data, setData] = useState();
  const [show, setShow] = useState(false);


  const handleSubmit = () => {
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
    
        form.append(key, value);
      
    });
    registerDesigner(form); // Replace this with your desired form submission logic
  };



  const registerDesigner = (payload) => {
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    AuthService.registerDesigner(payload,config)
      .then((response) => {
        if (response?.status === 200) {
          // Registration successful
        
          const data = {
            isCheck:"designer",
            mobile: formData?.mobile,
            UserId : response?.data?.userId,
          };
          setData(data);
          handleOpenModal('verify');
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            position : 'top-top-right',
            status: 'success',
            duration: 3000,
            isClosable: true,
          }); 
          setIsSuccess(true);
        } else {
          // Registration failed, show error message
          toast({
            title:response?.response?.data?.message,
            description: response?.response?.data?.message,
            position :'top-right',
            status: 'error',
            duration: 3000,
            isClosable: true,
          }); 
          const errorMessage =
            response?.response?.data?.message || 'An error occurred';
          setErrors({ general: errorMessage });
        }
      })
      .catch((error) => {
      });
  };
  const updateFormData = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };


  // Phone Verify - Authentication



  const handleOpenModal = (step) => {
    setCurrentStep(step);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

const renderModalContent = () => {
  switch (currentStep) {
    case "verify":
      return (
        <VerifyPhone
          handleStepChange={handleStepChange}
          data={data}
          handleCloseModal={handleCloseModal}
          setUserSignedIn={setUserSignedIn}
          setShow={setShow}
        />
      );
    default:
      return null;
  }
};
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0, 0, 0, 0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? (
          <Form1 formData={formData} updateFormData={updateFormData} />
        ) : step === 2 ? (
          <Form2 formData={formData} updateFormData={updateFormData} />
        ) : step === 3 ? (
          <Form3 formData={formData} updateFormData={updateFormData} />
        ) : step === 4 ? (
          <Form4 formData={formData} updateFormData={updateFormData} />
        ) : step === 5 ? (
          <Form5 formData={formData} updateFormData={updateFormData} />
        ) : (
          <Form6 formData={formData} updateFormData={updateFormData} />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 16.66);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 6}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 6) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 16.66);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 6 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={handleSubmit} 
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
        <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        size={'md'}
        scrollBehavior={'inside'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody p={0}>{renderModalContent()}</ModalBody>
        </ModalContent>
      </Modal>
      </Box>
    </>
  );
};

export default RegistrationFormNew;