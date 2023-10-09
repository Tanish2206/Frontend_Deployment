import { Box, Container, SimpleGrid, Heading } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import AuthService from "../../utils/AuthService";
import secureLocalStorage from "react-secure-storage";

import DesignerCart from "./DesignerCart";
import DesignerProjectDetails from "./DesignerProjectDetails";

export default function DesignerProject() {
  const [designerProject, setDesignerProject] = useState();
  const [show,setShow]=useState(false);
  const [projectData,setProjectData]=useState();
  const storedId = secureLocalStorage.getItem("designerId");
  useEffect(() => {
    const setProjectData = async () => {
      try {
        const response = await AuthService.getDesignerProject(storedId);
        if (response?.status === 200) {
          setDesignerProject(response?.data?.projects);
        }
      } catch (error) {
        throw Error(error);
      }
    };
    setProjectData();
  }, [storedId]); // Include storedId in the dependency array
  

  const handleProject=(data)=>{
    setProjectData(data);
    setShow(true);
  }
 
  return (
    <Box>
      {!show ?
      <Container maxW="container.xl" py={12} mx="auto">
        <Heading fontSize={["2xl", "3xl"]} color="gray.700" mb={8}>
          My Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 3, 4]} spacing={5}>
          {designerProject?.map((elem) => (
            <DesignerCart key={elem?.id} cardData={elem} 
            handleProjectData={handleProject}
            />
          ))}
        </SimpleGrid>
      </Container>
      :
      <DesignerProjectDetails
      data={projectData}
      setShow={setShow}
      />
}
    </Box>
  );
}
