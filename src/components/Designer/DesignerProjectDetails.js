import {
  Box,
  VStack,
  Text,
  Grid,
  GridItem,
  IconButton,
  Button,
  Image,
  Flex,
  Spacer,
  useBreakpointValue,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import ProjectMilestoneStatus from '../Projects/ProjectProgress';
import ImageCarousel from '../Common/ImageCarousel';
import DesignerSingleInfo from './DesignerSingleInfo';
import secureLocalStorage from 'react-secure-storage';
import AuthService from '../../utils/AuthService';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export default function DesignerProjectDetails({ data, setShow }) {

  const designerId = secureLocalStorage.getItem("designerId");
  const toast = useToast();
  const { projectStatus } = data;

  const [formData, setFormData] = useState({
    projectId:data?.id,
    designerId:designerId
  })
 
  
  const statusMap = {
    NotStarted: 0,
    PaymentDone: 1,
    SiteVisitDone: 2,
    DesignerAssigned: 3,
    DesignSubmitted: 4,
    WaitingForApproval: 5,
    ChangesInProgress: 6,
    FinalDesignSubmitted: 7,
  };
  const status = statusMap[projectStatus] || 0;

 
  const handleUpload = (event, type) => {
    const selectedFiles = Array.from(event.target.files);
    if (type === 'image') {
      setFormData((prevData) => ({
        ...prevData,
        siteImagesUrls: [...(prevData.siteImagesUrls || []), ...selectedFiles],
      }));
      // setSelectedImages([...selectedImages, ...selectedFiles]);
    } else if (type === 'video') {
      setFormData((prevData) => ({
        ...prevData,
        videosUrls: [...(prevData.videosUrls || []), ...selectedFiles],
      }));
    }

     else if (type === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        fileUrls: [...(prevData.videosUrls || []), ...selectedFiles],
      }));
    }
  };
  const submitMedia=()=>{
  
    AuthService.uploadDesignerMedia(formData).then((res)=>{
      
      if(res?.status===200){
      toast({
        title: 'Media.',
        position: 'top-right',
        description: "Project media upload successfully",
        status: 'success',
        duration: 3000,
        isClosable: true,
      }); 
    }else{
      toast({
        title: 'Media.',
        position: 'top-right',
        description: "Can't upload media",
        status: 'error',
        duration: 3000,
        isClosable: true,
      }); 
    }

    }).catch((error)=>{
      toast({
        title: 'Media.',
        position: 'top-right',
        description: "Can't upload Media error",
        status: 'error',
        duration: 3000,
        isClosable: true,
      }); 
    })
  }
  const handleDownload = () => {
    // Download logic...
    handleZipDownload();
  };


 const handleZipDownload = async () => {
    const zip = new JSZip();

    // Add images to the ZIP
    if (data?.siteImagesUrls) {
      const imageFolder = zip.folder('images');
      await Promise.all(
        data.siteImagesUrls.map(async (url) => {
         const response= await axios.get(`${process.env.backendBaseUrl}download/`, {
            params: { url: url },
            responseType: 'blob'
          });
          const fileName = url.substring(url.lastIndexOf('/') + 1);
          imageFolder.file(fileName, response.data);
        })
      );
    }

    // Add videos to the ZIP
    if (data?.videosUrls) {
      const videoFolder = zip.folder('videos');
      await Promise.all(
        data.videosUrls.map(async (url) => {
          const response= await axios.get(`${process.env.backendBaseUrl}download/`, {
            params: { url: url },
            responseType: 'blob'
          });
          const fileName = url.substring(url.lastIndexOf('/') + 1);
          videoFolder.file(fileName, response.data);
        })
      );
    }

    // Generate the ZIP file
    zip.generateAsync({ type: 'blob' }).then((content) => {
      // Save the ZIP file
      saveAs(content, 'project_data.zip');
    });
  };


  const handleStatusChange=(status)=>{

    AuthService.updateDesignerStatus(data?.id,designerId,status).then((res)=>{
      
      if(res?.status===200){
      toast({
        title: 'Status.',
        position: 'top-right',
        description: "Project status updated successfully",
        status: 'success',
        duration: 3000,
        isClosable: true,
      }); 
    }else{
      toast({
        title: 'Status.',
        position: 'top-right',
        description: "Can't update Status",
        status: 'error',
        duration: 3000,
        isClosable: true,
      }); 
    }
    }).catch((error)=>{
   
    })
  }
  const mobileView = useBreakpointValue({ base: true, md: false });
  const isMobile = useBreakpointValue({ base: true, sm: false });

  return (
    <Box p={4}>
      <Stack
        direction={isMobile ? 'column' : 'row'}
        spacing={isMobile ? '4' : '8'}
        alignItems={isMobile ? 'center' : 'flex-start'}
        bg="white"
        p="8"
        mb={4}
        borderRadius="lg"
        shadow="sm"
        overflowX="auto"
      >
        <IconButton
          icon={<ChevronLeftIcon />}
          variant="solid"
          alignSelf="flex-start"
          background="blackAlpha.500"
          color="white"
          onClick={() => setShow(false)} // Go back in browser history
          aria-label={''}
        />
        <ImageCarousel images={data} />
        <VStack flex={1} align={isMobile ? 'center' : 'stretch'} ml={isMobile ? 0 : '8'}>
          <DesignerSingleInfo 
            showProject={data} 
            onSubmit={handleStatusChange}
            onhandelMedia={handleUpload}
            submitMedia={submitMedia}
          />
        </VStack>
      </Stack>

      <VStack mt={4} spacing={4} align="center">
        <Button colorScheme="blue" w="100%" onClick={handleDownload}>
          Download Data
        </Button>
      </VStack>
      <Text mt={8} mb={4} fontSize="lg" fontWeight="bold" textAlign="center">
        Project Status
      </Text>
      <ProjectMilestoneStatus projectStatus={status} />
    </Box>
  );
}
