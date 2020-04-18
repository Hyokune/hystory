import { shallow } from 'enzyme'
import React from 'react'
import Section from './index'

const childElement = <p>Child element</p>

describe('Section component', () => {
  test('render component without error', () => {
    const wrapper = shallow(<Section>{childElement}</Section>)
    expect(wrapper).toMatchSnapshot()
  })
})
