import { useHistory } from "react-router-dom";
import { Logo } from "../styles/Logo";
import { Button } from "../styles/styles";

export default function Home() {
  const history = useHistory();
  return (
    <>
      <Logo>
        <div>RepoProvas</div>
      </Logo>
      <Button onClick={() => history.push("/professors")}>Professores</Button>
      <Button onClick={() => history.push("/courses")}>Disciplinas</Button>
      <Button onClick={() => history.push("/createExam")}>
        Adicionar Provas
      </Button>
    </>
  );
}
