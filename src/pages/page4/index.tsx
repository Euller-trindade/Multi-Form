import { useNavigate } from "react-router-dom";
import * as C from "./style";
import { useForm, FormActions } from "../../contexts/FormContext";
import Theme from "../../components/Theme";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Page4 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    }
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 4,
    });
  }, []);

  return (
    <Theme>
      <C.Container>
        <h1>Seus dados</h1>
        <hr />
        <h2>Nome:</h2>
        <h3>{state.name}</h3>
        <hr />
        <h2>Nivel:</h2>
        <h3>{state.level === 0 ? "iniciante" : "progamador"}</h3>
        <hr />
        <h2>Contato:</h2>
        <h3>E-mail: {state.email}</h3>
        <h3>GitHub: {state.github}</h3>
        <hr />
        <Link to="/step3" className="backButton">
          Voltar
        </Link>
      </C.Container>
    </Theme>
  );
};

export default Page4;
