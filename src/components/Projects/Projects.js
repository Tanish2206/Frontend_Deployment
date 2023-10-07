import { Box, Container, SimpleGrid, Heading, useDisclosure } from "@chakra-ui/react";
import ProjectsCard from "./ProjectsCard";
import { useEffect, useState } from "react";
import AuthService from "../../utils/AuthService";
import secureLocalStorage from "react-secure-storage";
import ProjectDetails from "./ProjectDetails";

export default function Projects() {
  const [userProject, setUserProject] = useState([]);
  const [projectData, setProjectData] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedId = secureLocalStorage.getItem("id");
        const userProjects = await AuthService.userProject(storedId);
        setUserProject(userProjects);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchData();
  }, []);

  const handleProject = (data) => {
    setProjectData(data);
    onOpen();
  };

  return (
    <Box>
      <Container maxW="container.xl" py={12} mx="auto">
        {!isOpen ? (
          <>
            <Heading fontSize={["2xl", "3xl"]} color="gray.700" mb={8} textAlign="center">
              My Projects
            </Heading>
            <SimpleGrid columns={[1, 1, 2, 3]} spacing={5}>
              {userProject.map((elem) => (
                <ProjectsCard key={elem.id} cardData={elem} handleProjectData={handleProject} />
              ))}
            </SimpleGrid>
          </>
        ) : (
          <ProjectDetails data={projectData} onClose={onClose} />
        )}
      </Container>
    </Box>
  );
}
