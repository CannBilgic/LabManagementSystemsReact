import React  from "react";
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
import {  useQuery } from "react-query";
import { fetchRole } from "../../../api";
import { Link } from "react-router-dom";



function Role() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["roleData"],
    queryFn: fetchRole,
  });
  
console.log(data)

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <Link to="/laborant/role/create">
      <Button>
        NEW
      </Button>
      </Link>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Role ID</Th>
              <Th>Role Name</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.payload.map((payload) => (
              <Tr>
                <Td>{payload.roleId}</Td>
                <Td> {payload.userRole} </Td>
               
                
               
                <Td>
                  <Button colorScheme="red" variant="outline">

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

export default Role