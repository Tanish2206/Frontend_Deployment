import React from "react";
import { PinInput, PinInputField, HStack, Center } from "@chakra-ui/react";

const PinInputComponent = ({ value, onChange }) => {
  const handlePinChange = (pin) => {
    onChange(pin);
  };

  return (
    <Center>
      <HStack>
        <PinInput value={value} onChange={handlePinChange}>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    </Center>
  );
};

export default PinInputComponent;
