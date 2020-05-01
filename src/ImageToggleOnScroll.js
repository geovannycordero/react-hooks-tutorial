import React, { useRef, useEffect, useState } from 'react';

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {

  const imageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    setInView(isInView());
    setIsLoading(false);
    return (() => {
      window.removeEventListener("scroll", scrollHandler);
    });
  }, [isLoading]);

  const [inView, setInView] = useState(false);

  const isInView = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.botton <= window.innerHeight;
    }
    return false;
  };

  const scrollHandler = () => {
    setInView(() => {
      return isInView();
    });
  };

  return isLoading ? null : (
    <img
      src={inView ? secondaryImg : primaryImg}
      alt="" ref={imageRef} width="256" height="256"
    />
  );
}

export default ImageToggleOnScroll;