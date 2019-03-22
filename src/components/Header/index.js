import React, {Component} from 'react';

class Index extends Component {
    render(){
        return(
            <header id="home">
                <div className="bg-img" style={{backgroundImage:"url('./img/background1.jpg')"}}>
                    <div className="overlay"></div>
                </div>
    
                <nav id="nav" className="navbar nav-transparent">
                    <div className="container">
        
                        <div className="navbar-header">
                            <div className="navbar-brand">
                                <a href="index.html">
                                    <img className="logo" src="/img/logo_geek.png" alt="logo"/>
                                    <img className="logo-alt" src="/img/logo_2.png" alt="logo" style={{maxHeight: "100px"}}/>
                                </a>
                            </div>
                            <div className="nav-collapse">
                                <span></span>
                            </div>
                        </div>
        
                        <ul className="main-nav nav navbar-nav navbar-right">
                            <li><a href="#home">Inicio</a></li>
                            <li><a href="#about">Nosotros</a></li>
                            <li><a href="#services">Servicios</a></li>
                            <li><a href="#pricing">Precios</a></li>
                            <li><a href="#team">Equipo</a></li>
                            <li className="has-dropdown"><a href="#blog">Blog</a>
                                <ul className="dropdown">
                                    <li><a href="blog-single.html">blog post</a></li>
                                </ul>
                            </li>
                            <li><a href="#contact">Contacto</a></li>
                        </ul>
        
                    </div>
                </nav>
    
                <div className="home-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="home-content">
                                    <h1 className="white-text"><img className="logo-alt" src="/img/logo_3.png" alt="logo" /></h1>
                                    <p className="white-text">Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuere.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
            </header>
        )
    }
}

export default Index;