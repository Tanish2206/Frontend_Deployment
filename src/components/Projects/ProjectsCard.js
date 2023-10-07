import { Box, Heading, Text, Img, Flex, Center, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import AuthService from "../../utils/AuthService";
import { useDispatch } from "react-redux";
import { add } from "../../utils/Store/CartSlice";
export default function CategoriesCard({ cardData,handleProjectData }) {

  const dispatch=useDispatch();
  const router = useRouter();
const handleChange=(data)=>{
  handleProjectData(data);
// dispatch(add(data))
//   router.push({
//       pathname: '/projects/project-details',
//        query: { data: JSON.stringify(data) },
//     });
}
  return (
    <Box h="100%">
      <Center h="100%">
        <Flex
          h="100%"
          cursor="pointer"
          transition="all 0.4s ease"
          _hover={{
            transform: "translateY(-5px)",
            transition: "all 0.4s ease",
          }}
          borderRadius="md"
          overflow="hidden"
        >
          <Link 
          //  href={`/projects/project-details/${1}`}
        
           _hover={{ textDecoration: "none" }}>
            <Box
              w="xs"
              rounded={"sm"}
              my={5}
              overflow={"hidden"}
              bg="white"
              h="100%"
            >
              <Box h={"200px"}>
                <Img
                  src={cardData?.siteImagesUrls[0]}
                  roundedTop={"sm"}
                  objectFit="cover"
                  h="full"
                  w="full"
                  alt={"Blog Image"}
                  onClick={()=>{handleChange(cardData)}}
                />
              </Box>
              <Box py={4}>
                <Heading color={"black"} fontSize={"l"} noOfLines={1}>
                  {cardData?.title}
                </Heading>
                <Text color={"gray.500"} noOfLines={2}>
                  {cardData?.description}
                </Text>
              </Box>
            </Box>
          </Link>
        </Flex>
      </Center>
    </Box>
  );
}
