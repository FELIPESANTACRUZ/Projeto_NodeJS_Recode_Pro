import React from 'react';
import { useState, useEffect } from 'react';


export default function Pedidos() {
    const [usuario, setUsuario] = useState([]);
    const [render, setRender] = useState(false);
    const [alert, setAlert] = useState(false);

    useEffect(async () => {
        const res = await fetch("http://localhost/loja_fseletro/backend/indexUsuario.php");
        setUsuario(await res.json())
    }, [render])

    return (
        
        <div>
              <h2 className="text-center text-danger mt-3" >Meus Pedidos</h2>
        
      
        <div className="container mx-auto row d-flex">
            
            {
                

                usuario.map(row => {
                    return (
                        
                        <div className="container  col-3 text-center  pl-2 mx-auto ">
                            
                            <div className="card my-2  "  >
                                <div className=" "key={row.idproduto} style={{ width: "12rem" }} id={row.categoria}>
                                    <img src={row.imagem} className="card-img-center" style={{ width: "150px" }} />
                                    <div className="card-body">
                                        <h5 id={row.categoria} className="card-title h4"><strong>{row.nomeProduto}</strong></h5>
                                        <p className="card-text ">
                                            <strong>{row.nome} </strong></p>
                                        <p className="card-text ">{row.sobrenome}</p>
                                        <p className="card-text "><strong>
                                            {row.email} </strong></p>
                                        <p className="card-text ">{row.preco_venda}</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    )
                })
            }
        </div>
        </div>
    );
}
