import React, { useEffect, useState } from "react";

import api from "../../services/api";

import "./styles.css";

import Pergunta from "../Pergunta";


export default function Resultados(){
    
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("@token:voto");
        console.log(token);
        if (token) {
            api
                .get("/users", {
                  headers: {
                    Authorization:`Bearer ${token}`,
                },
            })
            .then((response) => setUsuarios(response.data));
        }
    }, []);

    return (
        <div className="container">
            <h3>Usuários Cadastrados</h3>   
            <table> 
            
                <thead> 
                        <th>Email</th>
                        <th>Nome</th>
                        <th>Username</th>
                        <th>Voto</th>
                </thead>
                <tbody>  
                    {usuarios.map((usuario) => {
                        return (
                    <tr key={usuario._id}>
                        <td>{usuario.name}</td>
                        <td>{usuario.email}</td>                        
                        <td>{usuario.username}</td>
                    </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
