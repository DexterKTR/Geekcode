import React, {Component} from 'react';

class Contact extends Component{
    render(){
        return(
            <div className="contact-inner area-padding" id="contact">
                <div className="contact-overly"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="section-headline text-center">
                                <h2>Contactanos</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mp-25">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.0218146332786!2d-99.11504558509431!3d19.368208086920916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fe6df2d89a43%3A0x8d22b6d6d3e81e62!2sGral.+Radam%C3%A9s+Gaxiola+Andrade+728%2C+Escuadr%C3%B3n+201%2C+09060+Ciudad+de+M%C3%A9xico%2C+CDMX!5e0!3m2!1ses!2smx!4v1553473656066" width="550" height="450" frameborder="0" style={{border:"0"}} title={'maps'} allowfullscreen></iframe>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <form>
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Nombre" autoComplete="off"/>
                                    <div className="validation"></div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Correo" autoComplete="off"/>
                                    <div className="validation"></div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Tema" autoComplete="off"/>
                                    <div className="validation"></div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Mensaje" autoComplete="off"></textarea>
                                    <div className="validation"></div>
                                </div>
                                <div className="text-center"><button className="main-btn" type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;