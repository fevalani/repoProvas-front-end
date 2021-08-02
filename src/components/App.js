import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import "../styles/reset.css";
import Courses from "./Courses";
import CreateExam from "./CreateExam";
import Home from "./Home";
import Professors from "./Professors";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/professors" exact>
            <Professors />
          </Route>
          <Route path="/courses" exact>
            <Courses />
          </Route>
          <Route path="/createExam" exact>
            <CreateExam />
          </Route>
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}
