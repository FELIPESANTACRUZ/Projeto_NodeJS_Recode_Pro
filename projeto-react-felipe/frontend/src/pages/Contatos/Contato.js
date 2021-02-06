  import Email from '../../img/email.png';
  import Whats from '../../img/whatsapp.png';


  export default function Contato(){
      return (
            <div className="contatos w-25 mt-5 mx-auto">
                    
                    <img className="imgContato m-2 " style={{"width":50}}src={Email}alt='logo email'/>
                    <a className="link text-dark"href="contato@fullstackeletro.com">contato@fullstackeletro.com</a>        
                    <img className="imgContato m-2"  style={{"width":50}}src={Whats}alt='Logo Whatsapp'/>
                    <a className="textoContato text-dark" href="contato(11)8888-8888">(11)8888-8888</a>              
            </div>

      );
  }
        
        