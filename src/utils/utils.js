import { useEffect, useState } from "react";
import { VIEWPORT_WIDE, VIEWPORT_MIDDLE, VIEWPORT_THIN } from '../constants/constants';

export const getViewportSizes = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height }
}

export const useViewportSizes = () => {
  const [dimensions, setDimensions] = useState(getViewportSizes());

  useEffect(() => {
    const resizeFunc = () => {
      setDimensions(getViewportSizes());
    }
    window.addEventListener('resize', resizeFunc);
    return () => {
      window.removeEventListener('resize', resizeFunc);
    }
  }, []);

  return dimensions;
}

export const useSkipTake = (arr) => {
   let partQuantity;
   let uploadQuantity;
   const { width } = useViewportSizes();

    const viewportWidth = width >= 1280 ? VIEWPORT_WIDE : width >= 768 ? VIEWPORT_MIDDLE : VIEWPORT_THIN;
    switch(viewportWidth) {
      case VIEWPORT_WIDE:
        partQuantity = 12;
        uploadQuantity = 3;
        break;
      case VIEWPORT_MIDDLE:
        partQuantity = 8;
        uploadQuantity = 2;
        break;
      case VIEWPORT_THIN:
        partQuantity = 5;
        uploadQuantity = 2;
        break;
      default:
    }

    return { partQuantity, uploadQuantity };
}