import { shallow, ShallowWrapper } from 'enzyme';
import HistoryListItem from 'lib/interfaces/historyListItem';
import React from 'react';
import HistoryList from './index';

const setup = (items: HistoryListItem[] = []) => shallow(<HistoryList items={items} />);

describe('HistoryList component', () => {
  let wrapper:ShallowWrapper;

  test('render history list items', () => {
    const items = [
      {
        id: 2,
        date: '2004',
        title: 'Title 2',
        subtitle: 'Subtitle 2',
        blurb: 'Blurb 2',
        img: { src: 'Image 2 src', alt: 'Image 2 alt' },
        body: <p>History list itme 2 body content</p>
      },
      {
        id: 1,
        date: '2002',
        title: 'Title 1',
        subtitle: 'Subtitle 1',
        blurb: 'Blurb 1',
        img: { src: 'Image 1 src', alt: 'Image 1 alt' },
        body: <p>History list itme 1 body content</p>
      }
    ];

    wrapper = setup(items);

    const historyList = wrapper.find('ul.history-list');
    expect(historyList.exists()).toBe(true);

    const historyListItems = historyList.find('li.history-list-item');
    expect(historyListItems.length).toEqual(items.length);

    historyListItems.forEach((item, index) => {      
      const date = item.find('p.item-date');
      expect(date.text()).toEqual(items[index].date);

      const title = item.find('h2.item-title');
      expect(title.text()).toEqual(items[index].title);

      const subtitle = item.find('p.item-subtitle');
      expect(subtitle.text()).toEqual(items[index].subtitle);

      const blurb = item.find('p.item-blurb');
      expect(blurb.text()).toEqual(items[index].blurb);

      const image = item.find('Image');
      expect(image.props().src).toEqual(items[index].img.src);
      expect(image.props().alt).toEqual(items[index].img.alt);

      const itemBody = item.find('div.item-body');
      expect(itemBody.children().containsMatchingElement(items[index].body)).toBe(true);
    });
  });

  test('render no history list items', () => {
    wrapper = setup();

    const historyList = wrapper.find('ul.history-list');
    expect(historyList.exists()).toBe(true);

    const historyListItems = historyList.find('li.history-list-item');
    expect(historyListItems.length).toEqual(0);
  });
});
