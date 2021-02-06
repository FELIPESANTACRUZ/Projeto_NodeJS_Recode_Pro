
export default function Categoria (){
    function exibir_categoria(categoria){
        // alert(categorias);
        let elementos = document.getElementsByClassName('box_produto');
               for (var i=0;i<elementos.length;i++){
                console.log(elementos[i].id);
                if (categoria == elementos[i].id){
                    elementos[i].style = "display:inline-block";
                }else {
                        elementos[i].style = "display:none";
                }
        }
      } 
        let exibir_todos = () => {
            let elementos = document.getElementsByClassName('box_produto');
              
            for (var i=0;i<elementos.length;i++){
            elementos[i].style = "display:inline-block";
            }
        }
        
    return (
        <div>
            
            <section className="container d-flex mt-5">  
                <section className='container'>
                    <h3 className='categoria text-center'>Categorias</h3>
                    <div className="list-group ">
                        <button type="button" className="list-group-item list-group-item-action list-group-item-danger"onClick={exibir_todos}>Todos(12)
                        </button>
                        <button type="button" className="list-group-item list-group-item-action list-group-item-danger" onClick={exibir_categoria('geladeira')}>Geladeiras (03)
                        </button>
                        <button type="button" className="list-group-item list-group-item-action list-group-item-danger" onClick={exibir_categoria('fogao')}>Fogões (02)
                        </button>
                        <button type="button" className="list-group-item list-group-item-action list-group-item-danger" onClick={exibir_categoria('microondas')}>Microondas(03)
                        </button>
                        <button type="button" className="list-group-item list-group-item-action list-group-item-danger" onClick={exibir_categoria('lavadoura')}>Lavadoura de Roupa (02)
                        </button>
                        <button type="button" className="list-group-item list-group-item-action list-group-item-danger" onClick={exibir_categoria('lavaLouca')}>Lava-Louças (02)
                        </button>
                    </div>
                </section>
            </section>    
        </div>    
    );

}