import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path='/' exact component={App}/>
    <Route path='/cadastro/video' exact component={CadastroVideo}/>
    <Route path='/cadastro/categoria' exact component={CadastroCategoria}/>
  </Switch>

  </BrowserRouter>,
  document.getElementById('root')
);

