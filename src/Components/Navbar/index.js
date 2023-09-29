import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/react";

import { useAuth } from "../../Contexts/AuthContext";

function Navbar() {
  const { loggedIn,user } = useAuth();
  console.log(loggedIn);

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className="logo">
          <Link to="/"> Laboratory </Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/report"> Reports</Link>
          </li>
        </ul>
      </div>

      <div className={styles.right}>
        {!loggedIn && (
          <>
            <Link to="/signin">
              <Button colorScheme="pink"> Patient Login</Button>
            </Link>

            <Link to="/signup">
              <Button colorScheme="pink">Patient Register</Button>
            </Link>

            <Link to="/labSignin">
              <Button colorScheme="pink" ml="5px" mr="5px">Lab Login</Button>
            </Link>

            <Link to="/labSignup">
              <Button colorScheme="pink">Lab Register</Button>
            </Link>
          </>
        )}
        {
            user?.role.userRole==='Laborant'&&(
              <Link to="/laborant">
                <Button colorScheme="pink" variant="ghost">Laborant</Button>
              </Link>
              
            )
          }
        {loggedIn && (
          <>
            <Link to="/patientProfile">
              <Button colorScheme="pink">profile</Button>
            </Link>
          </>

        )}
        
      </div>
    </nav>
  );
}

export default Navbar;
