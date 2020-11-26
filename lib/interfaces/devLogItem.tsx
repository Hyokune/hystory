interface DevLogItem {
  id: number,
  date: Date,
  title: string,
  blurb: string | React.ReactElement,
  img: {
    src: string,
    alt: string,
  },
  body: React.ReactElement,
}

export default DevLogItem;
