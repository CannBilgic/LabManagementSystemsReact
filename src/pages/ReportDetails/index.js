import moment from "moment";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchReport } from "../../api";
import { Box, Heading, Stack, StackDivider, Text } from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
function ReportDetails() {
  const { reportId } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["reportData", reportId],
    queryFn: () => fetchReport(reportId),
  });

  console.log(data);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <Grid templateColumns="repeat(2, 1fr)" >
        <GridItem w='100%' h='10'>
          <Card ml="60px" mr="100px">
            <CardHeader>
              <Heading as="h1" size="4xl">
                {data.payload.diagnosis}
              </Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Report ID
                  </Heading>
                  <Text pt="4" fontSize="md">
                    {data.payload.reportId}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Patient Information
                  </Heading>
                  <Text pt="4" fontSize="md">
                    Patient Name&Surname: {data.payload.patient.name}{" "}
                    {data.payload.patient.surName}
                  </Text>

                  <Text pt="4" fontSize="md">
                    Hasta TC: {data.payload.patient.tc}{" "}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Laborant Information
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Laborant Name&Surname: {data.payload.laborant.laborantName}{" "}
                    {data.payload.laborant.laborantSurName}
                  </Text>
                  <Text pt="2" fontSize="sm">
                    Laborant No: {data.payload.laborant.hospitalIdNo}
                  </Text>
                </Box>
                diagnosisDetail
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Diagnosis Details
                  </Heading>
                  <Text pt="4" fontSize="md">
                    {data.payload.diagnosisDetail}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Create Date
                  </Heading>
                  <Text pt="4" fontSize="md" as="ins">
                    {moment(data.payload.createdDate).format("DD/MM/YYYY")}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    File No
                  </Heading>
                  <Text pt="2" fontSize="md">
                    {data.payload.fileNo}
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem >
          <Card maxW='md'>
          <Heading size="3xl" textTransform="uppercase" as="ins">
                    Report Image
                  </Heading>
          <img
            crossorigin="anonymous"
            alt=""
            src={`data:image/jpeg;base64,${data.payload.image.file}`}
          />
          </Card>
        
        </GridItem>
      </Grid>
    </div>
  );
}

export default ReportDetails;
