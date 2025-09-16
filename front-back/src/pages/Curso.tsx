import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function Curso() {
  const [cursos, setCursos] = useState<any[]>([]);

  const getCursos = async () => {
    try {
      const response = await api.get("/cursos");
      console.log("Dados recebidos:", response.data);
      setCursos(response.data);
    } catch (err) {
      console.error("Erro ao buscar cursos:", err);
    }
  };

  useEffect(() => {
    console.log("teste");
    getCursos();
  }, []);

  return (
    <div className="App">
      <h2>Listagem de cursos</h2>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            <Link to={`${curso.id}/cursos`}>{curso.nome}</Link>
            <br />
            Carga Horaria:  {curso.cargaHoraria}
            Diciplinas:
            <ul>
              {curso.disciplinas.map(( disciplina: any ) =>
                <li key={disciplina.id}> 
                {disciplina.nome}</li>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}


