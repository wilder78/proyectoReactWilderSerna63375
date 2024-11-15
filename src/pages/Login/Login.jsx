import "./login.css";

function Login() {
  return (
    <>
      {/* <!-- Login code --/-- Código de iniciar sesión --> */}
      <div className="spaceLogin">
        <div className="login">
          <div className="logo">
            <a href="./../index.html">
              <img
                src="../public/image/LogoMs2.png"
                className="avatar"
                alt="Avatar Image"
              />
            </a>
          </div>
          <h2>MMS-Repuestos</h2>
          <form>
            {/* <!-- USERNAME INPUT --> */}
            <label htmlFor="email">Ingrese su email</label>
            <input type="email" required placeholder="Email" />

            {/* <!-- PASSWORD INPUT --> */}
            <label htmlFor="password">Password</label>
            <input type="password" required placeholder="Password" />

            <input type="submit" value="Log In" />
            <a href="/">Regresar al inicio.</a>
            <br></br>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
