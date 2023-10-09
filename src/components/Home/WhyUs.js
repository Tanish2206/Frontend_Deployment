import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { WhyUsfeatures } from '../../utils/ConstantFields';

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction="row" align="center">
      <Flex w={8} h={8} align="center" justify="center" rounded="full" bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function WhyUs() {
  const iconBg = useColorModeValue('gray.100', 'gray.700'); // Move the hook outside of the map function

  return (
    <Box bg="orange.200" my={12}>
      <Container maxW="l" py={12} ms={2}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4} marginLeft={{ base: '0', md: '4' }}>
            <Heading color="gray.700" fontSize={"3xl"}>
              Why Us?
            </Heading>
            <Text color="gray.500" fontSize="xl" marginLeft={{ base: '0', md: '4' }}>
              We provide custom design solutions and quality development services at an affordable price.
            </Text>
            <Stack
              spacing={4}
              divider={<StackDivider borderColor={iconBg} />} 
              marginLeft={{ base: '0', md: '4' }}
            >
              {WhyUsfeatures?.map((feature, index) => (
                <Feature
                  key={index}
                  icon={
                    <Icon as={IoCheckmarkDoneCircleOutline} color={feature?.iconColor} w={5} h={5} />
                  }
                  iconBg={iconBg} 
                  text={feature?.text}
                  marginLeft={{ base: '0', md: '4' }}
                />
              ))}
            </Stack>
          </Stack>
          <Flex marginLeft={{ base: '0', md: '4' }} marginTop={{ base: '4', md: '0' }} me="4rem">
            <Image
              rounded="md"
              alt="feature image"
              src="/whyUs.png"
              objectFit="cover"
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
