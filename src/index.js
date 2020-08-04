import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import CadastroVideo from "./pages/cadastro/Video";
import Home from "./pages/Home";
import CadastroCategoria from "./pages/cadastro/Categoria";
import PageDefault from "./components/PageDefault";
import Ops from "./assets/img/ops.png";
import PageError from "./pages/PageError";

const Pagina404 = () => (
  <PageDefault>
    <div>
      <Link to="/">Ir para Home</Link>
    </div>
    <PageError>
      <img src={Ops} alt="Imagem sorry página não encontrada" />
    </PageError>
  </PageDefault>
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" exact component={Home} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
