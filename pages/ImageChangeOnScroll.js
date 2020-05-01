import React from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

const ImageChangeOnScroll = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8].map(imageId => {
        return (
          <div key={imageId}>
            <ImageToggleOnScroll
              primaryImg={`/static/screens/bw/image_${imageId}.png`}
              secondaryImg={`/static/screens/image_${imageId}.png`}
              alt=""
            />
          </div>
        );
      })}
    </div>
  )
};

export default ImageChangeOnScroll;