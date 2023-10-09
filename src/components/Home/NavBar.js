import { Box, Flex, Text, Image, IconButton, Button, Stack, Collapse, Icon,
   Link, Popover, PopoverTrigger, PopoverContent,
    useColorModeValue, useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { memo, useState, useEffect } from "react";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import VerifyPhone from "../Auth/VerifyPhone";
import UserMenu from "./UserMenu";
import { useRouter } from "next/router";
import secureLocalStorage from "react-secure-storage";
import DesktopNav from "../NavBarComponent/DesktopNav";
import MobileNav from "../NavBarComponent/MobileNav";

function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  const [isModalOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState("");
  const [userSignedIn, setUserSignedIn] = useState(false);
  const [data, setData] = useState();
  const [Admin,setAdmin]=useState(false);
  const Auth = secureLocalStorage.getItem("authToken");
  const router = useRouter();

  useEffect(() => {
    setUserSignedIn(Auth !== null);
  }, [Auth]);

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

  const handleSignOut = () => {
    setUserSignedIn(false);
    secureLocalStorage.clear();
    router.push("/");
  };
const onhandleClick=()=>{
 
  setAdmin(true)
}
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

  const handleRegisterDesigner=()=>{
    
    //  router.push("/designer/register");
    router.push("/signup");

  }
  return (
    <>
    <Box position="sticky" top={0} zIndex="sticky">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image
            src="/logo.png"
            alt="Daji & Engineers LLP Logo"
            boxSize="30px"
            mr="2"
            onClick={() =>{router.push("/")}}
            style={{ cursor: "pointer" }}
          />

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        {!userSignedIn ? (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
           <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              onClick={handleRegisterDesigner}
              visibility="hidden"
            >
              Register as Designer
            </Button>
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              onClick={() => handleOpenModal("signIn")}
              cursor="pointer"
            >
              Sign In
            </Button>
            <Button
              as={"a"}
              // display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"orange.400"}
              onClick={handleRegisterDesigner}
              _hover={{
                bg: "orange.300",
              }}
              cursor="pointer"
            >
              Sign Up
            </Button>
          </Stack>
        ) : (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Popover>
              <PopoverTrigger>
                <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={400}
                  variant={"link"}
                  onClick={onhandleClick}
                >
                  {/* My Account */}
                </Button>
              </PopoverTrigger>
              <UserMenu handleSignOut={handleSignOut} />
            </Popover>
          </Stack>
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav handleOpenModal={handleOpenModal} />
      </Collapse>

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

    </>
  );
}

export default memo(NavBar);
