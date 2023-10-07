import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

const CustomInput = ({
  id,
  label,
  name,
  value,
  onChange,
  isInvalid,
  errorMessage,
  type,
  isRequired,
}) => {
  return (
    <FormControl id={id} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        isInvalid={isInvalid}
      />
      {isInvalid && (
        <Text color="red.500" fontSize="sm">
          {errorMessage}
        </Text>
      )}
    </FormControl>
  );
};

export default CustomInput;
