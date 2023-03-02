import React, { memo, useMemo, useRef } from 'react';
import { loadImage } from '@Tools/image-loader';

function Image(ImageProps) {
  /* Global & Local State */
  const { src, srcUrl, typeCircular, typeBorder, typeSize, typeAsCover, typeAsFull, style, nativeProps } = ImageProps;
  const imageRefs = useRef(null);
  /* Views */
  const RenderCircular = useMemo(() => {
    if (typeCircular) {
      return { borderRadius: 100 };
    }
    return '';
  }, [typeCircular]);
  const RenderBorder = useMemo(() => {
    if (typeBorder) {
      return { border: '4px solid #000000' };
    }
    return '';
  }, [typeBorder]);
  const RenderSize = useMemo(() => {
    switch (typeSize) {
      case 'tiny':
        return { width: '8px', height: 'auto' };
      case 'small':
        return { width: '16px', height: 'auto' };
      case 'small2':
        return { width: '24px', height: 'auto' };
      case 'smallMedium':
        return { width: '35px', height: 'auto' };
      case 'medium':
        return { width: '49.8px', height: 'auto' };
      case 'medium2':
        return { width: '60px', height: 'auto' };
      case 'large':
        return { width: '96px', height: 'auto' };
      case 'xl':
        return { width: '120px', height: 'auto' };
      case 'xxl':
        return { width: '172px', height: 'auto' };
      case 'fit':
        return { width: '100%', height: '100%' };
      default:
        return { width: '100%', height: '100%' };
    }
  }, [typeSize]);
  const RenderCover = useMemo(() => {
    if (typeAsFull) {
      return '';
    }
    if (typeAsCover) {
      return { objectFit: 'cover' };
    }
    return { objectFit: 'contain' };
  }, [typeAsCover, typeAsFull]);
  const RenderSrc = useMemo(() => {
    let imageSrc = '';
    if (srcUrl) {
      return srcUrl;
    }
    if (src) {
      return loadImage(src);
    }
    imageSrc = loadImage('general/logo.png');
    return imageSrc;
  }, [src, srcUrl]);
  /* Main */
  return (
    <React.Fragment>
      <img
        {...nativeProps}
        style={{ ...RenderBorder, ...RenderCircular, ...RenderSize, ...RenderCover, ...style }}
        ref={imageRefs}
        alt="custom"
        src={RenderSrc}
        loading="lazy"
      />
    </React.Fragment>
  );
}

export default memo(Image);
