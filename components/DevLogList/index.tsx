import DevLogItem from 'lib/interfaces/devLogItem';
import moment from 'moment';
import React from 'react';

export interface Props {
  items?: DevLogItem[],
}

const DevLogList = ({ items = [] }: Props) => (
  <ul className="dev-log-list">
    {items.map((item) =>
      <li key={item.id} className="dev-log-list-item">
        <img {...item.img} />
        <div className="item-body">
          <h2 className="item-title">{item.title}</h2>
          <p className="item-date">{moment(item.date).format('DD/MM/YYYY')}</p>
          <p className="item-blurb">{item.blurb}</p>
        </div>
      </li>
    )}
  </ul>
);

export default DevLogList;
