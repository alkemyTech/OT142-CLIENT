import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImg = ({ src, alt }) => {
  return (
    <>
        <LazyLoadImage
          src={src}
          alt={alt}
          effect='blur'
        />
    </>
  );
};

export default LazyImg;
