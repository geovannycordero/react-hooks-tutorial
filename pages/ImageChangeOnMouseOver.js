import ImageTogglerOnMouseOver from '../src/ImageTogglerOnMouseOver'

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageTogglerOnMouseOver
        primaryImg="/static/screens/bw/image_2.png"
        secondaryImg="/static/screens/image_2.png"
      />
      &nbsp;&nbsp;&nbsp;
      <ImageTogglerOnMouseOver
        primaryImg="/static/screens/bw/image_3.png"
        secondaryImg="/static/screens/image_3.png"
      />
    </div>
  )
};

export default ImageChangeOnMouseOver;