import { shallow } from 'enzyme'
import React from 'react'
import Intro from './index'

describe('Intro component', () => {
  test('render component without error', () => {
    const wrapper = shallow(<Intro />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.hasClass('intro')).toBe(true)
  })
})
