import {
  Box,
  Container,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import CategoriesCard from "./CategoriesCard";
import Head from "next/head";
import { categories } from "../../utils/ConstantFields";


// export const getStaticProps= async()=>{
//   const data= await categories.json();
//   return{
//     props :{
//       data,
//     }
//   }
// }
export default function Categories({data}) {
  return (
    <>
     <Head>
      <title>Category Page</title>
    </Head>
    <Box>
      <Container maxW={"l"} py={12} ms="2rem">
        <Heading
          fontSize={"3xl"}
          marginLeft={{ base: "0", md: "4" }}
          color="gray.700"
        >
          Explore floor designs
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing={5} me="4rem">
          {categories?.map((elem) => (
            <CategoriesCard cardData={elem} key={elem?.id} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
    </>
  );
}
