function WorkTeam() {
  return (
    <>
        <section className="work-team">
      <div id="care-staff" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <img className="care-image rounded-circle" src="../public/image/atencionCl.png" alt="atención cliente" />
              <p className="care-text">Nuestro equipo está altamente capacitado para atender cualquier
                solicitud
                o
                pregunta que puedas tener sobre nuestra amplia gama de productos, nuestra ubicación y la
                disponibilidad de los mismos.</p>
              <div className="care-info">
                <p className="charge">Atención al cliente</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <img className="care-image rounded-circle" src="../public/image/despacho.png" alt="bodega y despacho" />
              <p className="care-text">Nuestro equipo se esfuerza continuamente para garantizar el envío
                rápido
                de
                tus paquetes a cualquier lugar de entrega en los diversos puntos del país.</p>
              <div className="care-info">
                <p className="charge">Area de despacho</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <img className="care-image rounded-circle" src="../public/image/asesoria.png" alt="asesoria" />
              <p className="care-text">Nuestros asesores realizan visitas a tu local comercial para
                proporcionarte
                muestras de nuestros productos, permitiéndote así verificar su calidad antes de tomar
                una
                decisión.</p>
              <div className="care-info">
                <p className="charge">Asesoría comercial</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <img className="care-image rounded-circle" src="../public/image/cartera.png" alt="medios de pago" />
              <p className="care-text">Ofrecemos una variedad de opciones de pago para simplificar tu
                experiencia
                de
                compra.</p>
              <div className="care-info">
                <p className="charge">Medios de pago.</p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#care-staff" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#care-staff" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    </>
  )
}

export default WorkTeam