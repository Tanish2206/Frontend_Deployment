import React, { useState, useCallback } from "react";
import {
  Box,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Container,
} from "@chakra-ui/react";
import CustomInput from "./CustomInput";
import AuthService from "../../utils/AuthService";
import { inputFields } from "../../utils/ConstantFields";
import { validateForm, getFieldName, isValidValue } from "../../utils/validationUtils";

const Signup = React.memo(({ handleStepChange, setData }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    role: "User"
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSignInClick = useCallback(() => {
    handleStepChange("signIn");
  }, [handleStepChange]);

  const handleVerifyPhoneClick = useCallback(() => {
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsLoading(true); // Start the loading state

      AuthService.signUp(formData)
        .then((res) => {
          if (res?.status === 200) {
            // Registration successful
            setIsSuccess(true);
            const data = {
              mobile: formData?.mobile,
              UserId: res?.data?.userId,
            };
            setData(data);
            handleStepChange("verify");
          } else {
            // Registration failed, show error message
            const errorMessage =
              res?.response?.data?.message || "An error occurred";
            setErrors({ general: errorMessage });
          }
        })
        .catch((error) => {
          // Registration failed due to an error, show generic error message
          setErrors({ general: "An error occurred" });
        })
        .finally(() => {
          setIsLoading(false); // End the loading state
        });
    }
  }, [formData, setData, handleStepChange]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  }, []);

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "5" }}
      px={{ base: "0", sm: "2" }}
      align={"center"}
      justify={"center"}
    >
      <Stack spacing={4} mx={"auto"} maxW={"lg"}>
        <Stack align={"center"}>
          <Heading fontSize={"2xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"l"} color={"gray.600"}>
            to enjoy all our cool features
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            {inputFields.map((field) => (
              <CustomInput
                key={field.id}
                id={field.id}
                label={field.label}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                isInvalid={!!errors[field.name]}
                errorMessage={errors[field.name]}
                type={field.type}
                isRequired
              />
            ))}

            {errors.general && (
              <Text color="red.500" fontSize="sm">
                {errors.general}
              </Text>
            )}

            {isSuccess && (
              <Text color="green.500" fontSize="sm">
                Signup successful! Redirecting to verification...
              </Text>
            )}

            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"orange.400"}
                color={"white"}
                _hover={{
                  bg: "orange.500",
                }}
                onClick={handleVerifyPhoneClick}
                isLoading={isLoading}
              >
                Sign up
              </Button>
            </Stack>

            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link color={"orange.400"} onClick={handleSignInClick}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
});

export default Signup;
