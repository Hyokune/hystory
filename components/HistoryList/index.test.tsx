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
    const historyList = wrapper.find('ul#history-list')
    expect(historyList.exists()).toBe(true)

    const historyListItems = historyList.find('li.history-list-item')
    expect(historyListItems.length).toEqual(5)

    historyListItems.forEach((item, index) => {
      const infoBox = item.find('div.info-box')
      expect(infoBox.exists()).toBe(true)

      const infoDate = infoBox.find('p.info-date')
      expect(infoBox.exists()).toBe(true)

      const infoTitle = infoBox.find('h2.info-title')
      expect(infoTitle.exists()).toBe(true)

      const infoSubtitle = infoBox.find('p.info-subtitle')
      expect(infoSubtitle.exists()).toBe(true)

      const infoImage = infoBox.find('img')
      expect(infoImage.exists()).toBe(true)

      const infoBlurb = infoBox.find('p.info-blurb')
      expect(infoBlurb.exists()).toBe(true)

      const descriptionBox = item.find('div.description-box')
      expect(descriptionBox.exists()).toBe(true)
    })
  })
})
