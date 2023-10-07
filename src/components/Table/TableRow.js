
import { BiChevronDown, BiCloudDownload, BiCloudUpload } from 'react-icons/bi';
import {
  Box,
  Button,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Select,
  Td,
  Tr,
  Input,
  useBreakpointValue,
} from '@chakra-ui/react';

import { useState } from 'react';

const TableRow = ({
  item,
  headers,
  isAction,
  handleStatusChange,
  handleStatusApproval,
  handleDownload,
  handleUpload,
}) => {
  const [color, setColor] = useState();

  const handleChangeStatus = (event) => {
    const value = event.target.value;
    setColor(value);
    handleStatusChange(value, item);
  };

  const handleUploadFile = (type,item) => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
  
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
  
      // Now you have the selected file, you can do something with it.
      // For example, you can send it to a server or process it locally.
     
      handleUpload(file,item);
      // Close the file input
      fileInput.remove();
    });
  
    // Trigger the file input click event
    fileInput.click();
  };
  
  // const handleChangeApproval = (event) => {
  //   const value = event.target.value;
  //   setColor(value);
  //   handleStatusApproval(value, item);
  // };

  // Use useBreakpointValue to get the current breakpoint
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (  
    <Tr key={item.id}>
      {headers?.map((header) => (
        <Td key={header.id}>
          {header?.label === 'Status' ? (
            <Box position="relative" display="inline-block">
              <Select
                value={item[header.key]}
                onChange={handleChangeStatus}
                width={isMobile ? '100%' : '140px'} // Adjust width based on screen size
                borderColor="teal.500" 
                fontWeight="bold"
                bg={
                  color === 'inProgress'
                    ? 'teal.500'
                    : color === 'completed'
                    ? 'green.500'
                    : color === 'cancelled'
                    ? 'red.500'
                    : 'gray.500'
                }
                _hover={{
                  borderColor: 'teal.700',
                }}
              >
                <option value="">Status</option>
                <option value="inProgress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </Select>
            </Box>
          ) : header.key === 'submission' ? (
            <VStack spacing={2} alignItems="center">
              <Button
                colorScheme="teal"
                leftIcon={<BiCloudDownload />}
                onClick={()=>handleDownload(item)}
              >
                Download
              </Button>
              <Button
              colorScheme="purple"
              leftIcon={<BiCloudUpload />}
              onClick={() =>handleUploadFile('someType',item)}
            >
              Upload
            </Button>
            
            </VStack>
          ) : header?.label === 'Approval' ? (
            <Box position="relative" display="inline-block">
              <Select
                value={item[header.key]}
                onChange={handleChangeStatus}
                width={isMobile ? '100%' : '130px'} // Adjust width based on screen size
                borderColor="purple.500"
                color="black"
                bg={
                  color === 'accept'
                    ? 'green.500'
                    : color === 'reject'
                    ? 'red.500'
                    : 'gray.500'
                }
                _hover={{
                  borderColor: 'purple.700',
                }}
              >
                <option value="">Approval</option>
                <option value="accept">Accept</option>
                <option value="reject">Reject</option>
              </Select>
            </Box>

          ):
          header.key==="isPaymentDone"?
          item[header.key]?
          "Done":
          "Pandding"
          
          : item[header.key] ? (

            
            
            item[header.key]
          ) : (
            '----'
          )}
        </Td>
      ))}
      {isAction && (
        <Td>
          <Menu>
            <MenuButton as={Button} rightIcon={<BiChevronDown />}>
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem>Edit</MenuItem>
              <MenuItem>Delete</MenuItem>
            </MenuList>
          </Menu>
        </Td>
      )}
    </Tr>
  );
};

export default TableRow;
