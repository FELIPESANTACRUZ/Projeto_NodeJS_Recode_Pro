import React,{useState,useEffect} from 'react';

export default function Form(){

    const [comentarios, setComentarios] = useState([]);
    const [render, setRender] = useState(false);
    const [msg, setMsg] = useState(false);

    useEffect(async () => {
        const url = "http://localhost:5000/mostrar"
        const response = await fetch(url);
        setComentarios(await response.json());
    },[render])

    function registerComentarios(event){
        event.preventDefault();
        let formData = new FormData(event.target);

        const url ="http://localhost:5000/comentarios"

        fetch(url, {
            method: "POST",
            body: formData
        }).then((response) => response.json()).then((dados) =>{
            setRender (!render);
            setMsg (dados);
            setTimeout(() => {
                setMsg(false);
            },2000);
        }); 
    }

    return(

        <div >     

            <div className="formContato ml-5 mb-5 mt-5 mx-auto">    
                <form onSubmit={registerComentarios}>
                    <h2 className="text text-danger text-center">Fale Conosco:</h2>
                        <div className=" form-group ">
                        <label className="text text-danger">Nome:</label>
                        <input className="form-control"type="text" name="nome" placeholder="Digíte seu nome"/>
                        </div>
                        <div className="form-group">    
                            <textarea className="form-control" type="text" name="msg" placeholder="Envie-nos uma mensagem"></textarea>
                            
                        </div>
                        <button className="btn btn-lg btn-block btn-outline-danger">Enviar</button>
                </form>
            </div>
            
            <div>
            { msg && <div className=" alert-success mx-auto mt-4 w-75" role="alert"></div>
            }   
            </div>
            

            <section>
            <h2 className="text text-danger my-5 text-center">Deixe seu comentário!</h2>
            {comentarios.map((element) =>{
                        return(

                            <div key={element._id} className="card mx-auto m-5  ">
                                <div className="card-header border border-danger bg-danger text-white">
                                    {element.nome}
                                </div>
                                <div className="card-body ">
                                    Mensagem: {element.msg}
                                </div>
                            </div>    
                        )
                    }
            
                )
                
            }
            </section>

        </div>         

    );
}
    
    