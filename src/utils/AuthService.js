
import { config } from "process";
import instance from "./Axios";
const signUp = async (payload) => {
  try {
    const response = await instance.post("register/", payload);
    return response?.data ? response : "";
  } catch (error) {
      return error;
  }
};
const login = async (payload) => {
  try {
    const response = await instance.post("login/", payload);
    return response?.data ? response : "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
};
const verifyOtp = async (payload) => {
  try {
    const response = await instance.post("/verify-otp", payload);

    return response?.data ? response : "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
};
const  
 getProfile = async (payload) => {
    try {
      const response = await instance.get(`/profile/?id=${payload}`);
      //StoreCookie.setItem("userData", JSON.stringify(response?.data));
    
      return response?.data ? response?.data : "";
    } catch (error) {
      // goToLogin(error);
      return error;
    }
  };
  const editProfile = async (id,payload) => {
    try {
      const response = await instance.patch(`/update-user/?id=${id}`,payload);
      //StoreCookie.setItem("userData", JSON.stringify(response?.data));
    
      return response?.data ? response: "";
    } catch (error) {
      // goToLogin(error);
      return error;
    }
  };
  const userProject = async (payload) => {
    try {
      const response = await instance.get(`projects/?clientId=${payload}`);
      //StoreCookie.setItem("userData", JSON.stringify(response?.data));
    
      return response?.data ? response?.data?.response_data : "";
    } catch (error) {
      // goToLogin(error);
      return error;
    }
  };

  const projectDetail = async () => {
    try {
      const response = await instance.get(`project/1?id=${1}`);
      //StoreCookie.setItem("userData", JSON.stringify(response?.data));
    
      return response?.data ? response?.data : "";
    } catch (error) {
      // goToLogin(error);
      return error;
    }
  };

  const postEnquire = async (data) => {
    try {
      const response = await instance.post("/enquiry/",data);
      //StoreCookie.setItem("userData", JSON.stringify(response?.data));
    
      return response?.data ? response : "";
    } catch (error) {
      // goToLogin(error);
      return error;
    }
  };
  const getDesign = async (payload) => {
    try {
      const response = await instance.post(`designs/`,payload);
      //StoreCookie.setItem("userData", JSON.stringify(response?.data));
    
      return response?.data ? response?.data : "";
    } catch (error) {
      // goToLogin(error);
      return error;
    }
  };

  //.......................Rezore Pay..................
  const payment = async (payload) => {
    try {
      const response = await instance.post(`/payment/create-transaction-order/`,payload);
      //StoreCookie.setItem("userData", JSON.stringify(response?.data));
    
      return response?.data ? response?.data : "";
    } catch (error) {
      // goToLogin(error);
      return error;
    }
  };

  const paymentVerify = async (payload) => {
    try {
      const response = await instance.post(`/payment/verify/`,payload);
      //StoreCookie.setItem("userData", JSON.stringify(response?.data));
    
      return response?.data ? response: "";
    } catch (error) {
      // goToLogin(error);
      return error;
    }
  };

  const getBanners = async (payload) => {
    try {
      const response = await instance.get(`/banner??count=${2}`);
      //StoreCookie.setItem("userData", JSON.stringify(response?.data));
      return response?.data ? response: "";
    } catch (error) {
      // goToLogin(error);
      return error;
    }
  };

  const getPopularDesigns = async (payload) => {
    try {
      const response = await instance.get(`/popular-design`);
      //StoreCookie.setItem("userData", JSON.stringify(response?.data));
      return response?.data ? response: "";
    } catch (error) {
      // goToLogin(error);
      return error;
    }
  };

//........ Desiginer.........................................

const registerDesigner = async (payload,config) => {
  try {
    const response = await instance.post(`/designer/register`,payload,config);
    //StoreCookie.setItem("userData", JSON.stringify(response?.data));
    return response?.data ? response: "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
};

const loginDesigner = async (payload) => {
  try {
    const response = await instance.post("/designer/login/", payload);
    return response?.data ? response : "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
};

const verifyDesigner = async (payload) => {
  try {
    const response = await instance.post(`/verify-otp/`,payload);
    //StoreCookie.setItem("userData", JSON.stringify(response?.data));
  
    return response?.data ? response: "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
};

const getDesignerProfile = async (id) => {
  try {
    const response = await instance.get(`/designer/profile?id=${id}`);
    //StoreCookie.setItem("userData", JSON.stringify(response?.data));
    return response?.data ? response: "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
};
const updateDesigner = async (id,payload,config) => {
  try {
    const response = await instance.patch(`/designer/update-designer/?id=${id}`,payload,config);
    //StoreCookie.setItem("userData", JSON.stringify(response?.data));
  
    return response?.data ? response: "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
};

const getDesignerProject = async (id) => {
  try {
    const response = await instance.get(`designer/get-projects?designerId=${id}`);
    //StoreCookie.setItem("userData", JSON.stringify(response?.data));
    return response?.data ? response: "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
}; 

const updateDesignerStatus = async (id,storedId,payload) => {
  try {
    const response = await instance.patch(`/designer/project-status/?projectId=${id}&designerId=${storedId}`,payload);
    //StoreCookie.setItem("userData", JSON.stringify(response?.data));
  
    return response?.data ? response: "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
};

const uploadDesignerMedia = async (payload) => {
  try {
    const response = await instance.post(`/designer/add-media`,payload);
    //StoreCookie.setItem("userData", JSON.stringify(response?.data));
  
    return response?.data ? response: "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
};

const updatedProjectReq = async (payload) => {
  try {
    const response = await instance.post(`/designer/project-response`,payload);
    //StoreCookie.setItem("userData", JSON.stringify(response?.data));
  
    return response?.data ? response: "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
};

const getAcceptedProject = async (id) => {
  try {
    const response = await instance.get(`designer/get-accepted-projects?designerId=${id}`);
  
    //StoreCookie.setItem("userData", JSON.stringify(response?.data));
    return response?.data ? response: "";
  } catch (error) {
    // goToLogin(error);
    return error;
  }
}; 

const AuthService = {
  signUp,
  login,
  verifyOtp,
  getProfile,
  userProject,
  projectDetail,
  editProfile,
  postEnquire,
  getDesign,
  payment,
  paymentVerify,
  getBanners,
  getPopularDesigns,
  registerDesigner,
  verifyDesigner,
  getDesignerProfile,
  updateDesigner,
  loginDesigner,
  getDesignerProject,
  updateDesignerStatus,
  uploadDesignerMedia,
  updatedProjectReq,
  getAcceptedProject
};
export default AuthService;
