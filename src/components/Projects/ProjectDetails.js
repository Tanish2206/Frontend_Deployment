import {
  Box,
  VStack,
  Text,
  Grid,
  GridItem,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import ProjectMilestoneStatus from "./ProjectProgress";
import ImageCarousel from "../Common/ImageCarousel";

export default function ProjectDetails({ data, setShow, onClose }) {
  const { userData } = useSelector((state) => state?.dajiUser);
  const [client, setClient] = useState(null);

  const router = useRouter();
  const { data: queryData } = router.query;
  const parsedData = queryData ? JSON.parse(queryData) : null;

  useEffect(() => {
    setClient(parsedData);
  }, [parsedData]);

  const project = {
    id: 1,
    name: data?.title,
    imageUrls: data?.siteImagesUrls,
    description: data?.description,
    location: data?.location,
    progress: data?.projectStatus,
    totalAmount: `₹ ${data?.totalAmount}`,
    paidAmount: `₹ ${data?.paidAmount}`,
    isPaymentDone: data?.isPaymentDone,
    currentIteration: data?.currentIteration,
    maximumIterations: data?.maximumIterations,
    projectStatus: "Not Started",
  };

  const statusMap = {
    NotStarted: 1,
    PaymentDone: 2,
    SiteVisitDone: 3,
    DesignerAssigned: 4,
    DesignSubmitted: 5,
    WaitingForApproval: 6,
    ChangesInProgress: 7,
    FinalDesignSubmitted: 8,
  };
  
  const status = statusMap[data?.projectStatus] || 0;

  const showBackButton = useBreakpointValue({ base: false, md: true });

  return (
    <Box p={6}>

    {showBackButton && (
    
<IconButton
  aria-label="Go Back"
  icon={<ArrowBackIcon />}
  onClick={() => onClose()}
  cursor="pointer"
  variant="ghost"
  position="relative"
  top="10"
  right="12"
  
/>

)}
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 2fr" }}
        gap={8}
        alignItems="start"
      >
        <GridItem>
          <ImageCarousel images={data} />
        </GridItem>
        <GridItem>
          <VStack spacing={4} align="start">
            <Text fontSize="2xl" fontWeight="bold" textTransform="capitalize">
              {project.name}
            </Text>
            <Text>{project.description}</Text>
            <Text>Location: {project.location}</Text>
            <Text>Progress: {project.progress}</Text>
            <Text>Total Amount: {project.totalAmount}</Text>
            <Text>Paid Amount: {project.paidAmount}</Text>
            <Text>
              Payment Status: {project.isPaymentDone ? "Paid" : "Pending"}
            </Text>
            <Text>
              Iteration: {project.currentIteration}/{project.maximumIterations}
            </Text>
          </VStack>
        </GridItem>
      </Grid>
      <Text mt={8} mb={4} fontSize="lg" fontWeight="bold">
        Project Status
      </Text>
      <ProjectMilestoneStatus projectStatus={status} />
    </Box>
  );
}
