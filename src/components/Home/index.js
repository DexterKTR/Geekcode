import React, {Component, Fragment} from 'react';
import './home.css';
import Header from './../Header/index';
import About from './about';
import Services from './services';
import Pricing from './pricing';
import Contact from './contact';
import Footer from './footer';

class Index extends Component{
    render(){

        return(
            <Fragment>
                <Header/>
                <About/>
                <Services/>
                <Pricing/>
                <Contact/>
                <Footer/>
            </Fragment>
        )
    }
}

export default Index;