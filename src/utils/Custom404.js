
import { Box, Flex, Heading, keyframes, useBreakpointValue } from '@chakra-ui/react';

const colorGradient = keyframes`
  0% { color: #F85D5D; }
  25% { color: #F8B95D; }
  50% { color: #D6F85D; }
  75% { color: #5DF85D; }
  100% { color: #5DDBF8; }
`;

const Custom404 = () => {
    const headingSize = useBreakpointValue({ base: '2xl', md: '4xl', lg: '6xl' });

    return (
      <Flex
        align="center"
        justify="center"
        minHeight="100vh"
        bgGradient="linear(to-t, #FFFFFF, #F8F8F8)"
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          textAlign="center"
          p={4}
        >
          <Heading
            as="h1"
            fontSize={headingSize}
            fontWeight="bold"
            animation={`${colorGradient} 4s linear infinite alternate`}
          >
            Data Not Found
          </Heading>
          <Box mt={4} color="gray.500">
            The requested data could not be found.
          </Box>
        </Flex>
      </Flex>
    );
};

export default Custom404;
