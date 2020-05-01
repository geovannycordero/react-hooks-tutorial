import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver'

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg="/static/screens/bw/image_2.png"
        secondaryImg="/static/screens/image_2.png"
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImg="/static/screens/bw/image_3.png"
        secondaryImg="/static/screens/image_3.png"
      />
    </div>
  )
};

export default ImageChangeOnMouseOver;