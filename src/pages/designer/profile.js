import React, { useState, useEffect } from 'react';
import DesignerProfile from '../../components/Designer/DesignerProfile';
import { Box } from '@chakra-ui/react';
import secureLocalStorage from 'react-secure-storage';
import AuthService from '../../utils/AuthService';

const Profile = () => {
  const [api, setApi] = useState(true);
  const [designer, setDesigner] = useState('');
  const designerId = secureLocalStorage.getItem('designerId');

 

  const userData = () => {
    if (designerId) {
      AuthService.getDesignerProfile(designerId)
        .then((response) => {
          if (response.status === 200) {
       
            setDesigner(response?.data?.response_data);
            setApi(false);
          } else {
           
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    api && userData();
  }, [api]);

  return (
    <Box maxWidth="1200px" mx="auto" p="4">
      <DesignerProfile DesignerData={designer} />
      {/* Additional content or components can be placed here */}
    </Box>
  );
};

export default Profile;
