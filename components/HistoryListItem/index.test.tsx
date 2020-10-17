import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
import HistoryListItem, { Props } from './index'

const defaultProps: Props = {
  date: '2000',
  title: 'History list item title',
  subtitle: 'History list item subtitle',
  blurb: 'History list item blurb',
  img: {
    src: 'Image source',
    alt: 'Image alt'
  }
}

const defaultChildren = <p>Child item</p>

const setup = (props: Props) => shallow(
  <HistoryListItem {...props}>
    {defaultChildren}
  </HistoryListItem>
)

describe('HistoryList component', () => {
  let wrapper:ShallowWrapper

  beforeAll(() => {
    wrapper = setup(defaultProps)
    expect(wrapper.exists()).toBe(true)
  })

  test('render component without error', () => {
    const historyListItem = wrapper.find('li.history-list-item')
    expect(historyListItem.exists()).toBe(true)
    
    const date = historyListItem.find('p.item-date')
    expect(date.text()).toEqual(defaultProps.date)

    const title = historyListItem.find('h2.item-title')
    expect(title.text()).toEqual(defaultProps.title)

    const subtitle = historyListItem.find('p.item-subtitle')
    expect(subtitle.text()).toEqual(defaultProps.subtitle)

    const blurb = historyListItem.find('p.item-blurb')
    expect(blurb.text()).toEqual(defaultProps.blurb)

    const image = historyListItem.find('img')
    expect(image.props().src).toEqual(defaultProps.img.src)
    expect(image.prop('fallback')).toEqual(defaultProps.img.fallback)
    expect(image.props().alt).toEqual(defaultProps.img.alt)

    const itemBody = historyListItem.find('div.item-body')
    expect(itemBody.children().containsMatchingElement(defaultChildren)).toBe(true)
  })
})
