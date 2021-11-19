import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import maggie from '../img/maggie.jpg'
import homero from '../img/homer.jpg'
import bart from '../img/bart.jpg'

function Cards() {
    return(
        <div className="container-fluid">
            <div className="row pt-5 py-5">
                <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                    <div className="card">
                        <img src={maggie} class="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Maggie</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p className="./personajes/maggie.html" class="btn btn-danger">Leer más...</p>
                        </div>
                    </div>
                </div>
            <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                <div className="card">
                    <img src={homero} class="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Homero</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p href="./personajes/homero.html" class="btn btn-danger">Leer más...</p>
                    </div>
                </div>
            </div>
                <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                    <div className="card">
                        <img src={bart} class="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">Bart</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p href="./personajes/bart.html" class="btn btn-danger">Leer más...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;