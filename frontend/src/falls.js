import React, {useState} from "react";
import axios from "axios";
import { response } from "express";

function falls(){
    const [name, setName] = useState("");
    const [dept, setDept] = useState("");
    const [number, setNumber] = useState("");

    function getWorker(){
        axios.get("http://localhost:3001/workers", { crossdomain:true,
        }).then(response => {
            setName(response.data.nombre);
            setDept(response.data.departamento);
            setNumber(response.data.telefono);
        });
    }

    return(
        <div>
            <button onClick={getWorker}>Mostrar trabajadores</button>
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Departamento</th>
                    <th>Teléfono</th>
                </tr>
                <tr>
                    <td>{name}</td>
                </tr>
            </table>
        </div>
    );
}

export default falls;