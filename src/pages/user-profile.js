import UserProfile from "../components/Auth/UserProfile"
import Footer from "@/components/Home/Footer"
import secureLocalStorage from "react-secure-storage";
import { useState,useEffect } from "react";
import AuthService from "../utils/AuthService";
export default function Projects() {

  const Auth = secureLocalStorage.getItem("authToken");
  const userId = secureLocalStorage.getItem("id");
  const [userProfileData, setProfileData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await AuthService.getProfile(userId)
      .then((response) => {
        setProfileData(response);
       
      })
      .catch((error) => {
       
      });
  }
  return (
    <>
    <UserProfile
    userProfileData={userProfileData}
    />
    <Footer/>
    </>
  )
}