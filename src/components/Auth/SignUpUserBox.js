import { Box, Button, Icon, Center,
    useColorModeValue, useDisclosure,
     Modal, ModalOverlay, ModalContent, ModalBody  } from '@chakra-ui/react';
     import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import VerifyPhone from "../Auth/VerifyPhone";
import { memo, useState,  } from "react";
import { FaUser } from 'react-icons/fa';
const SignUpUserBox = () => {

    const { isOpen, onToggle } = useDisclosure();
    const [isModalOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState("");
    const [userSignedIn, setUserSignedIn] = useState(false);
    const [data, setData] = useState();
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
          case "signIn":
            return <Login handleStepChange={handleStepChange} setData={setData}
            handleCloseModal={handleCloseModal}
             />;
          case "signUp":
            return <Signup handleStepChange={handleStepChange} setData={setData} />;
          case "verify":
            return (
              <VerifyPhone
                handleStepChange={handleStepChange}
                data={data}
                handleCloseModal={handleCloseModal}
                setUserSignedIn={setUserSignedIn}
              />
            );
          default:
            return null;
        }
      };
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
          User Sign Up
        </Box>
        <Button
        colorScheme="blue"
        size="lg"
        _hover={{ bg: 'blue.500' }}
        _active={{ bg: 'blue.600' }}
        _focus={{ boxShadow: 'outline' }}
        onClick={()=>handleOpenModal("signUp")}
      >
        Sign Up
      </Button>
      <Modal
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      size={"md"}
      scrollBehavior={"inside"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody p={0}>{renderModalContent()}</ModalBody>
      </ModalContent>
    </Modal>
      </Box>
  );
};

export default SignUpUserBox;
