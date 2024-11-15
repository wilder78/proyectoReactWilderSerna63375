function WhoWeAre() {
  return (
    <>
      <section className="our container-fluid">
        <div className="row align-items-center">
          <div
            className="col"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src="../public/image/nosotros.png" alt="misión" />
          </div>
          <div className="col">
            <div className="row-md-12 align-items-start">
              <h3>Quiénes somos</h3>
            </div>
            <div className="row-md-12 align-items-center">
              <p>
                Nosotros conformamos un equipo emprendedor dedicado a ofrecerte
                el servicio de venta de repuestos para motocicletas en Colombia.
                Nuestra sede se encuentra en la ciudad de Medellín.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhoWeAre;
