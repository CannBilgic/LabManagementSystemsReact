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
import { fetchCreateRole } from "../../../api";

function RoleCreate() {
    const formik = useFormik({
        initialValues: {
          userRole: "",
        },
        onSubmit: async (values, bag) => {
          try {
            const registerResponse = await fetchCreateRole({
                userRole: values.userRole,
            });
            console.log(registerResponse);
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
            <Heading>Role Create</Heading>
          </Box>
          <Box my={5} textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>User Role</FormLabel>
                <Input
                  name="userRole"
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.userRole}
                ></Input>
              </FormControl>

              
              <Button mt={4} width="full" type="sumbit">
                create
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default RoleCreate