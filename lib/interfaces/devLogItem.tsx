import HeroCategories from 'lib/enums/heroCategories';

interface DevLogItem {
  id: number,
  category: HeroCategories,
  date: string,
  title: string,
  blurb: string,
  img: {
    src: string,
    alt: string,
  },
  content: string,
}

export default DevLogItem;
