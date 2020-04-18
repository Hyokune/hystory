import { shallow } from 'enzyme'
import React from 'react'
import Layout from './index'

const childElement = <p>Child element</p>

describe('Layout component', () => {
  test('render component without error', () => {
    const wrapper = shallow(<Layout>{childElement}</Layout>)
    expect(wrapper).toMatchSnapshot()
  })
})
