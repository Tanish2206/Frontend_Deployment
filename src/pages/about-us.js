import { Box, Heading, Text } from "@chakra-ui/react";
import Head from 'next/head';

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us | Daji.co.in</title>
      </Head>
      <Box
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgGradient="linear(to bottom, #F88E38, #FFFFFF, #E2E2E2, #333333)"
      >
        <Box
          p={{ base: "10px", md: "20px" }}
          bg="rgba(255, 255, 255, 0.9)"
          borderRadius="8px"
          boxShadow="lg"
          color="black"
          maxWidth={{ base: "100%", md: "800px" }}
        >
          <Heading as="h1" textAlign="center" mb="10px">
            About Us
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="bold"
            textAlign="center"
            mb="20px"
          >
            Architectural & Interior Designing Services
          </Text>

          <Text fontSize={{ base: "md", md: "lg" }}>
            DAJI AND ENGINEERS specializes in high-quality designs for all
            ranges and types of projects. Its distinctive Architectural and
            interior design services range from design ideas, feasibility
            studies, construction process, and through to the completion of
            projects. DAJI AND ENGINEERS is committed to creating and delivering
            the very best design solutions to every client. By working closely
            with clients, we constantly strive to develop customized solutions;
            the resultant is always an elegant and functional design solution
            that results in lasting enjoyment and satisfaction for every
            individual client.
          </Text>

          <Heading as="h2" fontSize={{ base: "lg", md: "xl" }} mt="20px">
            Website
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="blue.500">
            http://www.daji.co.in
          </Text>

          <Heading as="h2" fontSize={{ base: "lg", md: "xl" }} mt="20px">
            Phone
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }}>6262620801</Text>

          <Heading as="h2" fontSize={{ base: "lg", md: "xl" }} mt="20px">
            Industry
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }}>
            Architecture and Planning
          </Text>

          <Heading as="h2" fontSize={{ base: "lg", md: "xl" }} mt="20px">
            Company size
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }}>11-50 employees</Text>

          <Heading as="h2" fontSize={{ base: "lg", md: "xl" }} mt="20px">
            Headquarters
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }}>Indore, MP</Text>

          <Heading as="h2" fontSize={{ base: "lg", md: "xl" }} mt="20px">
            Founded
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }}>2020</Text>

          <Heading as="h2" fontSize={{ base: "lg", md: "xl" }} mt="20px">
            Specialties
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }}>
            Architectural Drawing, Rendering, modeling, structural drawing,
            Interior design, MEP design, Walkthrough, and 360
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;
