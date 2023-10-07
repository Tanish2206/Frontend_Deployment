import { useState, useMemo } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  FormControl,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  Link,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import AuthService from "../../utils/AuthService";
import { validatePhoneNumber } from "../../utils/validationUtils";
import { useRouter } from "next/router";
const GoogleButton = () => {
  return (
    <Center>
      <Button w="full" maxW="md" variant="outline" leftIcon={<FcGoogle />}>
        <Center>
          <Text>Sign in with Google</Text>
        </Center>
      </Button>
    </Center>
  );
};

export default function Login({ handleStepChange, setData,
  handleCloseModal }) {
  const [formState, setFormState] = useState({
    phoneNumber: "",
    error: "",
    success: "",
  });
const [isCheck,setIsCheck]=useState("");
const router = useRouter();

const handleSignupClick = () => {
  handleStepChange("signUp");
};

const handleSignupDesigner=()=>{
  router.push("/designer/register");
  handleCloseModal(true);
}

const handleFormSubmit = async () => {
  const { phoneNumber } = formState;
  const phoneNumberError = validatePhoneNumber(phoneNumber);

  if (phoneNumberError) {
    setFormState({ ...formState, error: phoneNumberError, success: "" });
    return;
  }

  setFormState({ ...formState, error: "", success: "" });

  try {
    const payload = {
      mobile:phoneNumber,
      role:isCheck === "user" ? "User": "Designer",
    };
  
    if(isCheck==="user" || isCheck==="designer"){
    
     const response = await AuthService.login(payload);
      if (response?.status === 200) {
      
        // Login successful
        const data = {
          mobile: Number(phoneNumber),
          UserId:  isCheck==="user"? response?.data?.userId : response?.data?.designerId,
          isCheck:isCheck
        };
        setData(data);
        setFormState({ ...formState, success: "Login successful!" });
        handleStepChange("verify");
      } else {
        // Login failed, show error message
        const errorMessage = response?.response?.data?.message || "An error occurred";
        setFormState({ ...formState, error: errorMessage });
      }
    }
   else{
      setFormState({ ...formState, error: "Please select user or designer" });
    }
  
  } catch (error) {
    setFormState({ ...formState, error: "An error occurred" });
  }
};

const handleInputChange = useMemo(() => (e) => {
  const phoneNumber = e.target.value;
  setFormState({ ...formState, phoneNumber, error: "", success: "" });
}, [formState]);

const { phoneNumber, error, success } = formState;

  return (
    <Container maxW="lg" py={{ base: "12", md: "5" }} px={{ base: "0", sm: "2" }}>
      <Stack spacing="1">
        <Stack align="center">
          <Heading fontSize="2xl" textAlign="center">
            Sign in
          </Heading>
          <Text fontSize="l" color="gray.600">
            to your Daji account
          </Text>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg-surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="4">
            <RadioGroup
            //  defaultValue="user"
            onClick={(e)=>setIsCheck(e.target.value)}
            >
              <HStack spacing="16">
                <Radio value="user">User</Radio>
                <Radio value="designer">Designer</Radio>
              </HStack>
            </RadioGroup>
            <Stack spacing="2">
              <FormControl isInvalid={!!error}>
                <Input
                  id="mobile"
                  type="number"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={handleInputChange}
                />
              </FormControl>
              {error && (
                <Text color="red.500" fontSize="sm">
                  {error}
                </Text>
              )}
            </Stack>
            <Stack spacing="6">
              <Button
                loadingText="Submitting"
                size="lg"
                bg="orange.400"
                color="white"
                _hover={{ bg: "orange.500" }}
                onClick={handleFormSubmit}
              >
                Get OTP
              </Button>
              {/* <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <GoogleButton /> */}
            </Stack>
            {success && (
              <Text color="green.500" fontSize="sm" textAlign="center">
                {success}
              </Text>
            )}
            <Stack pt={6}>
             { isCheck==="user" ?
              <Text align="center">
                First time user?{" "}
                <Link color="orange.400" onClick={handleSignupClick}>
                  Signup
                </Link>
              </Text>
              :
              isCheck === "designer" ?
              <Text align="center">
                First time Designer?{" "}
                <Link color="orange.400" onClick={handleSignupDesigner}>
                  Signup
                </Link>
              </Text>
              :""
}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
