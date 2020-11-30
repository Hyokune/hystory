import HeroCategories from 'lib/enums/heroCategories';
import DevLogItem from 'lib/interfaces/devLogItem';
import moment from 'moment';

const DevLogItems: DevLogItem[] = [
  {
    id: 1,
    category: HeroCategories.Announcement,
    date: moment('2020-11-26', 'YYYY-MM-DD').format('DD/MM/YYYY'),
    title: 'Starting my journey',
    blurb: 'Something which I should have started a long time ago, but it\s you know what they say, it\'s never late too start',
    img: { src: '/images/dev-log/dev-log-1.png', alt: 'Dev Log 1 Image' },
  },
];

export default DevLogItems;
