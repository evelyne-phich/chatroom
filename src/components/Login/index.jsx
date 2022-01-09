import { useSelector, useDispatch } from "react-redux";

import {
  changeLoginInputValue,
  submitLogin,
  logout,
  toggleLoginWindow,
} from "../../actions";

import "./style.scss";

const Login = () => {
  const loginOpened = useSelector((state) => state.login.opened);
  const loginPseudo = useSelector((state) => state.login.pseudo);
  const email = useSelector((state) => state.login.email);
  const password = useSelector((state) => state.login.password);
  const dispatch = useDispatch();

  return (
    <div className={loginOpened ? "login" : "login closed"}>
      <button
        className="login-toggle"
        type="button"
        onClick={() => dispatch(toggleLoginWindow())}
      >
        +
      </button>
      {!loginPseudo && (
        <form
          className="login-form"
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(submitLogin());
          }}
        >
          <input
            className="login-form-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              const emailValue = event.target.value;
              dispatch(changeLoginInputValue({ email: emailValue }));
            }}
          />
          <input
            className="login-form-input"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => {
              const passwordValue = event.target.value;
              dispatch(changeLoginInputValue({ password: passwordValue }));
            }}
          />
          <button className="login-form-submit" type="submit">
            Valider
          </button>
        </form>
      )}
      {loginPseudo && (
        <div className="logout">
          <p className="logout-message"> Connecté en tant que {loginPseudo}</p>
          <button
            className="logout-button"
            type="button"
            onClick={() => dispatch(logout())}
          >
            Déconnexion
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
