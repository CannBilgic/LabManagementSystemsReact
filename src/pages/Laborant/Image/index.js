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
import { getImage ,} from "../../../api";
import { Link } from "react-router-dom";

function Image() {

  const { isLoading, error, data } = useQuery({
    queryKey: ["ImageData"],
    queryFn: getImage,
  });

 


  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      
      <Link to="/laborant/image/create">
        <Button>
          Create
        </Button>
      </Link>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Image  ID</Th>
              <Th>Image  name</Th>
              
            </Tr>
          </Thead>
          <Tbody>
            {data.payload.map((payload) => (
              <Tr>
                <Td>{payload.imageId}</Td>
                <Td>{payload.name}</Td>
                
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>


    </div>
  )
}

export default Image