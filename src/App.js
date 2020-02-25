import React from 'react';
import './App.css';
import Header from "./Header";
import { BrowserRouter} from "react-router-dom";
import { Link} from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./Login";
import Auctions from "./Auctions";
import Home from "./Home";
import NewAuction from "./NewAuction";
import Register from "./Register";

function App() { // funkcyjny komponent bezstanowy
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <ul class="nav flex-column">
                  <li class="nav-item"><Link to='/'>Strona domowa</Link></li>
                  <li class="nav-item"><Link to='/logowanie'>Logowanie</Link></li>
                  <li class="nav-item"><Link to='/aukcje'>Lista aukcji</Link></li>
                  <li class="nav-item"><Link to='/nowaaukcja'>Utwórz aukcję</Link></li>
                  <li class="nav-item"><Link to='/rejestracja'>Zarejestruj się</Link></li>
              </ul>
          </div>
          <div id='tresc'>
              <Route path='/' exact component={Home} />
              <Route path='/logowanie' exact component={Login} />
              <Route path='/aukcje' exact component={Auctions}/>
              <Route path='/nowaaukcja' exact component={NewAuction}/>
              <Route path='/rejestracja' exact component={Register}/>
          </div>
      </BrowserRouter>
  );
}

export default App;
