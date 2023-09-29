import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { Button } from "@chakra-ui/react";

function Laborant() {
  return (
    <div>
      <nav>
        <ul className="laborant-menu">
          <li>
            <Link to="/laborant/patient">
              <Button>Patient</Button>{" "}
            </Link>
          </li>
          <li>
            <Link to="/laborant/report">
              <Button>Report</Button>
            </Link>
          </li>
          <li>
            <Link to="/laborant/lab">
              <Button>Laborant</Button>{" "}
            </Link>
          </li>
          <li>
            <Link to="/laborant/role">
              <Button>Role</Button>
            </Link>
          </li>
          <li>
            <Link to="/laborant/image">
              <Button>Image</Button>{" "}
            </Link>
          </li>
          
          


        </ul>
      </nav>
    </div>
  );
}

export default Laborant;
