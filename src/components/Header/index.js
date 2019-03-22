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
                                    <img className="logo" src="/img/logo_black.png" alt="logo"/>
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
                                    <p className="commo2">Creando e innovando la forma de ver tú negocio <span className="typor">|</span></p>
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