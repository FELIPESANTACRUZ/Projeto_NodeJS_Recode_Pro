import Foto1 from './img/loja01.jpg';
import Foto2 from './img/loja02.jpg';
import Foto3 from './img/loja03.jpg';


export default function CardLoja(){
    return(
        <div className="containerPai d-flex justify-content-center my-5">

            <div className="card ml-5" style={{width: "18rem"}}>
                <img className="card-img-top" src={Foto1} alt="Card image cap"/>
                <div className="card-body">
                    <p className="card-text text-center">           
                        <h3 className="text-danger text-center">Rio de Janeiro</h3><br/>
                        Avenida Paulista,5000<br/>
                        10°Andar<br />
                        Centro<br /> 
                        (21)3333-3333<br />            
                    </p>
                </div>
            </div>

            <div className="card ml-5" style={{width: "18rem"}}>
                <img className="card-img-top" src={Foto2} alt="Card image cap"/>
                <div className="card-body">
                    <p className="card-text text-center">           
                        <h3 className="text-danger text-center">São Paulo</h3><br/>
                        Avenida Presidente Vargas,985<br/>
                        10°Andar<br />
                        Centro<br /> 
                        (21)3333-3333<br />            
                    </p>
                 </div>
            </div>

            <div className="card ml-5" style={{width: "18rem"}}>
                    <img className="card-img-top" src={Foto3} alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-text text-center">           
                            <h3 className="text-danger text-center">Santa Catarina</h3><br />
                            Avenida Presidente Vargas,5000<br/>
                            1°Andar<br />
                            Centro<br /> 
                            (47)3333-3333<br />            
                        </p>
                    </div>
            </div>

        </div>
    );
}