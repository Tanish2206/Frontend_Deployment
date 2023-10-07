import { VStack, Table, Tbody, Tr, Td, Tag, Heading, Select, Input,Button,Flex,Text} from '@chakra-ui/react';
import { useState,useEffect } from 'react';

const DesignerSingleInfo = ({ 
  showProject,
  onSubmit,
  onhandelMedia,
  submitMedia 
}) => {
    const [projectStatus,setProjectStatus]=useState();
  
     const submitStatus=()=>{
      onSubmit(projectStatus);
     }
     const  handleUpload = (event, type) => {
      onhandelMedia(event,type);
    };

  
    useEffect(() => {
      if (showProject) {
        setProjectStatus(showProject)
      } 
    }, [showProject]);
  return (
    <VStack align="stretch" spacing={4}>
      <Heading
        as="h2"
        size="xl"
        color="orange.500"
        textAlign="center"
        bg="white"
        p={4}
        boxShadow="md"
      >
        {showProject?.title}
      </Heading>
      <Table variant="simple">
        <Tbody>
          <Tr>
            <Td>Description</Td>
            <Td>{showProject?.description}</Td>
          </Tr>
         
          {/* Add the new fields here */}
          <Tr>
            <Td>Project Type</Td>
            <Td>{showProject?.projectType}</Td>
          </Tr>

          <Tr>
            <Td>Payment</Td>
            <Td>
              {!showProject?.isPaymentDone ? (
                <Tag colorScheme="green">Paid</Tag>
              ) : (
                <Tag colorScheme="red">Unpaid</Tag>
              )}
            </Td>
          </Tr>

          <Tr>
            <Td>Site Visit Required</Td>
            <Td>
              {showProject?.isSiteVisitRequired ? (
                <Tag colorScheme="orange">Yes</Tag>
              ) : (
                <Tag colorScheme="red">No</Tag>
              )}
            </Td>
          </Tr>

          <Tr>
            <Td>Site Irregular</Td>
            <Td>{showProject?.isSiteIrregular ? 'Yes' : 'No'}</Td>
          </Tr>

          <Tr>
            <Td>Latitude</Td>
            <Td>{showProject?.latitude}</Td>
          </Tr>

          <Tr>
            <Td>Longitude</Td>
            <Td>{showProject?.longitude}</Td>
          </Tr>

          <Tr>
            <Td>Length</Td>
            <Td>{showProject?.length}</Td>
          </Tr>

          <Tr>
            <Td>Width</Td>
            <Td>{showProject?.width}</Td>
          </Tr>

          <Tr>
            <Td>Project Status</Td>
            <Td>
            {showProject?.projectStatus}
            </Td>
          </Tr>
          {/* End of new fields */}
          <Tr>
            <Td>maximumIterations</Td>
            <Td>{showProject?.maximumIterations}</Td>
          </Tr>

          <Tr>
            <Td>Total Amount</Td>
            <Td>{showProject?.totalAmount}</Td>
          </Tr>

          <Tr>
            <Td>Paid Amount</Td>
            <Td>{showProject?.paidAmount}</Td>
          </Tr>
          <Tr>
          <Td>Paid Amount</Td>
          <Td>{showProject?.paidAmount}</Td>
        </Tr>
        <Tr>
            <Td>Update Project Status By Desginer</Td>
            <Td>
              <Input 
                value={ projectStatus?.projectStatusByDesigner|| ""}
                name="projectStatusByDesigner"
                type='text'
                variant="filled"
                borderColor="orange.400"
                bg="white"
                boxShadow="md"
                onChange={(e) => {
                  const { name,value } = e.target;
                  setProjectStatus({[name]:value});
                }}
              />
            </Td>
          </Tr>
          <Tr>
          
            <Td colSpan={2} textAlign="center">
              <Button onClick={submitStatus} colorScheme="orange">
                Update Project Status
              </Button>
            </Td>
          </Tr>

         
          {/* Select Images */}
          <Tr>
            <Td>Select Images</Td>
            <Td>
              <Input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => handleUpload(e, 'image')}
                 />
            </Td>
          </Tr>

          {/* Select Videos */}
          <Tr>
            <Td>Select Videos</Td>
            <Td>
              <Input
                type="file"
                accept="video/*"
                multiple
                onChange={(e) => handleUpload(e, 'video')}
              />
            </Td>
          </Tr>

          {/* Select Files */}
          <Tr>
            <Td>Select Files</Td>
            <Td>
              <Input
                type="file"
                multiple
                onChange={(e) => handleUpload(e, 'file')}
              />
            </Td>
          </Tr>

          {/* Upload Media Button */}
          <Tr>
            <Td colSpan={2} textAlign="center">
              <Button colorScheme="blue" onClick={() => submitMedia()}>
                Upload Media
              </Button>
            </Td>
          </Tr>
          {/* ...Other fields... */}
        </Tbody>
      </Table>
    </VStack>
  );
};

export default DesignerSingleInfo;
