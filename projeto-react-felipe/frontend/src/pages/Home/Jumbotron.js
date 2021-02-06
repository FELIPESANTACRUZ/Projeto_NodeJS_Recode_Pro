
import logoJumb from '../../img/fsl.png';

export default function Jumbotron (){
    return(
        <div className=" jumbo jumbotron jumbotron-fluid bg-dark">
            <div className="container d-flex">
              <img src={logoJumb} />
                <div className="container text-center">
                <h1 className="display-4 text-danger"><strong>SEJA BEM VINDO(A)!</strong></h1><br />
                <p className="lead text-danger h2"><strong>Aqui em nossa loja, <strong> programadores tem desconto </strong> nos produtos para sua casa!</strong></p>
                </div>
            </div>
        </div>
    );
}