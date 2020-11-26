import DevLogItem from 'lib/interfaces/devLogItem';
import { Fragment } from 'react';

const DevLogItems: DevLogItem[] = [
  {
    id: 1,
    date: new Date('2020-11-26'),
    title: 'Starting my journey',
    blurb: 'Something which I should have started a long time ago, but it\s you know what they say, it\'s never late too start',
    img: { src: '/images/dev-log/dev-log-1.png', alt: 'Dev Log 1 Image' },
    body:
      <Fragment>
      </Fragment>
  },
];

export default DevLogItems;
