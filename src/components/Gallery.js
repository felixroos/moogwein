import React from 'react';

export const Gallery = ({ images, crop, columns }) => {
  return (<div data-grid>
    {images.map((image, index) => (
      <div data-col="auto" className={`column-${columns || 2}`} key={index}>
        <div className={`img-crop-${crop || 'golden'}`}>
          <img alt="" className="img_full" src={image.src} />
        </div>
        <p>{image.caption}</p>
      </div>))}
  </div>);
}
