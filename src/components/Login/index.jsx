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
        <div className="login-container">
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
          <div className="login-credentials">
            Identifiants de connexion
            <div className="login-credential">
              <p className="login-credential-email">
                Email :{" "}
                <span className="login-credential-data">user1@email.com</span>
              </p>
              <p className="login-credential-password">
                Mot de passe :{" "}
                <span className="login-credential-data">user1</span>
              </p>
            </div>
            <div className="login-credential">
              <p className="login-credentials-email">
                Email :{" "}
                <span className="login-credential-data">user2@email.com</span>
              </p>
              <p className="login-credentials-password">
                Mot de passe :{" "}
                <span className="login-credential-data">user2</span>
              </p>
            </div>
          </div>
        </div>
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
