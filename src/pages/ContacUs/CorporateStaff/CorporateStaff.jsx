import { Link } from "react-router-dom";

function CorporateStaff() {
  return (
    <>
      <section className="staff container-fluid">
        <div className="row align-items-center">
          <div className="col align-content-center">
            <div className="row-md-12 align-items-start">
              <h3>Juan Quiñonez Martines.</h3>
            </div>
            <div className="row-md-12 align-items-center">
              <p>
                Jefe de ventas del norte, está encargado de visitar los
                departamentos de La Guajira, Atlántico, Bolívar, Cesar, Córdoba,
                Magdalena y Sucre. Su prioridad es asesorar en los tipos de
                repuestos y accesorios para el norte del país.
              </p>
              <div className="iconos-contac d-flex flex-wrap align-content-center justify-content-center">
                <Link
                  to="https://web.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i>
                </Link>
                <Link
                  to="mailto:juanventasnorte@mmsrepuestos.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-envelope"></i>
                </Link>
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
              src="../public/image/asesorNorte.png"
              alt="ventas norte"
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
              src="../public/image/asesorCentro.png"
              alt="ventas centro"
            />
          </div>
          <div className="col">
            <div className="row-md-12 align-items-start">
              <h3>Adriana Zapata Loaiza.</h3>
            </div>
            <div className="row-md-12 align-items-center">
              <p>
                Jefe de ventas del centro, está encargada de visitar los
                departamentos de Boyacá, Cundinamarca, Meta y Tolima. Su
                prioridad es asesorar en los tipos de repuestos y accesorios
                para el centro del país.
              </p>
              <div className="iconos-contac d-flex flex-wrap align-content-center justify-content-center">
                <Link
                  to="https://web.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i>
                </Link>
                <Link
                  to="mailto:adrianaventascentro@mmsrepuestos.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-envelope"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="staff container-fluid">
        <div className="row align-items-center">
          <div className="col">
            <div className="row-md-12 align-items-start">
              <h3>Fernado Lopez Lopera.</h3>
            </div>
            <div className="row-md-12 align-items-center">
              <p>
                Jefe de ventas del sur, está encargado de visitar los
                departamentos de Valle del Cauca, Cauca, Nariño y Putumayo. Su
                prioridad es asesorar en los tipos de repuestos y accesorios
                para el norte del país.
              </p>
              <div className="iconos-contac d-flex flex-wrap align-content-center justify-content-center">
                <Link
                  to="https://web.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i>
                </Link>
                <Link
                  to="mailto:fernandoventassur@mmsrepuestos.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-envelope"></i>
                </Link>
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
              src="../public/image/asesorSur.png"
              alt="ventas norte"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default CorporateStaff;
