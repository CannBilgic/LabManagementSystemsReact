import React from "react";
import { createReport } from "../../../api";
import { Formik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

function NewReport() {




  const handleSubmit = (values) => {
    try {
      createReport(values,);
      console.log("olusturuldu");
    } catch (e) {
      console.log("olusturulmadi");
    }
  };

  return (
    <div>
      <Text fontSize="2xl"> CREATE </Text>
      <Formik
        initialValues={{
            fileNo: "",
            patientId: {
              patientId: "",
            },
            laborantId: {
                laborantId:""
              },

            image: {
              imageId: "",
            },
  
            diagnosis:"",
            diagnosisDetail:"",
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
                    <FormLabel>laborantId</FormLabel>
                    <Input
                      name="laborantId.laborantId"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.laborantId.laborantId}
                    ></Input>
                  </FormControl>
                  <FormControl>
                    <FormLabel>imageId</FormLabel>
                    <Input
                      name="image.imageId"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.image.imageId}
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
                    CREATE
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

export default NewReport;
