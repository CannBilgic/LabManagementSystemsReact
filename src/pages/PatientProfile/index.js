import React from 'react'
import { useAuth } from '../../Contexts/AuthContext'
import { Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function PatientProfile({history}) {

    const {user,logout} =useAuth();

    const handleLogout =()=>{
        logout()
    }

  return (  
    <div>
        <Text fontSize="2xl">
             Profile
        </Text>
        {JSON.stringify(user)}
        <br>
        </br>
        <br></br>
        <Button colorScheme='pink' variant="solid" onClick={handleLogout}>
        <Link to="/">
            
            Logout
            </Link>
        </Button>
    </div>
  )
}

export default PatientProfile