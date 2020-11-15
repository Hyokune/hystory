import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

interface Props {
  absolute?: boolean,
  width: number,
  height: number,
  src: string,
  alt: string,
}

const NextImage = ({ absolute, width, height, src, alt }: Props) => (
  <div className={cx({
    'next-image': true,
    absolute
  })}>
    <Image layout={absolute ? 'responsive' : 'intrinsic'} width={width} height={height} src={src} alt={alt} />
  </div>
);

export default NextImage;
