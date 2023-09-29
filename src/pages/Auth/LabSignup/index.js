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
import { fetchRegisterLab } from "../../../api";
import { useAuth } from "../../../Contexts/AuthContext";

function LabSignUp() {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
        laborantName: "",
        laborantSurName: "",
        password: "",
        hospitalIdNo: "",
        userName: "",
        roleId: {
          roleId: 0
        }
    },
    onSubmit: async (values, bag) => {
      try {
        const registerResponse = await fetchRegisterLab({
          laborantName: values.laborantName,
          laborantSurName: values.laborantSurName,
          password: values.password,
          hospitalIdNo: values.hospitalIdNo,
          userName:values.userName,
          roleId: {
            roleId: values.roleId,
          },
          tc: values.tc,
        });
        console.log(registerResponse);
        login(registerResponse);
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Laborant Sign Up</Heading>
          </Box>
          <Box my={5} textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>Laborant Name</FormLabel>
                <Input
                  name="laborantName"
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.name}
                ></Input>
              </FormControl>

              <FormControl>
                <FormLabel>Laborant SurName</FormLabel>
                <Input
                  name="laborantSurName"
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.surName}
                ></Input>
              </FormControl>

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

              <FormControl>
                <FormLabel>Role ID</FormLabel>
                <Input
                  name="roleId"
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.roleId}
                ></Input>
              </FormControl>

              <FormControl>
                <FormLabel>hospital Id No</FormLabel>
                <Input
                  name="hospitalIdNo"
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.hospitalIdNo}
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
  );
}

export default LabSignUp;
