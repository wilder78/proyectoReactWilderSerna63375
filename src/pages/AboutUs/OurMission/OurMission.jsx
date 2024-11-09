function OurMission() {
  return (
    <>
      <section className="mission container-fluid">
        <div className="row align-items-center">
          <div className="col">
            <div className="row-md-12 align-items-start">
              <h3>Nuestra misión</h3>
            </div>
            <div className="row-md-12 align-items-center">
              <p>
                En MMS-Repuestos, nos esforzamos por mejorar continuamente
                nuestros medios de atención y venta, utilizando tecnologías
                innovadoras para garantizar la comodidad y satisfacción de
                nuestros clientes en cada interacción. Con un enfoque en la
                expansión de nuestras áreas de venta, buscamos llegar a nuevos
                mercados y comunidades, ofreciendo soluciones confiables y
                accesibles para las necesidades de repuestos de vehículos.
                Nuestro compromiso es ser líderes en la industria, creando valor
                para nuestros clientes, empleados y accionistas mientras
                contribuimos al crecimiento sostenible de la empresa y las
                comunidades a las que servimos.
              </p>
            </div>
          </div>
          <div
            className="col"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src="../public/image/mision.png" alt="misión" />
          </div>
        </div>
      </section>
    </>
  );
}

export default OurMission;
