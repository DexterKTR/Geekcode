import React, {Component} from 'react';

class Index extends Component{
    render(){
        return(
          <div id="about" className="about-area area-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <h2>Acerca de nosotros</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="well-left">
                  <div className="single-well">
                    <a href="/">
                        <img src="img/blog-post.jpg" alt=""/>
                      </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="well-middle">
                  <div className="single-well">
                    <a href="/">
                      <h4 className="sec-head">- - -</h4>
                    </a>
                    <p>
                      Somos un grupo de prosefionales que está creciendo conjuntamente con nuestros clientes, tomando en cuenta las siguiente caracteristicas:
                    </p>
                    <ul>
                      <li>
                      <i className="fa fa-check"></i> Innovación
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Respeto mutuo
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Trabajo en equipo
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Pasión por el trabajo
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Lealtad y claridad
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
}

export default Index;