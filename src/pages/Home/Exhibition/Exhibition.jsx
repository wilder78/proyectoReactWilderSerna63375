function Exhibition() {
  return (
    <>
      <section className="exhibition clear-section">
        <div className="container text-center">
          <div className="row">
            {/* <!-- Repuestos --> */}
            <div className="column col-12 col-md-4">
              <i className="bi bi-gear-wide-connected"></i>
              <h5 className="spare-parts">Repuestos</h5>
              <p>
                Gracias a nuestra amplia gama de repuestos, podemos
                proporcionarte una variedad extensa de marcas que se adaptan a
                una amplia gama de vehículos.
              </p>
              <div className="badges-container">
                <a href="pages/productos.html">
                  <button type="button" className="btn btn-warning">
                    Repuestos
                  </button>
                </a>
              </div>
            </div>
            {/* <!-- Accesorios --> */}
            <div className="column col-12 col-md-4">
              <i className="bi bi-ui-radios-grid"></i>
              <h5 className="spare-parts">Accesorios</h5>
              <p>
                Nuestro extenso catálogo de accesorios te ofrece la posibilidad
                de personalizar tu moto para mejorar tanto su desempeño como su
                apariencia y rendimiento.
              </p>
              <div className="badges-container">
                <a href="pages/productosTwo.html">
                  <button type="button" className="btn btn-warning">
                    Accesorios
                  </button>
                </a>
              </div>
            </div>
            {/* <!-- Vendedores --> */}
            <div className="column col-12 col-md-4">
              <i className="bi bi-person-bounding-box"></i>
              <h5 className="spare-parts">Asesoría</h5>
              <p>
                Nuestro personal está disponible para brindarte asesoramiento
                en el área que más te interese dentro de nuestro catálogo de
                productos.
              </p>
              <div className="badges-container">
                <a href="pages/contactanos.html">
                  <button type="button" className="btn btn-warning">
                    Personal
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Exhibition;
