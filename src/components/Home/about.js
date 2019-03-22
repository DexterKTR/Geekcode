import React, {Component} from 'react';

class Index extends Component{
    render(){
        return(
          <div id="about" className="about-area area-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <h2>About eBusiness</h2>
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
                      <h4 className="sec-head">project Maintenance</h4>
                    </a>
                    <p>
                      Redug Lagre dolor sit amet, consectetur adipisicing elit. Itaque quas officiis iure aspernatur sit adipisci quaerat unde at nequeRedug Lagre dolor sit amet, consectetur adipisicing elit. Itaque quas officiis iure
                    </p>
                    <ul>
                      <li>
                        <i className="fa fa-check"></i> Interior design Package
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Building House
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Reparing of Residentail Roof
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Renovaion of Commercial Office
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Make Quality Products
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