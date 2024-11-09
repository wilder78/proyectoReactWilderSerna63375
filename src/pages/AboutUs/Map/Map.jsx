function Map() {
  return (
    <section className="mt-4 mb-4">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-12 col-md-8 text-center"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126916.73961650311!2d-75.5812115!3d6.24420345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1725917740913!5m2!1ses!2sco"
                style={{ border: 0 }}
                allowfullscreen={false}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map;
