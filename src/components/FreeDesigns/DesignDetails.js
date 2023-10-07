import React, { useMemo } from "react";
import {
  VStack,
  Stack,
  useBreakpointValue,
  IconButton,
  Tooltip,
  Box,
  Button,
} from "@chakra-ui/react";
import { ChevronLeftIcon, DownloadIcon } from "@chakra-ui/icons";
import ImageCarousel from "../Common/ImageCarousel";
import SingleDesignInfo from "./SingleDesignInfo";
import secureLocalStorage from "react-secure-storage";

const DesignDetails = ({
  setShow,
  showDesign,
  handleDownload,
  handleBuyNow,
  paidProject
}) => {
  const isMobile = useBreakpointValue({ base: true, sm: false });
  const authToken = secureLocalStorage.getItem("authToken");
  
  const isFreeDesign = useMemo(() => {
    return showDesign?.isFree || (secureLocalStorage.getItem("id") === showDesign?.userId) || paidProject;
  }, [showDesign, paidProject]);

  const onhandleDownload = () => {
    if (isFreeDesign) {
      handleDownload(showDesign, "download");
    } else {
      handleBuyNow(showDesign, "download");
    }
  };

  return (
    <>
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={isMobile ? "4" : "8"}
        alignItems={isMobile ? "center" : "flex-start"}
        bg="white"
        p="8"
        mb={4}
        borderRadius="lg"
        shadow="md"
        overflowX="auto"
      >
        <IconButton
          icon={<ChevronLeftIcon />}
          variant="solid"
          alignSelf="flex-start"
          background="gray.700"
          color="white"
          onClick={() => setShow(false)}
          aria-label="Go back"
        />
        <Box flex={1}>
          <ImageCarousel images={showDesign} />
        </Box>
        <VStack
          flex={1}
          align={isMobile ? "center" : "stretch"}
          ml={isMobile ? 0 : "8"}
        >
          <SingleDesignInfo showProject={showDesign} />
          <Tooltip label="Download" placement="top">
            <Button
              size="lg"
              colorScheme="orange"
              onClick={onhandleDownload}
              leftIcon={<DownloadIcon />}
            >
              Download
            </Button>
          </Tooltip>
        </VStack>
      </Stack>
      {/* Add any additional components or sections */}
    </>
  );
};

export default DesignDetails;
