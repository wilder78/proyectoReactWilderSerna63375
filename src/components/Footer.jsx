function Footer() {
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="row p-5 text-white">
            <div className="col-sm-12 col-md-4 col-lg-4">
                <a className="navbar-brand" href="index.html">
                    <img src="../public/assets/image/LogoMs2.png" width="40" alt="LogoMs2" />
                    MMS-Repuestos
                </a>
                <p>Como importadores, proveemos repuestos de alta calidad para motocicletas, con el fin de optimizar
                    el
                    rendimiento de tu vehículo y cumplir con todas tus exigencias y necesidades.</p>
                <p>Medellin - Colombia</p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
                <h5>Links</h5>
                <div className="mb-2">
                    <a className="text-white text-decoration-none" href="./index.html">Inicio</a>
                </div>
                <div className="mb-2">
                    <a className="text-white text-decoration-none" href="./pages/products.html">Productos</a>
                </div>
                <div className="mb-2">
                    <a className="text-white text-decoration-none" href="./pages/weAre.html">Nosotros</a>
                </div>
                <div className="mb-2">
                    <a className="text-white text-decoration-none" href="./pages/contactUs.html">Contáctanos</a>
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
                <h5>Centro de ayuda</h5>
                <div className="mb-2">
                    <a className="text-white text-decoration-none" href="#">Servicio al cliente</a>
                </div>
                <div className="mb-2">
                    <a className="text-white text-decoration-none" href="#">Contacto</a>
                </div>
                <div className="mb-2">
                    <a className="text-white text-decoration-none" href="#">Noticias</a>
                </div>
                <div className="mb-2">
                    <a className="text-white text-decoration-none" href="#">Promociones</a>
                </div>
            </div>
            <div className="iconos-redes d-flex flex-wrap align-items-end justify-content-end">
                <a href="mailto:info@mmsrepuestos.com" target="_blank" rel="noopener noreferrer"><i
                        className="bi bi-envelope"></i></a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i
                        className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i
                        className="bi bi-instagram"></i></a>
            </div>
            <div id="footer" className="copyright"></div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
