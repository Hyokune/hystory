
import HistoryListItem from 'lib/interfaces/historyListItem'
import Image from 'next/image'
import React from 'react'

export interface Props {
  items?: HistoryListItem[]
}

const HistoryList = ({ items = [] }: Props) => (
  <ul className="history-list">
    {items.map((item) =>
      <li key={item.id} className="history-list-item">
        <div className="item-head">
          <p className="item-date">{item.date}</p>
          <h2 className="item-title">{item.title}</h2>
          <p className="item-subtitle">{item.subtitle}</p>
          <p className="item-blurb">{item.blurb}</p>
          <div className="item-image">
            <Image unsized {...item.img} />
          </div>
        </div>
        <div className="item-body">
          {item.body}
        </div>
      </li>
    )}
  </ul>
)

export default HistoryList
