import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Routes from './routes';

function App() {
      return(
      <BrowserRouter>
      <div>
        <Header />
        <main>
          <Routes />
        </main>
        <Footer />        
      </div>
      </BrowserRouter>  

    );
  
}

export default App;






