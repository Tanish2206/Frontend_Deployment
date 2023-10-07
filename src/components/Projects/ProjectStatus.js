// import React from "react";
// import {
//   Box,
//   chakra,
//   Container,
//   Text,
//   HStack,
//   VStack,
//   Flex,
//   useColorModeValue,
//   useBreakpointValue,
// } from "@chakra-ui/react";

// const milestones = [
//   {
//     id: 1,
//     date: "MARCH 30, 2022",
//     title: "Ground floor",
//     description: "Includes ground floor design",
//     completed: true,
//   },
//   {
//     id: 2,
//     date: "July 30, 2021",
//     title: "First floor",
//     description: "Includes second floor designs",
//     completed: true,
//   },
//   {
//     id: 3,
//     date: "July 30, 2018",
//     title: "Second floor",
//     description: "Includes second floor designs",
//     completed: false,
//   },
// ];

// export default function ProjectMilestoneStatus() {
//   const isMobile = useBreakpointValue({ base: true, md: false });
//   const isDesktop = useBreakpointValue({ base: false, md: true });

//   return (
//     <Container maxWidth="7xl" p={{ base: 2, sm: 10 }}>
//       <Flex direction={isMobile ? "column" : "row"} alignItems="center" mb="10px">
//         {milestones.map((milestone) => (
//           <React.Fragment key={milestone.id}>
//             <LineWithDot completed={milestone.completed} />
//             <Card {...milestone} />
//           </React.Fragment>
//         ))}
//       </Flex>
//     </Container>
//   );
// }

// const Card = ({ id, title, description, date, completed }) => {
//   return (
//     <HStack
//       p={{ base: 3, sm: 6 }}
//       bg={completed ? "green.400" : "gray.100"}
//       spacing={5}
//       rounded="lg"
//       alignItems="center"
//     >
//       <Box>
//         <Text fontSize="lg">{date}</Text>

//         <VStack spacing={2} mb={3} textAlign="left">
//           <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
//             {title}
//           </chakra.h1>
//           <Text fontSize="md">{description}</Text>
//         </VStack>
//       </Box>
//     </HStack>
//   );
// };

// const LineWithDot = ({ completed }) => {
//   return (
//     <Flex
//       direction="column"
//       alignItems="center"
//       mt={3}
//       mx={2}
//     >
//       <Box
//         w="10px"
//         h="10px"
//         borderRadius="50%"
//         bg={completed ? "green.400" : useColorModeValue("gray.600", "gray.200")}
//       ></Box>
//       <chakra.span
//         w="1px"
//         flex="1"
//         border="1px solid"
//         borderColor={completed ? "green.400" : useColorModeValue("gray.200", "gray.700")}
//       ></chakra.span>
//     </Flex>
//   );
// };










// import { useState } from 'react';
// import {
//   Box,
//   Container,
//   Heading,
//   Step,
//   StepDescription,
//   StepIcon,
//   StepIndicator,
//   StepNumber,
//   StepSeparator,
//   StepStatus,
//   StepTitle,
//   Stepper,
// } from '@chakra-ui/react';
// import ClientForm from '../ECR/Requerment';
// import mapTest from '../Map/mapTest';
// import MapTest from '../Map/mapTest';
// const steps = [
//   { title: 'First', description: 'Contact Info' },
//   { title: 'Second', description: 'Date & Time' },
//   { title: 'Third', description: 'Select Rooms' },
//   { title: 'Fourth', description: 'Additional Details' },
//   { title: 'Fifth', description: 'Payment' },
//   { title: 'Sixth', description: 'Confirmation' },
// ];

// export default function ProjectMilestoneStatus() {
//   const [activeStep, setActiveStep] = useState(0);
// //const [getAddress,getAddressData]=useState("");
//   const handleStepClick = (index) => {
//     setActiveStep(index);
//   };
//  const getAddressData=(data)=>{

// }

//   const renderStepContent = (stepIndex) => {
//     switch (stepIndex) {
//       case 0:
//         return (
//           <Box>
//            <ClientForm/>
//           </Box>
//         );
//       case 1:
//         return (
//           <Box>
//             {/* <Heading as="h2" size="md" mb={4}>
//               Date & Time Selection
//             </Heading>
//             <Box>
//               <label htmlFor="date">Date:</label>
//               <input type="date" id="date" />
//             </Box>
//             <Box>
//               <label htmlFor="time">Time:</label>
//               <input type="time" id="time" />
//             </Box> */}
//             <MapTest ondata={getAddressData} data={"hello"}/>
//             {/* Add more date & time selection components as needed */}
//           </Box>
//         );
//       case 2:
//         return (
//           <Box>
//             <Heading as="h2" size="md" mb={4}>
//               Select Rooms
//             </Heading>
//             <Box>
//               <input type="checkbox" id="room1" />
//               <label htmlFor="room1">Room 1</label>
//             </Box>
//             <Box>
//               <input type="checkbox" id="room2" />
//               <label htmlFor="room2">Room 2</label>
//             </Box>
//             {/* Add more room selection components as needed */}
//           </Box>
//         );
//       case 3:
//         return (
//           <Box>
//             <Heading as="h2" size="md" mb={4}>
//               Additional Details Form
//             </Heading>
//             <Box>
//               <label htmlFor="details">Details:</label>
//               <textarea id="details" />
//             </Box>
//             {/* Add more additional details form fields or components as needed */}
//           </Box>
//         );
//       case 4:
//         return (
//           <Box>
//             <Heading as="h2" size="md" mb={4}>
//               Payment Form
//             </Heading>
//             <Box>
//               <label htmlFor="cardNumber">Card Number:</label>
//               <input type="text" id="cardNumber" />
//             </Box>
//             <Box>
//               <label htmlFor="expiryDate">Expiry Date:</label>
//               <input type="text" id="expiryDate" />
//             </Box>
//             {/* Add more payment form fields or components as needed */}
//           </Box>
//         );
//       case 5:
//         return (
//           <Box>
//             <Heading as="h2" size="md" mb={4}>
//               Confirmation Page
//             </Heading>
//             <Box>
//               <p>Your booking has been confirmed!</p>
//               {/* Add more confirmation details or components as needed */}
//             </Box>
//           </Box>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <Container maxW="md" display="flex" flexDirection="column" alignItems="center">
//       <Heading as="h1" size="lg" my={8}>
//         Project Milestone Status
//       </Heading>

//       <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
//         <Stepper size="lg" index={activeStep}>
//           {steps.map((step, index) => (
//             <Box key={index} mx={2}>
//               <Step
//                 onClick={() => handleStepClick(index)}
//                 cursor="pointer"
//                 sx={{
//                   _hover: {
//                     background: activeStep !== index ? 'gray.100' : undefined,
//                   },
//                 }}
//               >
//                 <StepIndicator>
//                   <StepStatus
//                     complete={<StepIcon />}
//                     incomplete={<StepNumber />}
//                     active={<StepNumber />}
//                   />
//                 </StepIndicator>

//                 <Box flexShrink="0">
//                   <StepTitle>{step.title}</StepTitle>
//                   <StepDescription>{step.description}</StepDescription>
//                 </Box>

//                 <StepSeparator borderColor={activeStep === index ? 'green.500' : 'gray.200'} />
//               </Step>
//             </Box>
//           ))}
//         </Stepper>
//       </Box>

//       <Box mt={8}>
//         {renderStepContent(activeStep)}
//       </Box>
//     </Container>
//   );
// }



