import { Box, Icon } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import { keyframes } from "@emotion/react";

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 0px 0px orange;
  }
  50% {
    box-shadow: 0 0 20px 10px orange;
  }
  100% {
    box-shadow: 0 0 0px 0px orange;
  }
`;

const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    const defaultText = encodeURIComponent("Hello, I am looking for some help.");
    const phoneNumber = "+916262620801";
    const chatLink = `https://wa.me/${phoneNumber}?text=${defaultText}`;
    window.open(chatLink, "_blank");
  };

  return (
    <Box
      position="fixed"
      bottom="8"
      right="8"
      borderRadius="full"
      bg="green.500"
      width="16"
      height="16"
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="lg"
      cursor="pointer"
      onClick={handleWhatsApp}
      zIndex="9999"
      animation={`${glowAnimation} 2s infinite`}
    >
      <Icon as={FaWhatsapp} boxSize="10" color="white" />
    </Box>
  );
};
export default WhatsAppButton;
