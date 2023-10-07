import { useState, useEffect, memo } from "react";
import {
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";
import PinInputComponent from "./OTPInputComponet";
import AuthService from "../../utils/AuthService";
import { useRouter } from "next/router";
import secureLocalStorage from "react-secure-storage";

const VerifyPhone = memo(
  ({ handleStepChange
    , data
    , handleCloseModal
    , setUserSignedIn
    ,setChange
    ,setShow
    ,setToken
   }) => {
    const router = useRouter();
    const [resendTimer, setResendTimer] = useState(59);
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
      let timer = null;
      if (resendTimer > 0) {
        timer = setInterval(() => {
          setResendTimer((prevTimer) => prevTimer - 1);
        }, 1000);
      }
      return () => {
        clearInterval(timer);
      };
    }, [resendTimer]);

    const handleSignInClick = () => {

      handleStepChange("signIn");
      
    };

    const handleResendOTP = () => {
      handleStepChange("signIn");
      setResendTimer(59);
    };

    const handleVerifyOTP = async () => {
      setLoading(true);
      setErrorMessage("");
      setSuccessMessage("");

      try {
     
        if(data?.isCheck==="designer"){
       const  response = await AuthService.verifyDesigner({
          designerId: data?.UserId,
          code: otp, 
        });
        
        if (response?.status === 200) {
          setSuccessMessage("Verification successful!");
          const authToken = response?.data?.authToken;
          secureLocalStorage.setItem("designerId",response?.data?.userId);
          secureLocalStorage.setItem("authToken", JSON.stringify(authToken)); 
          // router.push('/projects');
          router.push({
            pathname: '/designer/designerDeskBoard',
            query: { id:response?.data?.userId}
        })
          handleCloseModal(true);
          
          // handleNavigateToHome();
        } else {
          setErrorMessage("Invalid OTP. Please try again.");
        }
      }else{
        const response = await AuthService.verifyOtp({
          userId: data?.UserId,
          code: otp,
        });
    
        if (response?.status === 200) {
          setSuccessMessage("Verification successful!");
    
          const authToken = response?.data?.authToken;
          secureLocalStorage.setItem("id",response?.data?.userId);
          
          secureLocalStorage.setItem("authToken", JSON.stringify(authToken));
          if(setChange){
            setToken(authToken)  
            router.push({
              pathname: '/designs',
              query: { id:response?.data?.userId}
          })    
            handleCloseModal(true);
            setShow(true);
          }else{
          router.push('/projects');
          handleCloseModal(true);
          }
          // handleNavigateToHome();
        } else {
          setErrorMessage("Invalid OTP. Please try again.");
        }
      }
        
      } catch (error) {
        setErrorMessage("Error occurred while verifying OTP.");
      } finally {
        setLoading(false);
      }
    };

    const handleNavigateToHome = () => {
      setUserSignedIn(true);
      handleCloseModal(true);
    };

    return (
      <Container
        maxW="lg"
        py={{ base: "12", md: "5" }}
        px={{ base: "0", sm: "2" }}
      >
        <Stack
          spacing={4}
          mx="auto"
          maxW="lg"
          bg={useColorModeValue("white", "gray.700")}
          rounded="xl"
          boxShadow="lg"
          p={6}
          mt={10}
        >
          <Button
            position="absolute"
            top={4}
            left={4}
            variant="ghost"
            onClick={handleSignInClick}
          >
            <FiArrowLeft size={20} />
          </Button>
          <VStack spacing={4}>
            <Heading fontSize="2xl" textAlign="center">
              Verify Phone Number
            </Heading>
            <Text fontSize="l" color="gray.600">
              We have sent a code to your phone
            </Text>
          </VStack>
          <VStack spacing={6}>
            <Text
              fontSize={{ base: "sm", sm: "md" }}
              fontWeight="bold"
              color={useColorModeValue("gray.800", "gray.400")}
            >
              {`+91-${data?.mobile}`}
            </Text>
            <PinInputComponent value={otp} onChange={setOtp} />
            <Stack spacing={6}>
              {successMessage && (
                <Alert status="success">
                  <AlertIcon />
                  {successMessage}
                </Alert>
              )}
              {errorMessage && (
                <Alert status="error">
                  <AlertIcon />
                  {errorMessage}
                </Alert>
              )}
              <Button
                bg="orange.400"
                color="white"
                _hover={{ bg: "orange.500" }}
                onClick={handleVerifyOTP}
                isLoading={loading}
                loadingText="Verifying"
              >
                Verify
              </Button>
              {resendTimer > 0 ? (
                <Text fontSize="sm" textAlign="center">
                  Resend OTP in 0:
                  {resendTimer < 59 ? `${resendTimer}` : resendTimer}
                </Text>
              ) : (
                <Button
                  variant="link"
                  colorScheme="blue"
                  onClick={handleResendOTP}
                >
                  Resend OTP
                </Button>
              )}
            </Stack>
          </VStack>
        </Stack>
      </Container>
    );
  }
);
VerifyPhone.displayName = 'VerifyPhone';


export default VerifyPhone;
