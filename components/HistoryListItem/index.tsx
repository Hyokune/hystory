import React from 'react'

export interface Props {
  date: string,
  title: string,
  subtitle?: string,
  blurb?: string | JSX.Element,
  img: {
    src: string,
    fallback?: string,
    alt: string
  },
  children?: React.ReactNode
}

const HistoryListItem = ({ date, title, subtitle, blurb, img, children }: Props) => (
  <li className="history-list-item">
    <div className="item-head">
      <p className="item-date">{date}</p>
      <h2 className="item-title">{title}</h2>
      <p className="item-subtitle">{subtitle}</p>
      <p className="item-blurb">{blurb}</p>
      <div className="item-image">
        <img src={img.src} alt={img.alt} />
      </div>
    </div>
    <div className="item-body">
      {children}
    </div>
  </li>
)

export default HistoryListItem
