import {
    Box,
    Center,
    Grid,
    Skeleton,
    useBreakpointValue,
    
  } from '@chakra-ui/react';
  import { useEffect, useState } from 'react';
  import DesignSimple from './DesignSimple';
  import DesignList  from './DesignList';
import AuthService from '../../utils/AuthService';

  // import FilterOptions from './FilterOptions';
  // const products = [
  //     {
  //       image:'/d4.jpg',
  //       brand: 'Brand A',
  //       name: 'Nice Chair, Pink',
  //       price: 57,
  //       originalPrice: 199,
  //       category: 'Furniture',
  //       dimension: '10x20',
  //       plotArea: '200 sqft',
  //       direction: 'North',
  //     },
  //     {
  //       image:'d6.jpg',
  //       brand: 'Brand A',
  //       name: 'Nice Chair, Pink',
  //       price: 57,
  //       originalPrice: 199,
  //       category: 'Furniture',
  //       dimension: '10x20',
  //       plotArea: '200 sqft',
  //       direction: 'North',
  //     },
  //     {
  //       image: 'd4.jpg',
  //       brand: 'Brand A',
  //       name: 'Nice Chair, Pink',
  //       price: 57,
  //       originalPrice: 199,
  //       category: 'Furniture',
  //       dimension: '10x20',
  //       plotArea: '200 sqft',
  //       direction: 'North',
  //     },
  //     {
  //       image: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  //       brand: 'Brand A',
  //       name: 'Nice Chair, Pink',
  //       price: 57,
  //       originalPrice: 199,
  //       category: 'Furniture',
  //       dimension: '10x20',
  //       plotArea: '200 sqft',
  //       direction: 'North',
  //     },
  //     {
  //       image: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  //       brand: 'Brand A',
  //       name: 'Nice Chair, Pink',
  //       price: 57,
  //       originalPrice: 199,
  //       category: 'Furniture',
  //       dimension: '10x20',
  //       plotArea: '200 sqft',
  //       direction: 'North',
  //     },
  //     {
  //       image: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  //       brand: 'Brand A',
  //       name: 'Nice Chair, Pink',
  //       price: 57,
  //       originalPrice: 199,
  //       category: 'Furniture',
  //       dimension: '10x20',
  //       plotArea: '200 sqft',
  //       direction: 'North',
  //     },
  //   // Products data here...
  // ];
  
  
  const DesignCategory = ({label,title}) => {

    const [show, setShow] = useState(false);
    const [showProduct, setShowProduct] = useState(null);
  const [designData,setDesignData]=useState();
    const isLoading = designData.length === 0;
  
    const handleShowDetails = (data) => {
      setShowProduct(data);
      setShow(true);
    };
  useEffect(()=>{
    if(title){
AuthService.getDesign(title,label).then((Response)=>{
  if(Response?.response_code===200){
    setDesignData(Response?.response_data);
  }
  else{
  }
}
   
).catch((error)=>{
})
   }
  },[title,label])
   

  
   
  
    const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });
  
    return (
      <Box py={12} px={[4, 8, 12, 16]}  justifyContent="center">
        <Box maxWidth="1200px" width="100%">
          <Center>
            {isLoading ? (
              <Skeleton height="300px" width="100%" />
            ) : !show ? (
              <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={8}>
                {designData?.map((product, index) => (
                  <DesignSimple
                    key={index}
                    product={product}
                    handleShowDetails={handleShowDetails}
                    label={label}
                   
                  />
                ))}
              </Grid>
            ) : (
             <DesignList 
             setClose={setShow}
             />
            )}
          </Center>
        </Box>
      </Box>
    );
  };
  
  export default DesignCategory;