function ImageGallery({ title, text, images = [{ url: "", alt: "" }] }) {
  return (
    <>
      <section className="image-gallery">
        {title && <h2 className="image-gallery__title">{title}</h2>}
        {text && <p className="image-gallery__text">{text}</p>}
        {images && (
          <div className="image-gallery__image-grid page-container">
            {images.map((image) => (
              <div
                key={images.alt}
                className="image-gallery__image-container object-fit"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default ImageGallery;
