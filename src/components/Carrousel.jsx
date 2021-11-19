import React from 'react';
import carrousel from '../img/carrousel-3.jpg'


function Carrousel() {
    return(
        <div>
            <div className="jumbotron">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={carrousel} class="d-block w-100 img-fluid" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    );
  }

export default Carrousel;