import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import '../LightboxCarousel/LightBoxCarousel.scss';

// `https://cdn.repliers.io/${image}`

function LightBoxCarousel({ imagesArr }) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const images = [];

  imagesArr.forEach(item => {
    const imgSrc = `https://cdn.repliers.io/${item}`;
    images.push(imgSrc);
  })

  return (
    <div className="lightbox">
      <button className='lightbox__button' type="button" onClick={() => setIsOpen(true)}>
        View Gallery
      </button>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
}

export default LightBoxCarousel;
