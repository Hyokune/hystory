import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
import HistoryList from './index'

const setup = () => shallow(<HistoryList />)

describe('HistoryList component', () => {
  let wrapper:ShallowWrapper

  beforeAll(() => {
    wrapper = setup()
    expect(wrapper.exists()).toBe(true)
  })

  test('render component without error', () => {
    const historyList = wrapper.find('ul.history-list')
    expect(historyList.exists()).toBe(true)

    const historyListItems = historyList.find('HistoryListItem')
    expect(historyListItems.length).toEqual(5)

    historyListItems.forEach((item) => {
      expect(item.prop('date')).toBeTruthy()
      expect(item.prop('title')).toBeTruthy()
      expect(item.prop('subtitle')).toBeTruthy()
      expect(item.prop('blurb')).toBeTruthy()
      expect(item.prop('img')).toBeTruthy()
      expect(item.prop('children')).toBeTruthy()
    })
  })
})
