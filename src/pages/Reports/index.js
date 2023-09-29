import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import { Button } from "@chakra-ui/react";
import moment from "moment";
import { useQuery } from "react-query";
import { fetchReportList } from "../../api";
import { Link } from "react-router-dom";
function Reports() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["reportData"],
    queryFn: fetchReportList,
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Report ID</Th>
              <Th>File No</Th>
              <Th>Diagnosis</Th>
              <Th>Patient Name</Th>
              <Th>Patient SurName</Th>
              <Th>Patient TC</Th>
              <Th>Laborant Name</Th>
              <Th>Create Date</Th>
              <Th>Report Detail</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.payload.map((payload) => (
              <Tr>
                <Td>{payload.reportId}</Td>
                <Td> {payload.fileNo} </Td>
                <Td>{payload.diagnosis} </Td>
                <Td> {payload.patient.name} </Td>
                <Td> {payload.patient.surName} </Td>
                <Td> {payload.patient.tc} </Td>
                <Td> {payload.laborant.laborantName} </Td>
                <Td> {moment(payload.createdDate).format("DD/MM/YYYY")} </Td>
                <Td>
                  <Button colorScheme="green" variant="outline">
                    <Link to={`/report/${payload.reportId}`}>Details</Link>
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

export default Reports;
