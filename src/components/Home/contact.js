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
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="contact-icon text-center">
                                <div className="single-icon">
                                    <i className="fa fa-mobile"></i>
                                    <p>
                                        Call: +1 5589 55488 55<br/>
                                        <span>Monday-Friday (9am-5pm)</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="contact-icon text-center">
                                <div className="single-icon">
                                    <i className="fa fa-mobile"></i>
                                    <p>
                                        Call: +1 5589 55488 55<br/>
                                        <span>Monday-Friday (9am-5pm)</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="contact-icon text-center">
                                <div className="single-icon">
                                    <i className="fa fa-mobile"></i>
                                    <p>
                                        Call: +1 5589 55488 55<br/>
                                        <span>Monday-Friday (9am-5pm)</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15054.373846111112!2d-99.074301!3d19.386748!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4911f934416fdde6!2sIndustrias+Sola+Basic!5e0!3m2!1ses!2smx!4v1496778750565" width="100%" height="450" frameborder="0" title={'maps'}></iframe>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <form>
                                <div class="form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" autoComplete="off"/>
                                    <div class="validation"></div>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" autoComplete="off"/>
                                    <div class="validation"></div>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" autoComplete="off"/>
                                    <div class="validation"></div>
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" name="message" rows="5" placeholder="Message" autoComplete="off"></textarea>
                                    <div class="validation"></div>
                                </div>
                                <div class="text-center"><button className="main-btn" type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;