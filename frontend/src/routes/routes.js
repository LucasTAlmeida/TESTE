import React from 'react';

import { Switch, Route } from "react-router-dom";

import Register from "../components/Register";
import Home from "../components/Home";
import Login from "../components/Login";

import Pergunta from "../components/Pergunta";
import Resultados from "../components/Resultados";


export default function Routes(){
// registar o direcionamento dos componentes
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/pergunta" component={Pergunta} />
            <Route path="/resultados" component={Resultados} />
        </Switch>

    );
}