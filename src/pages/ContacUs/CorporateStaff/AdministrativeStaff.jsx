function AdministrativeStaff() {
  return (
    <>
      <section className="staff container-fluid">
        <div className="row align-items-center">
          <div className="col align-content-center">
            <div className="row-md-12 align-items-start">
              <h3>Carolina Martines Muñoz.</h3>
            </div>
            <div className="row-md-12 align-items-center">
              <p>
                Nuestra secretaria de asesoría y ventas, te ofrece soluciones y
                el mejor asesoramiento para tus compras. Te informará sobre
                nuestros cambios y mejoras, atenderá tus sugerencias y brindará
                soluciones a cualquier inconveniente que puedas tener.
              </p>
              <div className="iconos-contac d-flex flex-wrap align-content-center justify-content-center">
                <a
                  href="https://web.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a
                  href="mailto:secretaria@mmsrepuestos.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col align-content-center"
            data-aos="zoom-out-down"
            data-aos-duration="3000"
          >
            <img
              className="image-circle"
              src="../public/image/secretariaP.png"
              alt="secretaria"
            />
          </div>
        </div>
      </section>

      <section className="staff container-fluid">
        <div className="row align-items-center">
          <div
            className="col align-content-center"
            data-aos="zoom-out-down"
            data-aos-duration="3000"
          >
            <img
              className="image-circle"
              src="../public/image/cartera.png"
              alt="area de cartera"
            />
          </div>
          <div className="col">
            <div className="row-md-12 align-items-start">
              <h3>Area de cartera.</h3>
            </div>
            <div className="row-md-12 align-items-center">
              <p>
                Nuestra área de cartera está a tu disposición para asesorarte e
                informarte sobre el estado de tus pagos y créditos, así como los
                medios que puedes solicitar y aplicar en tus compras.
              </p>
              <div className="iconos-contac d-flex flex-wrap align-content-center justify-content-center">
                <a
                  href="https://web.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a
                  href="mailto:cartera@mmsrepuestos.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="staff container-fluid">
        <div className="row align-items-center">
          <div className="col align-content-center">
            <div className="row-md-12 align-items-start">
              <h3>Area de despacho.</h3>
            </div>
            <div className="row-md-12 align-items-center">
              <p>
                Nuestro personal altamente capacitado trabaja continuamente para
                empacar y enviar de manera rápida y segura los productos que
                adquieres con nosotros.
              </p>
              <div className="iconos-contac d-flex flex-wrap align-content-center justify-content-center">
                <a
                  href="https://web.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a
                  href="mailto:despachos@mmsrepuestos.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col align-content-center"
            data-aos="zoom-out-down"
            data-aos-duration="3000"
          >
            <img
              className="image-circle"
              src="../public/image/despacho.png"
              alt="despacho"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AdministrativeStaff;
