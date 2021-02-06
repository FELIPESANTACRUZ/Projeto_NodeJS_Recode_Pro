import Pagamento from '../../img/pagamentos.jpg';
import './Footer.css';

const Footer = () => {
    return(
        <>
        <footer className="final-fluid font-small bg-warning ">
            <p className ="formas_pagamento text-center text-danger">
            <b /><strong>Formas de Pagamento:</strong></p><br/>
            <img className = "rodapeImg" src={Pagamento}/>
            <div className="footer-copyright text-center text-danger py-3"><strong>© 2020 Copyright: </strong>
                <a className="text-white"href="https://www.recodepro.org.br/"><strong>
                     Recode-Pro</strong></a>
            </div>
        </footer>
        </>
    );
}

export default Footer;