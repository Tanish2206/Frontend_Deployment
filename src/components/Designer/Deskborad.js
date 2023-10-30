import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  Square,
  Heading,
  Icon,
  VStack,
} from "@chakra-ui/react";
import {
  FaWallet,
  FaStar,
} from "react-icons/fa";
import ReusableTable from "../Table/Table";
import { activeProjectHeader, projectRequestsHeader } from "../../utils/ConstantFields";
import AuthService from "../../utils/AuthService";
import secureLocalStorage from "react-secure-storage";
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const Deskboard = () => {
  // ... (your existing state and functions)

  const storedId = secureLocalStorage.getItem("designerId");
  
  const toast = useToast();
  const [designerProject, setDesignerProject] = useState();
  const [acceptedProject , setAcceptedProject] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [message,setMessage]=useState();
  const [api, setApi] = useState(true);
  const [designer, setDesigner] = useState({});



  const userData = () => {
    if (storedId) {
      AuthService.getDesignerProfile(storedId 
        )
        .then((response) => {
          if (response.status === 200) {
           
            setDesigner(response?.data?.response_data);
            setApi(false);
          } else {
            // Handle error
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  useEffect(() => {
    if (api) {
      userData();
    }
  }, [api, userData]); // Include userData in the dependency array
  
  
  

  useEffect(() => {
    const setProjectData = async () => {
      try {
        const response = await AuthService?.getDesignerProject(storedId);
        if (response?.status === 200) {
          setDesignerProject(response?.data?.projects);
        }
        // setDesignerProject(designerProjects);
      } catch (error) {
        throw Error(error);
      }
    };
    setProjectData();
  }, [message, storedId]); // Include storedId in the dependency array
  


  useEffect(() => {
    const setProjectData = async () => {
      try {
        const response = await AuthService.getAcceptedProject(storedId);
        if (response?.status === 200) {
          setAcceptedProject(response?.data?.projects);
          setMessage("");
        }
        // setDesignerProject(designerProjects);
      } catch (error) {
        throw Error(error);
      }
    };
    setProjectData();
  }, [message, storedId]); // Include storedId in the dependency array
  
 
    // Filter the data based on search query

    const onhandleStatus=(e,data)=>{
      
     if(e==="accept"||e==="reject"){
    
      designerStatusApproval(e,data?.id)
     }else{

      let payload={
        projectStatusByDesigner:e
      }
      handleStatusChange(data,payload)
     }
        
    }
  
    const designerStatusApproval=(approval,data)=>{
      const payload={
        designerId:storedId,
        projectId:data,
        response:approval
      }
      AuthService.updatedProjectReq(payload).then((response)=>{
        if(response?.status===200){
          
        toast.success("edit Approval Successfully");
          setMessage(response);
        }else{
           toast.error("can't Approval");
        }
  
      }).catch((error)=>{
       
      })
    }
  
    const handleStatusChange=(data,payload)=>{
    
      AuthService.updateDesignerStatus(data?.id,storedId,payload).then((res)=>{
       
      
        if(res?.status===200){
       
          setMessage(res);
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

    

    const handleDownload = (item) => {
      // Implement your download logic here
     
      handleZipDownload(item);
     //handleExcelDownload(item);
    };
    const handleUplad=(status,item)=>{
      
    }

    const handleZipDownload = async (data) => {
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



    
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
      <Flex direction={{ base: "column", md: "row" }} align={{ md: "center" }}> 
        <Flex
          shadow="lg"
          bg="white"
          p={5}
          borderRadius="lg"
          justifyContent="center"
        >
          <Box>
            <Text fontSize="xl" color="gray.500">
              Total Project Completed
            </Text>
            <Heading size="lg" color="gold">
              20
            </Heading>
          </Box>
          <Spacer />
          <Square size="60px" bg="orange.200" borderRadius="lg">
            <Icon as={FaWallet} color="red" />
          </Square>
        </Flex>
         <Spacer/>
        <Flex
          shadow="lg"
          bg="white"
          p={5}
          borderRadius="lg"
          justifyContent="center"
          
        >
          <Box>
            <Text fontSize="xl" color="gray.500">
              CUSTOMER RATING
            </Text>
            <Heading size="lg" color="gold">
              4.5
            </Heading>
          </Box>
          <Spacer />
          <Square size="60px" bg="whatsapp.100" borderRadius="lg">
            <Icon as={FaStar} color="gold" />
          </Square>
        </Flex>
        </Flex>
      </VStack>

      <Box mt={8}>
        <Text>Active Projects</Text>
      </Box>
      <Box mt={4}>
        <ReusableTable
          headers={activeProjectHeader}
           data={acceptedProject}
          currentPage={currentPage}
          isAction={false}
          handleStatus={onhandleStatus}
          onDownload={handleDownload}
          onUpload={handleUplad}
          
        />
      </Box>

      <Box mt={8}>
        <Text>Projects requests</Text>
      </Box>
      <Box mt={4}>
        <ReusableTable
          headers={projectRequestsHeader}
          data={designerProject}  
          handleStatus={onhandleStatus}        
          onDownload={handleDownload}
          onUpload={handleUplad}
          isAction={false} 
        />
      </Box>
    </Box>
  );
};

export default Deskboard;
