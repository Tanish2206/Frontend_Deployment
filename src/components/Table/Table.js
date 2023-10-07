import {
    Box,
    HStack, 
    Table,
    Tbody,
    useDisclosure,
  } from '@chakra-ui/react';

  import TableHeader from './TableHeader';
  import TableRow from './TableRow';
  import { useState } from 'react';
  // Reusable table component
  const ReusableTable = ({
    headers = [],
    data = [],
    currentPage,
    totalPages,
    onPageChange,
    onhandleFileChange,
    onEdit,
    onDelete,
    handleStatus,
    handleApproval,
    isAction = false,
    onDownload,
    onUpload,
  }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
   
    const handlePageChange = (page) => {
      onPageChange(page);
    };
  
    const handleDelete = (id) => {
      setSelectedItemId(id);
      onOpen();
    };
  
    const handleConfirmDelete = () => {
      if (selectedItemId) {
        onDelete(selectedItemId);
        onClose();
        setSelectedItemId(null);
      }
    };
  
    return (
      <Box bg="white" p={5} shadow="lg" borderRadius="lg" overflowX="auto">
        <Table variant="simple">
          <TableHeader headers={headers} />
          <Tbody>
            {data?.map((item) => (
              <TableRow
                key={item.id}
                item={item}
                headers={headers}
                isAction={isAction}
                onhandleFileChange={onhandleFileChange}
                onEdit={onEdit} // Just call onEdit directly, no need for a separate function
                onDelete={() => handleDelete(item?.id)} // Use handleDelete for confirmation
                handleStatusChange={handleStatus}
                handleDownload={onDownload}
                handleUpload={onUpload}
                handleStatusApproval={handleApproval}
              />
            ))}
          </Tbody>
        </Table>  
      </Box>
    );
  };
  
  export default ReusableTable;
  