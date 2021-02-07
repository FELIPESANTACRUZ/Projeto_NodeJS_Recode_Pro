import React,{useState,useEffect} from 'react';

export default function Form(){

    const [comentarios, setComentarios] = useState([]);
    const [render, setRender] = useState(false);
    const [msg, setMsg] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const [nome, setNome ] = useState('');
    const [alert, setAlert] = useState(false);

    useEffect(async () => {
        
        const response = await fetch("http://localhost:5000/msg");
        setComentarios(await response.json());
        
    },[render])

    function registerComentarios(event){
        event.preventDefault();
        let formData = {'nome':nome, 'msg': mensagem};

        const url ="http://localhost:5000/msg";

        fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }).then((response) => response.json()).then((dados) =>{
            setRender (!render);
            setAlert (dados);
            setTimeout(() => {
                setAlert(false);
            },2000);
        }); 
        setNome('')
        setMensagem('')
    }

    return(
     <main>
        <div >     

            <div className="formContato ml-5 mb-5 mt-5 mx-auto">    
                <form onSubmit={registerComentarios}>
                    <h2 className="text text-danger text-center">Fale Conosco:</h2>
                        <div className=" form-group">
                        <label className="text text-danger">Nome:</label>
                        <input className="form-control" type="text" required name="nome" placeholder="Digíte seu nome" value={nome} onChange={event=>setNome(event.target.value)}/>
                        </div>
                        <div className="form-group">    
                            <textarea className="form-control" required type="text" name="msg" placeholder="Envie-nos uma mensagem" value={mensagem} onChange={event=>setMensagem(event.target.value)}></textarea>
                            
                        </div>
                        <button className="btn btn-lg btn-block btn-outline-danger" value="Enviar" name="submit">Enviar</button>
                </form>
            </div>
            
            <div>
            { alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
                Mensagem Enviada!
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>

            </div>
            }   
            </div>
            

            <section>
            <h2 className="text text-danger my-5 text-center">Deixe seu comentário!</h2>
            {comentarios.map(item =>{
                        return(

                            <div key={item.id} className="card mx-auto m-5  ">
                                <div className="card-header border border-danger bg-danger text-white">
                                    {item.nome}
                                </div>
                                <div className="card-body ">
                                    Mensagem: {item.msg}
                                </div>
                            </div>    
                        )
                    }
            
                )
                
            }
            </section>

        </div>         
        </main>
    );
}