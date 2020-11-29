interface DevLogItem {
  id: number,
  date: string,
  title: string,
  blurb: string,
  img: {
    src: string,
    alt: string,
  },
}

export default DevLogItem;
