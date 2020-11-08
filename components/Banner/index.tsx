import cx from 'classnames';
import Breakpoints from 'lib/enums/breakpoints';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import GlowingSpinner from '../GlowingSpinner';

interface Props {
  description: string,
  image: {
    src: string,
    alt: string,
  },
  reverse?: boolean,
  title: string,
}

const Banner = ({ description, image, reverse, title }: Props) => {
  const [width, setWidth] = useState(1000);

  const calculateSpinnerSize = () => {
    if (window.innerWidth > width && width < 1000) {
      setWidth(window.innerWidth);
    } else if (window.innerWidth < width && window.innerWidth < Breakpoints.TabletLarge) {
      setWidth(window.innerWidth + 200);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', calculateSpinnerSize);

    return () => {
      window.removeEventListener('resize', calculateSpinnerSize);
    };
  }, [calculateSpinnerSize]);

  return (
    <div className={cx({
      banner: true,
      reverse: reverse
    })}>
      <div className={cx({
        'banner-image': true,
        'fade-in-left': !reverse,
        'fade-in-right': reverse
      })}>
        <Image unsized src={image.src} alt={image.alt} />
      </div>
      <div className={cx({
        'banner-description': true,
        'fade-in-left': reverse,
        'fade-in-right': !reverse
      })}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <GlowingSpinner width={width} height={1000} />
    </div>
  );
};

export default Banner;
