import DevLogItem from 'lib/interfaces/devLogItem';
import React from 'react';

export interface Props {
  items?: DevLogItem[],
}

const DevLogList = ({ items = [] }: Props) => (
  <ul className="dev-log-list">
    {items.map((item) =>
      <li key={item.id}>
        <a className="dev-log-list-item" href={`dev/${item.id}`}>
          <img {...item.img} />
          <div className="item-body">
            <h2 className="item-title">{item.title}</h2>
            <p className="item-date">{item.date}</p>
            <p className="item-blurb">{item.blurb}</p>
          </div>
        </a>
      </li>
    )}
  </ul>
);

export default DevLogList;
