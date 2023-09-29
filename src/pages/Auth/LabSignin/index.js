import React from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { fetchLoginLab } from "../../../api";
import { useAuth } from "../../../Contexts/AuthContext";
function LabSignin() {
  const { login } = useAuth();
  const formik =useFormik({
    initialValues:{
      userName: "",
      password: "",
    },
    onSubmit: async(values)=>{
      console.log(values);
      try{
        var FormData=require("form-data");
        var data = new FormData();
        data.append("userName",values.userName);
        data.append("password",values.password);
        const data2 = await fetchLoginLab(data);
        console.log(data2);
        login(data2);
      }catch(e){
        console.log("Hata")
      }
    },
  })
    



  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Laborant Sign In</Heading>
          </Box>
          <Box my={5} textAlign="left">
            <form onSubmit={formik.handleSubmit}>
          
              <FormControl>
                <FormLabel>User Name</FormLabel>
                <Input
                  name="userName"
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.userName}
                ></Input>
              </FormControl>

              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.password}
                ></Input>
              </FormControl>

              
              <Button mt={4} width="full" type="sumbit">
                Sign Up
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default LabSignin