import { shallow } from 'enzyme'
import React from 'react'
import Header from './index'

describe('Header component', () => {
  test('render component without error', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.hasClass('header')).toBe(true)
  })
})
