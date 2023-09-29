import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchReport, updateReport } from "../../../api";
import { Formik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

function ReportLabUpdate() {
  const { reportId } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["reportData", reportId],
    queryFn: () => fetchReport(reportId),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const handleSubmit = (values) => {
    try {
      updateReport(values, reportId);
      console.log("güncellendi");
    } catch (e) {
      console.log("güncellenemedi");
    }
  };

  console.log(data);
  return (
    <div>
      <Text fontSize="2xl"> UPDATE </Text>
      <Formik
        initialValues={{
          fileNo: data.payload.fileNo,
          patientId: {
            patientId: data.payload.patient.patientId,
          },
          imageId: {
            imageId: data.payload.image.imageId,
          },

          diagnosis: data.payload.diagnosis,
          diagnosisDetail: data.payload.diagnosisDetail,
        }}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange, handleBlur, values }) => (
          <>
            <Box>
              <Box my="5" textAlign="left">
                <form onSubmit={handleSubmit}>
                  <FormControl>
                    <FormLabel>fileNo</FormLabel>
                    <Input
                      name="fileNo"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fileNo}
                    ></Input>
                  </FormControl>
                  <FormControl>
                    <FormLabel>patientId</FormLabel>
                    <Input
                      name="patientId.patientId"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.patientId.patientId}
                    ></Input>
                  </FormControl>
                  <FormControl>
                    <FormLabel>imageId</FormLabel>
                    <Input
                      name="imageId.imageId"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.imageId.imageId}
                    ></Input>
                  </FormControl>
                  <FormControl>
                    <FormLabel>diagnosis</FormLabel>
                    <Input
                      name="diagnosis"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.diagnosis}
                    ></Input>
                  </FormControl>
                  <FormControl>
                    <FormLabel>diagnosisDetail </FormLabel>
                    <Input
                      name="diagnosisDetail"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.diagnosisDetail}
                    ></Input>
                  </FormControl>
                  <Button mt={4} width="full" type="submit">
                    UPDATE
                  </Button>
                </form>
              </Box>
            </Box>
          </>
        )}
      </Formik>
    </div>
  );
}

export default ReportLabUpdate;
