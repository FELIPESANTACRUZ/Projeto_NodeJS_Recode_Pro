import React from 'react';
import { useState, useEffect } from 'react';

export default function Form({ children }) {

    const [usuario, setUsuario] = useState([]);
    const [render, setRender] = useState(false);



    useEffect(() => {
        async function chamaApi() {
            const url = "http://localhost/loja_fseletro/backend/indexUsuario.php";
            const res = await fetch(url);
            setUsuario(await res.json());
        }
        chamaApi()
    }, [render])

    async function registroVenda(event) {
        event.preventDefault();
        let formData = new FormData(event.target);
        const url = "http://localhost/loja_fseletro/backend/registerUsuarios.php";

        fetch(url, {
            method: "POST",
            body: formData
        }).then((response) => response.json())
        console.log(555)
    }

    return (

        <div className="formContato ml-5 mb-5 my-5 mx-auto  ">
            <div>
                <h4 className="text-danger text-center m-5"><strong>Código do seu produto:
                <h3 className="text-dark" >{children}</h3> </strong></h4>
            </div>
            <form onSubmit={registroVenda}>

                <h2 className="text text-danger text-center "><strong> Cadastre-se</strong></h2>

                <div className="container row mx-auto">
                    <div className="form-group col-4">
                        <label for="idProduto" className="text text-danger"><strong>Código:</strong></label>
                        <input className="form-control" type="text" name="idProduto" placeholder="Digíte o número do produto..." id="idProduto" />
                    </div>
                    <div className=" form-group col-4">
                        <label for="nome" className="text text-danger"><strong>Nome:</strong>
                        </label>
                        <input className="form-control" type="text" name="nome" placeholder="Digíte seu nome..." id="nome" />
                    </div>
                    <div className=" form-group col-4">
                        <label for="sobrenome" className="text text-danger"><strong>Sobrenome:</strong></label>
                        <input className="form-control" type="text" name="sobrenome" placeholder="Digíte seu sobrenome..." id="sobrenome" />
                    </div>
                </div>
                <div className="container row mx-auto">
                    <div className=" form-group col-12 ">
                        <label for="email" className="text text-danger"><strong>Email:</strong></label>
                        <input className="form-control" type="text" name="email" placeholder="Digíte seu email..." id="email" />
                    </div>
                </div>
                <div className="container row mx-auto">
                    <div className=" form-group col-4  ">
                        <label for="telefone" className="text text-danger"><strong>Telefone:</strong></label>
                        <input className="form-control" type="number" name="telefone" placeholder="Digíte seu telefone" id="telefone" />
                    </div>
                    <div className=" form-group col-4 ">
                        <label for="cpf" className="text text-danger"><strong>CPF:</strong></label>
                        <input className="form-control" type="number" name="cpf" placeholder="Digíte seu CPF..." id="cpf" />
                    </div>
                    <div className=" form-group col-4">
                        <label for="cep" className="text text-danger"><strong>CEP:</strong></label>
                        <input className="form-control" type="number" name="cep" placeholder="Digíte seu CEP..." id="cep" />
                    </div>
                </div>
                <div className="container d-flex justify-content-between">
                    <input type="reset" className="btn btn-lg btn-outline-danger ml-3 mb-2" value="Apagar " />
                    <button className="btn btn-lg btn-outline-success mx-3 mb-2">Enviar</button>
                </div>
            </form>




        </div>

    );
}