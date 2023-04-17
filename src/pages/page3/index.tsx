import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ChangeEvent, useEffect } from "react";

import { useForm, FormActions } from "../../contexts/FormContext";
import Theme from "../../components/Theme";

import * as C from "./style";
import validator from "validator";

const Page3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    }
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3,
    });
  }, []);

  const handleNextStep = () => {
    if (validator.isEmail(state.email) && state.github !== "") {
      navigate("/step4");
    } else {
      alert("Preencha os campos corretamente.");
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };
  const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

        <hr />

        <label>
          Qual seu e-mail?
          <input
            type="email"
            value={state.email}
            placeholder="fulano@exemplo.com"
            onChange={handleEmailChange}
            required
          />
        </label>
        <label>
          Qual seu GitHub?
          <input
            type="url"
            value={state.github}
            onChange={handleGitHubChange}
            required
          />
        </label>
        <Link to="/step2" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Finalizar cadastro</button>
      </C.Container>
    </Theme>
  );
};

export default Page3;
