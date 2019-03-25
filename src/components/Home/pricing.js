import React, {Component} from 'react';

class Pricing extends Component {
    render(){
        return(
            <div id="pricing" className="pricing-area area-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="section-headline text-center">
                                <h2>Tabla de precios</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="pri_table_list">
                                    <h3>Informativa <br/> <span> $3,700 mxn/ básica</span></h3>
                                    <ol>
                                        <li className="check">Página web responsiva</li>
                                        <li className="check">Diseño gráfico (2 propuestas)</li>
                                        <li className="check">Enlace de redes sociales</li>
                                        <li className="check">Diseño web básico</li>
                                        <li className="check">Mapa de Google Maps</li>
                                        <li className="check">Hosting básico</li>
                                        <li className="check">5 Cuentas de correo</li>
                                        <li className="check">1-3 Secciones de información</li>
                                        <li className="check">Sección de formulario</li>
                                        <li className="check">1 Cambio al mes durante 12 meses</li>
                                    </ol>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="pri_table_list active">
                                    <span className="saleon">top sale</span>
                                    <h3>Emprendedor <br/> <span> $5,300/ Negocios pequeños</span></h3>
                                    <ol>
                                        <li className="check">Página web responsiva</li>
                                        <li className="check">Diseño gráfico (2 propuestas)</li>
                                        <li className="check">Enlace de redes sociales</li>
                                        <li className="check">Mapa de Google Maps</li>
                                        <li className="check">Hosting empresarial</li>
                                        <li className="check">15 Cuentas de correo</li>
                                        <li className="check">4-6 Secciones de información</li>
                                        <li className="check">Sección de formulario</li>
                                        <li className="check">Posicionamiento en Google</li>
                                        <li className="check">3 Cambios la mes durante 12 meses</li>
                                        <li className="check">Certificado SSL durante 12 meses</li>
                                     </ol>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="pri_table_list">
                                    <h3>Negocios <br/> <span> $8,200/ administrables</span></h3>
                                    <ol>
                                        <li className="check">Página web responsiva</li>
                                        <li className="check">Diseño gráfico (2 propuestas)</li>
                                        <li className="check">Enlace de redes sociales</li>
                                        <li className="check">Mapa de Google Maps</li>
                                        <li className="check">Diseño web profesional</li>
                                        <li className="check">Hosting empresarial</li>
                                        <li className="check">30 Cuentas de correo</li>
                                        <li className="check">4-6 Secciones de información</li>
                                        <li className="check">Sección de formulario</li>
                                        <li className="check">Posicionamiento en Google</li>
                                        <li className="check">3 Cambios la mes durante 12 meses</li>
                                        <li className="check">Certificado SSL durante 12 meses</li>
                                        <li className="check">Chat en linea</li>
                                        <li className="check">Seguimiento durante 2 meses</li>
                                    </ol>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pricing;