import {
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  VStack,
  HStack,
  MenuDivider,
  IconButton,
  Button,
  Link,
  Text,
  useStatStyles,
} from "@chakra-ui/react";
import secureLocalStorage from "react-secure-storage";
import AuthService from "../../utils/AuthService";
import { useEffect } from "react";
import { useState } from "react";

export default function UserMenu({ handleSignOut }) {
  const userId = secureLocalStorage.getItem("id");
 const userData= secureLocalStorage.getItem("user");
  const designerId = secureLocalStorage.getItem("designerId");
  const [api,getApi]=useState(true);
  const[user,setUser]=useState();
  const signOutUser = () => {
    localStorage.clear();
    handleSignOut();
  };


  return (
    <HStack spacing={2}>
      {/* <IconButton variant="ghost">
        <BiHeart size="1.5rem" />
      </IconButton>
      <IconButton variant="ghost">
        <BiBell size="1.5rem" />
      </IconButton> */}
      <Menu isLazy>
        <MenuButton as={Button} px={0} py={0} rounded="full" >
             {userId ? <Avatar size="sm"
              name={`${userData?.firstName} ${userData?.lastName}`}
              //  src="/user-placeholder.png"
            />
            : 
           <Avatar size="sm" 
name={`${userData?.firstName} ${userData?.lastName}`}
// src="/user-placeholder.png" 
color="red.500"
              />}
        </MenuButton>
        <MenuList zIndex={5} border="1px solid">
        {userId ?
          <Link href="/user-profile" _hover={{ textDecoration: "none" }}>
            <MenuItem  _hover={{ bg: "orange.50" }}>
              <Text fontWeight="500">Profile</Text>
            </MenuItem>
          </Link>
          :
          <Link href="/designer/profile" _hover={{ textDecoration: "none" }}>
            <MenuItem  _hover={{ bg: "orange.50" }}>
              <Text fontWeight="500">Profile</Text>
            </MenuItem>
          </Link>
        }
          {/* <MenuDivider /> */}
          {userId ?
          <Link href="/projects" _hover={{ textDecoration: "none" }}>
            <MenuItem  _hover={{ bg: "orange.50" }}>
              <Text fontWeight="500">Projects</Text>
            </MenuItem>
          </Link>
          :
          <Link href="/designer/designerProject" _hover={{ textDecoration: "none" }}>
          <MenuItem  _hover={{ bg: "orange.50" }}>
            <Text fontWeight="500">Projects</Text>
          </MenuItem>
        </Link>
          }
          {/* <MenuDivider /> */}
          <MenuItem onClick={signOutUser}  _hover={{ bg: "orange.50" }}>
            <Text fontWeight="500">Sign Out</Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}
