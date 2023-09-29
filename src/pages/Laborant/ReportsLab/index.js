import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
 
} from "@chakra-ui/react";
import moment from "moment";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchReportList, deleteReport } from "../../../api";
import { Link } from "react-router-dom";


function ReportsLab() {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["reportData"],
    queryFn: fetchReportList,
  });
  const deleteMutation = useMutation(deleteReport, {
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ["reportData"] });
    },
  });




  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>





      <Link to="/laborant/report/create">
        <Button>NEW</Button>
      </Link>
      <Link to="/laborant/report/sort">
        <Button>List Date</Button>
      </Link>
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
              <Th>Delete</Th>
              <Th>Edit</Th>
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
                    <Link to={`/report/${payload.reportId}`}>DETAILS</Link>
                  </Button>
                </Td>
                <Td>
                  <Button
                    colorScheme="red"
                    variant="outline"
                    onClick={() => {
                      deleteMutation.mutate(payload.reportId);
                    }}
                  >
                    DELETE
                  </Button>
                </Td>
                <Td>
                  <Button colorScheme="green" variant="outline">
                    <Link to={`/laborant/report/${payload.reportId}`}>
                      UPDATE
                    </Link>
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

export default ReportsLab;
