import React, { useState, useEffect, useMemo ,useCallback} from 'react';
import { Box, Flex, SimpleGrid, useBreakpointValue, Modal, ModalOverlay, ModalContent, ModalBody,useDisclosure } from '@chakra-ui/react';
import DesignSimple from './DesignSimple';
import DesignDetails from './DesignDetails';
import FilterOptions from './FilterOptions';
import AuthService from '../../utils/AuthService';
import secureLocalStorage from 'react-secure-storage';
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import VerifyPhone from "../Auth/VerifyPhone";
import Loader from '../../utils/loder';
import Custom404 from '../../utils/Custom404'; 
import axios from 'axios';
import { useRouter } from 'next/router';

const DesignList = ({label, title,authId }) => {
  const userId = secureLocalStorage.getItem("id");
  const Authtoken = secureLocalStorage.getItem("authToken");
  const UserData = secureLocalStorage.getItem("user");
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [ChangeUrl, setChangeUrl] = useState("");
  const [showProduct, setShowProduct] = useState(null);
  const [designData, setDesignData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pay, setPay] = useState(false);
  const [filterOptions, setFilterOptions] = useState({});
  const [isModalOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState("");
  const [data, setData] = useState();
  const [token, setToken] = useState("");
useEffect(()=>{
},[authId])
  useEffect(() => {
    const fetchData = async () => {
      let payload = {};
      if (title === "designCategory") {
        payload = { designCategory: label || '' };
      } else {
        payload = { propertyCategory: label || '' };
      }

      try {
        const response = await AuthService.getDesign(payload);
        if (response?.response_code === 200) {
          setDesignData(response?.response_data || []);
          setIsLoading(false);
        } else {
        }
      } catch (error) {
      }
    };

    fetchData();
  }, [title, label]);

  const handleShowDetails = (data) => {
    setShowProduct(data);
    setShow(true);
  };

  const handleFilter = () => {
    filterApi(filterOptions);
  };

  const filterApi = async (filterOptions) => {
    try {
      const response = await AuthService.getDesign(filterOptions);
      if (response?.response_code === 200) {
        setDesignData(response?.response_data || []);
        setPay(false);
      } else {
       
      }
    } catch (error) {
    
    }
  };

  const handleClearFilter = () => {
    setFilterOptions({
      // designCategory: '',
      // designType: '',
      // propertyCategory: '',
      // propertyType: '',
      // width: '',
      // length: '',
      // facing: '',
      // numberOfFloors: '',
      // vastu: false,
      // isFree: false
    });
    const payload = {};
    filterApi(payload);
  };

 
// ...........................download images and videos ...............................
const handleDownload = useCallback((showDesign,download) => {

  if (secureLocalStorage?.getItem("authToken") && secureLocalStorage.getItem("authToken") !== "") {
    
  if (showDesign && showDesign.designImagesUrls) {
    showDesign.designImagesUrls.forEach((url) => {
      const fileName = url.substring(url.lastIndexOf('/') + 1);
      axios.get(`${process.env.backendBaseUrl}/download/`, {
        params: { url: url },
        responseType: 'blob'
      })
      .then((response) => {
        const blob = new Blob([response.data], { type: response.headers['content-type'] });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.click();
    
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Error downloading the image:', error);
      });
    });
  }

  if (showDesign && showDesign.videosUrls) {
   
    if (Array.isArray(showDesign.videosUrls)) {
      showDesign.videosUrls.forEach((url) => {
        const link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.download = true; // Trigger download for images
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    } else {
      const link = document.createElement("a");
      link.href = showDesign.videosUrls;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.download = true; // Trigger download for single video
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
if(!(secureLocalStorage.getItem("authToken"))){
  handleOpenModal("signIn");
     setChangeUrl(download);
     return ;
   }

}, [Authtoken]);
// login ...............logout ...........Authentication.....
const handleOpenModal = (step) => {
  setCurrentStep(step);
  setIsOpen(true);
};

const handleCloseModal = () => {
  setIsOpen(false);
};

const handleStepChange = (step) => {
  setCurrentStep(step);
};


const renderModalContent = () => {
  switch (currentStep) {
    case "signIn":
      return <Login handleStepChange={handleStepChange} setData={setData}
      handleCloseModal={handleCloseModal} />;
    case "signUp":
      return <Signup handleStepChange={handleStepChange} setData={setData} />;
    case "verify":
      return (
        <VerifyPhone
          handleStepChange={handleStepChange}
          data={data}
          handleCloseModal={handleCloseModal}
          //setUserSignedIn={setUserSignedIn}
          setChange={ChangeUrl}
          setShow={setShow}
          setToken={setToken}
        />
      );
    default:
      return null;
  }
};
//................Razorpay....... intergation............................

const loadScript = async (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const placeOrder = async (data) => {

  const payload={
    "amount": data?.amount,  
    "currency": "INR",
    "userId": secureLocalStorage.getItem("id"),
    "designIds":[data?.id],
  } 
    await AuthService.payment(payload)
      .then((response) => {
        if (response.success) {
          
          const { orderId, amount } = response?.transactionOrder;
  
          const options = {
            key: process.env.RazorPayKey, // Enter the Key ID generated from the Dashboard
            amount: amount,
            currency: "INR",
            name: "Daji",
            description: "",
            image: 'logo.png' ,
            order_id: orderId,
            handler: async function (response) {
              paymentVerify(response);
            },
             prefill: {
              name: `${UserData?.firstNam}-${UserData?.lastName} `,
              email: UserData?.email,
              contact: `91${UserData?.mobile}`,
             },
            theme: {
              color: "#61DAFB",
            },
          };
          const paymentObject = new window.Razorpay(options);
          paymentObject.open();
        }
      })
      .catch((error) => {
        return error.response;
      });
  };
const handleBuyNow = useCallback((data, download) => {

  if (secureLocalStorage.getItem("authToken") && secureLocalStorage.getItem("authToken") !== "") {
    // Implement the logic for handling the "Buy Now" action

    const res = loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    placeOrder(data);
    return ;
  } 
  if(!Authtoken){
 handleOpenModal("signIn");
    setChangeUrl(download);
    return ;
  }
}, [Authtoken, placeOrder]);




const paymentVerify = async (response) => {
  
  const payload = {
    razorpay_order_id: response.razorpay_order_id,
    razorpay_payment_id: response.razorpay_payment_id,
    razorpay_signature: response.razorpay_signature,
  }
 AuthService.paymentVerify(payload)
    .then((res) => {
      if(res?.status===200){
        router.push('/designs')
        setPay(true);
       
      }
       
      // res.data.success && addOrder(response);
    })
    .catch((error) => {
      // return error.response;
    });
};




const columns = useBreakpointValue({ base: 1, sm: 2, md: 2, lg: 3 });

  return (
    <Box px={[4, 8, 12]} py={[4, 8, 12]}>
    <Flex direction={['column', 'column', 'row']} gap={8}>
      {!show && (
        <Box flex={1}>
          <FilterOptions
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
            handleFilter={handleFilter}
            handleClearFilter={handleClearFilter}
          />
        </Box>
      )}
      <Box flex={3}>
        {!show && (
          <>
            {isLoading ? (
              <Loader />
            ) : designData.length === 0 ? (
              <Custom404 />
            ) : (
              <SimpleGrid columns={columns} spacing={6}>
                {designData?.map((design, index) => (
                  <DesignSimple
                    key={index}
                    product={design}
                    handleShowDetails={handleShowDetails}
                    label={label}
                    handleBuyNow={handleBuyNow}
                  />
                ))}
              </SimpleGrid>
            )}
          </>
        )}
      </Box>
    </Flex>

    {show && (
      <DesignDetails
        setShow={setShow}
        showDesign={showProduct}
        handleDownload={handleDownload}
        handleBuyNow={handleBuyNow}
        paidProject={pay}
      />
    )}

    <Modal isOpen={isModalOpen} onClose={handleCloseModal} size={'md'} scrollBehavior={'inside'}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody p={0}>{renderModalContent()}</ModalBody>
      </ModalContent>
    </Modal>
  </Box>

  );
};

export default DesignList;
