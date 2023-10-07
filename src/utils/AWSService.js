import instance from "./Axios";
const getBanners = async () => {
  try {
    const response = await instance.get("/banner");
    return response?.data ? response : "";
  } catch (error) {
   
    return error;
  }
};

const getPupularDesigns = async () => {
  try {
    const response = await instance.get("/pupular-designs");
    return response?.data ? response : "";
  } catch (error) {
    
    return error;
  }
};

const AWSService = {
  getBanners,
  getPupularDesigns,
};
export default AWSService;
