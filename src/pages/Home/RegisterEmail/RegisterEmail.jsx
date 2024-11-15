function RegisterEmail() {
  return (
    <>
      <section className="register">
        <div className="register-info d-flex flex-column col-12 col-md-6 col-lg-6">
          <img
            src="../public/image/botón de registro_azul.png"
            alt="seccion registro"
          />
        </div>
        <div className="container col-12 col-md-6 col-lg-6">
          <form id="formulario">
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ingrese su Nombre"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingrese su email"
              required
            />
            <input type="submit" value="Registrar" className="button_grey" />
          </form>
        </div>
      </section>
    </>
  );
}

export default RegisterEmail;
