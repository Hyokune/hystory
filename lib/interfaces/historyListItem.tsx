export default interface HistoryListItem {
  id: number,
  date: string,
  title: string,
  subtitle: string,
  blurb: string | React.ReactElement,
  img: {
    src: string,
    alt: string
  },
  body: React.ReactElement
}
