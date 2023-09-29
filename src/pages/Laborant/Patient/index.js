import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { fetchPatientNames } from "../../../api";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deletePatient, fetchPatient } from "../../../api";
import { Link } from "react-router-dom";

function Patient() {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["patientData"],
    queryFn: fetchPatient,
  });

  const deleteMutation = useMutation(deletePatient, {
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ["patientData"] });
    },
  });
  const [dataList, setData] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: "",
      surName: "",
      TC: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        var FormData = require("form-data");
        var data = new FormData();
        data.append("name", values.name);
        data.append("surName", values.surName);
        data.append("TC", values.TC);
        console.log(data);
        const data2 = await fetchPatientNames(data);
        setData(data2);

        console.log(data2);
      } catch (e) {
        console.log("Hata");
      }
    },
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <div>
        <Flex display="flex">
          <Box pt={10}>
            <Box textAlign="center">
              <Heading>Patient Find </Heading>
            </Box>
            <Box my={5} textAlign="left">
              <form onSubmit={formik.handleSubmit}>
                <FormControl>
                  <FormLabel> Name</FormLabel>
                  <Input
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.onBlur}
                    value={formik.values.name}
                  ></Input>
                </FormControl>

                <FormControl>
                  <FormLabel>Surname</FormLabel>
                  <Input
                    name="surName"
                    onChange={formik.handleChange}
                    onBlur={formik.onBlur}
                    value={formik.values.surName}
                  ></Input>
                </FormControl>
                <FormControl>
                  <FormLabel> TC</FormLabel>
                  <Input
                    name="TC"
                    onChange={formik.handleChange}
                    onBlur={formik.onBlur}
                    value={formik.values.TC}
                  ></Input>
                </FormControl>

                <Button mt={4} width="full" type="sumbit">
                  Find
                </Button>
              </form>
            </Box>
          </Box>
          <Flex display="flex">
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Patient ID</Th>
                    <Th>Patient Name</Th>
                    <Th>Patient SurName</Th>
                    <Th>Patient TC</Th>
                    <Th>User Name</Th>
                    <Th>Role </Th>
                    <Th>Edit</Th>
                    <Th>Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {console.log(dataList.payload)}
                  {dataList.payload?.map((dataList) => (
                    <Tr>
                      <Td>{dataList.patientId}</Td>
                      <Td> {dataList.name} </Td>
                      <Td>{dataList.surName} </Td>
                      <Td> {dataList.tc} </Td>
                      <Td> {dataList.userName} </Td>
                      <Td> {dataList.role.userRole} </Td>

                      <Td>
                        <Button colorScheme="green" variant="outline">
                          <Link to={`/laborant/patient/${dataList.patientId}`}>
                            Update
                          </Link>
                        </Button>
                      </Td>
                      <Td>
                        <Button
                          colorScheme="red"
                          variant="outline"
                          onClick={() => {
                            deleteMutation.mutate(dataList.patientId);
                          }}
                        >
                          DELETE
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Flex>
        </Flex>
      </div>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Patient ID</Th>
              <Th>Patient Name</Th>
              <Th>Patient SurName</Th>
              <Th>Patient TC</Th>
              <Th>User Name</Th>
              <Th>Role </Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.payload.map((payload) => (
              <Tr>
                <Td>{payload.patientId}</Td>
                <Td> {payload.name} </Td>
                <Td>{payload.surName} </Td>
                <Td> {payload.tc} </Td>
                <Td> {payload.userName} </Td>
                <Td> {payload.role.userRole} </Td>

                <Td>
                  <Button colorScheme="green" variant="outline">
                    <Link to={`/laborant/patient/${payload.patientId}`}>
                      Update
                    </Link>
                  </Button>
                </Td>
                <Td>
                  <Button
                    colorScheme="red"
                    variant="outline"
                    onClick={() => {
                      deleteMutation.mutate(payload.patientId);
                    }}
                  >
                    DELETE
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Patient;
