import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import { Logo } from "../styles/Logo";
import { Button } from "../styles/styles";
export default function CreateExam() {
  const [name, setName] = useState("");
  const [examUrl, setExamUrl] = useState("");
  const [courseId, setCourseId] = useState(0);
  const [professorId, setProfessorId] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const [allCourses, setAllCourses] = useState(null);
  const [allCategories, setAllCategories] = useState(null);
  const [loading, setLoading] = useState(0);
  function sendExam() {
    console.log("entrou");
  }
  useEffect(() => {
    axios
      .get("http://localhost:4000/get/all/categories")
      .then((response) => {
        setAllCategories(response.data);
        setLoading(loading + 1);
      })
      .catch(() => {
        alert("errou");
      });
    axios
      .get("http://localhost:4000/get/course")
      .then((response) => {
        setAllCourses(response.data);
        setLoading(loading + 1);
      })
      .catch(() => {
        alert("errou");
      });
  }, []);
  console.log(allCourses);
  console.log(allCategories);
  return (
    <>
      <Logo>
        <div>RepoProvas</div>
      </Logo>
      {loading !== 2 ? (
        <LoaderPosition>
          <Loader type="Oval" color="#61d728" height={80} width={80} />
        </LoaderPosition>
      ) : (
        <Form onSubmit={() => sendExam()}>
          <input
            placeholder="Insira o nome (Ex: 2020.1)"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          ></input>

          <select
            name="Categoria"
            onChange={(event) => setCategoryId(event.target.value)}
            required
          >
            <option value={0}>Selecione a categoria</option>
            {allCategories.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>

          <select
            name="Disciplina"
            onChange={(event) => {
              setCourseId(event.target.value);
            }}
            required
          >
            <option value={0}>Selecione o curso</option>
            {allCourses.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>
          {courseId === 0 ? "" : <select></select>}
          <input placeholder="Insira o Link da Prova" required></input>
          <Button type="submit">Enviar Prova</Button>
        </Form>
      )}
    </>
  );
}

const Form = styled.div`
  width: 390px;

  margin: 0 auto;

  input {
    width: 100%;
    height: 30px;

    background-color: #000;

    color: #61d728;
    font-size: 15px;
    font-family: "Press Start 2P", cursive;

    border: 2px solid #fca311;
    border-radius: 5px;

    padding: 0 5px 2px;
    outline: none;

    margin-bottom: 15px;
  }
  input::placeholder {
    font-size: 13px;
  }

  select {
    width: 100%;
    height: 30px;

    background-color: #000;

    color: #61d728;
    font-size: 15px;
    font-family: "Press Start 2P", cursive;

    border: 2px solid #fca311;
    border-radius: 5px;

    padding: 0 5px 2px;
    outline: none;

    margin-bottom: 15px;
  }
`;

const LoaderPosition = styled.div`
  width: 80px;
  margin: 0 auto;
`;
