import React, { useState, useEffect } from 'react';
import Categoria from './Categoria';
import Form from './Form.jsx';


const ProdutosPage = () => {

    const [props, setProps] = useState([]);

    const [idpro, setIdpro] = useState(0);

    useEffect(async () => {
        const url = "http://localhost:5000/products";
        const res = await fetch(url);
        setProps(await res.json());
    }, [])

    let destaque = (imagem) => {
        if(imagem.target.style.width === '120px')
        imagem.target.style = 'width:200px'
        else
        imagem.target.style = 'width:150px'
    }

    function saveId(id){
        setIdpro(idpro => id)
    }

    return(
        <div className="container Pai d-flex">
                <div className="categoria ">
                <Categoria />  
                </div>          
            
          <>
            <div>
              
                <section className=" produtos container row justify-content-end mt-5">
                
                    { props.map(row => { 

                        return(
                            <div className="col-3  text-center pl-2">
                                <div className="card my-2 "  >
                                    <div  key={row.idproduto} style={{width:"12rem" }}>
                                            <img src={row.imagem} className="card-img-center"style={{width:"150px" }}onMauseOver={destaque}/>
                                            <div className="card-body">
                                                <h5 id={row.idproduto}className="card-title text-center text-danger h4"><strong>{row.nomeProduto}</strong></h5>
                                                <p className="card-text text-center">
                                                    <strong>{row.descricao} </strong></p>
                                                <p className="card-text text-center"><del>
                                                    {row.preco}</del></p>
                                                <p className="card-text text-center text-danger h4"><strong>
                                                {row.preco_venda} </strong></p>
                                                <a role="button" className="btn btn-danger mx-auto"  onClick={() => saveId(row.idproduto)}>Comprar</a>
                                            </div>
                                    </div>
                                </div>
                                
                            </div>            
                        )            
                  }
                 )
                }
                </section>

              { <Form>{idpro}</Form> }

            </div>
         </>
        
     </div>   
    );
}

export default ProdutosPage;