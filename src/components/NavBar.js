import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import{Link} from "react-router-dom";

const NavBar=()=>{
    return(
        <>
          <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
            <div class="container-fluid">
                <Link className="navbar-brand" to="/">
                    EasyGO🛩️
                </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Destination 
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                    <Link className="btn btn-info mx-2" to="/login">
                        Login
                    </Link>
                    <Link className="btn btn-info mx-2" to="/signup">
                        Signup
                    </Link>
                </div>
            </div>
          </nav>
        </>
    );
};
export default NavBar;