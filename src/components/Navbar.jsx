import React from 'react';
import headerSimpsons from '../img/header-simpsons.gif'
import {Link} from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img src={headerSimpsons} alt=""/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
                        <li><Link to='/' className="btn btn-dark">Inicio</Link>
                        </li>
                        <li><Link to='/Blog' className="btn btn-dark">Blog</Link>
                        </li>
                        <li><Link to='/Contacto' className="btn btn-dark">Contacto</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-danger" type="submit">Busqueda</button>
                    </form>
                    </div>
            </div>
        </nav>
    );
  }

export default Navbar;