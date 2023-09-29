import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { fetchPatientId ,updatePatient} from '../../../api';
import { Formik } from 'formik';
import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';

function PatientDetails() {
const {patientId} =useParams();

const { isLoading, error, data } = useQuery({
  queryKey: ["patientData",patientId],
  queryFn:()=>fetchPatientId(patientId)
});


if (isLoading) return "Loading...";

if (error) return "An error has occurred: " + error.message;


const handleSubmit =(values)=>{
  try{
     updatePatient(values,patientId);
    console.log("güncellendi")
  }catch(e){
console.log("güncellenemedi")
  }
 
  
}


console.log(data)
  return (
    <div>
      <Text fontSize="2xl">  UPDATE </Text>
      <Formik
      initialValues={{
        name:data.payload.name,
        surName:data.payload.surName,
        tc:data.payload.tc,
        userName:data.payload.userName,
        role: {
          roleId: data.payload.role.roleId,
        }
      }}
      onSubmit={handleSubmit}
      >
        {
          ({handleSubmit,error,touched,handleChange,handleBlur,values,isSubmitting}) =>
            <>
            <Box>
              <Box my="5" textAlign="left">
                <form  onSubmit={handleSubmit}>
                  <FormControl>
                    <FormLabel>
                      Name
                    </FormLabel>
                    <Input
                    name='name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    
                    ></Input>                    
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      SurName
                    </FormLabel>
                    <Input
                    name='surName'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.surName}
                    
                    ></Input>                    
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      TC
                    </FormLabel>
                    <Input
                    name='tc'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tc}
                    
                    ></Input>                    
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                    User Name
                    </FormLabel>
                    <Input
                    name='userName'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userName}
                    
                    ></Input>                    
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      Role ID
                    </FormLabel>
                    <Input
                    name='role.roleId'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.role.roleId}
                   
                    ></Input>                    
                  </FormControl>
                  <Button mt={4}
                  width="full"
                  type='submit'
                  >
                    UPDATE

                  </Button>

                </form>

              </Box>
            </Box>
            </>
          
        }

      </Formik>



    </div>
  )
}

export default PatientDetails