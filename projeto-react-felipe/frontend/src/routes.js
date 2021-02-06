import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Contatos from './pages/Contatos';
import Pedidos from './pages/Pedidos';
import Lojas from './pages/Lojas';
  

function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/produtos" component={Produtos} />
            <Route exact path="/contatos" component={Contatos} />
            <Route exact path="/pedidos" component={Pedidos} />
            <Route exact path="/lojas" component={Lojas} />            
        </Switch>
    );
}

export default Routes;