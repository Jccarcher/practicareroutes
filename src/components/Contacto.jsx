import React from 'react';

function Contacto() {
    return(
        <div>
            <section class="sectionMenu" id='contacto'>
                    <div class="container contact-form">
                        <div class="contact-image">
                            <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
                        </div>
                        <div>
                            <a href="index.html"><i class="fas fa-home fa-3x"></i></a>
                        </div>
                        <form action="https://submit-form.com/SP9FgLBp">
                            <h3>Deja tu Mensaje</h3>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group mb-3">
                                        <input type="text" name="txtName" class="form-control" placeholder="Nombre *"
                                            value="" required="" />
                                    </div>
                                    <div class="form-group mb-3">
                                        <input type="text" name="txtEmail" class="form-control"
                                            placeholder="Direccion De correo *" value="" required=""/>
                                    </div>
                                    <div class="form-group mb-3">
                                        <input type="text" name="txtPhone" class="form-control"
                                            placeholder="Numero de Contacto *" value="" />
                                    </div>
                                    <div class="form-group align-items-center">
                                        <input type="submit" name="btnSubmit" class="btnContact" value="Enviar" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <textarea name="txtMsg" class="form-control" placeholder="Escribe aqui*"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
        </div>
    )
}

export default Contacto;