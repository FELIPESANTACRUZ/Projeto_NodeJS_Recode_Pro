import { Link, withRouter } from 'react-router-dom';
import Logo from '../../img/logoFull.png';


const HeaderBase = () => {
    return (
        
        <header className="bg-warning">
            <nav className=" container navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand text-danger" as={Link} to="<strong>/" href="/"><img className="Logo" src={Logo} style={{width:"58%"}}/></a>
                <button className="navbar-toggler"
                    type="button" data-toggle="collapse"
                    data-target="#navbarSite">
                    <span className="navbar-toggler-icon"></span>
                </button>    

                <div className="collapse navbar-collapse " id="navbarSite">

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" as={Link} to="/produtos" href="/produtos"><button className="btn btn-outline-danger" type="submit"><strong>Produtos</strong></button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" as={Link} to="/pedidos" href="/pedidos"><button className="btn btn-outline-danger" type="submit"><strong>Pedidos</strong></button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" as={Link} to="/lojas" href="/lojas"><button className="btn btn-outline-danger" type="submit"><strong>Lojas</strong></button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" as={Link} to="/contatos" href="/contatos"><button className="btn btn-outline-danger" type="submit"><strong>Contato</strong></button></a>
                        </li>
                    </ul>
                </div>            
            </nav>

        </header>   

    );    
}

const Header = withRouter(HeaderBase)

export default Header;