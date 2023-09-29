
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Box,
  Heading,
} from "@chakra-ui/react";

import { Button } from "@chakra-ui/react";
import {  useMutation, useQuery, useQueryClient } from "react-query";
import { deleteLaborant, fetchLaborant } from "../../../api";


import React, { useState } from "react";
import { fetchLabName } from "../../../api";
import { useFormik } from "formik";
function Lab() {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["LabData"],
    queryFn: fetchLaborant,
  });
  const deleteMutation = useMutation(deleteLaborant,{
    onSuccess:()=>
    {return queryClient.invalidateQueries ({queryKey: ["LabData"]})}
  })
  
  const [dataList, setData] = useState([]);
  
  const formik = useFormik({
    initialValues: {
      laborantName: "",
      laborantSurName: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        var FormData = require("form-data");
        var data = new FormData();
        data.append("laborantName", values.laborantName);
        data.append("laborantSurName", values.laborantSurName);
        console.log(data);
        const data2 = await fetchLabName(data);
        setData(data2);

        console.log(data2);
      } catch (e) {
        console.log("Hata");
      }
    },
  });
  
console.log(data)

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

 
  return (
    <div>
      <div>
        <Flex display="flex">
          <Box pt={10}>
            <Box textAlign="center">
              <Heading>Laborant Find </Heading>
            </Box>
            <Box my={5} textAlign="left">
              <form onSubmit={formik.handleSubmit}>
                <FormControl>
                  <FormLabel> Name</FormLabel>
                  <Input
                    name="laborantName"
                    onChange={formik.handleChange}
                    onBlur={formik.onBlur}
                    value={formik.values.laborantName}
                  ></Input>
                </FormControl>
  
                <FormControl>
                  <FormLabel>Laborant Surname</FormLabel>
                  <Input
                    name="laborantSurName"
                    onChange={formik.handleChange}
                    onBlur={formik.onBlur}
                    value={formik.values.laborantSurName}
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
            <Th>Laborant ID</Th>
            <Th>Laborant Name</Th>
            <Th>Laborant SurName</Th>
            <Th>Laborant Hospital ID</Th>
            <Th>User Name</Th>
            <Th>Role </Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {console.log(dataList.payload)}
          {dataList.payload?.map((dataList) => (
            <Tr>
              <Td>{dataList.laborantId}</Td>
              <Td> {dataList.laborantName} </Td>
              <Td>{dataList.laborantSurName} </Td>
              <Td> {dataList.hospitalIdNo} </Td>
              <Td> {dataList.userName} </Td>
              <Td> {dataList.role.userRole} </Td>
              
              
              <Td>
                <Button colorScheme="red" variant="outline"
                onClick={()=>{
                  deleteMutation.mutate(dataList.laborantId)}}>

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
            <Th>Laborant ID</Th>
            <Th>Laborant Name</Th>
            <Th>Laborant SurName</Th>
            <Th>Laborant Hospital ID</Th>
            <Th>User Name</Th>
            <Th>Role </Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.payload.map((payload) => (
            <Tr>
              <Td>{payload.laborantId}</Td>
              <Td> {payload.laborantName} </Td>
              <Td>{payload.laborantSurName} </Td>
              <Td> {payload.hospitalIdNo} </Td>
              <Td> {payload.userName} </Td>
              <Td> {payload.role.userRole} </Td>
              
              
              <Td>
                <Button colorScheme="red" variant="outline"
                onClick={()=>{
                  deleteMutation.mutate(payload.laborantId)}}>

                  DELETE
                </Button>
              </Td>
              
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  </div>
  )
}

export default Lab