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
import { fetchRegisterPatient } from "../../../api";
import { useAuth } from "../../../Contexts/AuthContext";

function Signup() {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      name: "",
      surName: "",
      password: "",
      userName: "",
      roleId: {
        roleId: 0,
      },
      tc: 0,
    },
    onSubmit: async (values, bag) => {
      try {
        const registerResponse = await fetchRegisterPatient({
          name: values.name,
          surName: values.surName,
          password: values.password,
          userName: values.userName,
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
            <Heading>Patient Sign Up</Heading>
          </Box>
          <Box my={5} textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.name}
                ></Input>
              </FormControl>

              <FormControl>
                <FormLabel>Sur Name</FormLabel>
                <Input
                  name="surName"
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
                <FormLabel>TC</FormLabel>
                <Input
                  name="tc"
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.tc}
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

export default Signup;
