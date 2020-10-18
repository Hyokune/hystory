import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
import GlowingSpinner, { Props } from './index'

const defaultProps: Props = {
  width: 1000,
  height: 1000
}

const setup = (props: Props = defaultProps) => shallow(<GlowingSpinner {...props} />)

describe('HistoryList component', () => {
  let wrapper:ShallowWrapper

  beforeAll(() => {
    wrapper = setup()
    expect(wrapper.exists()).toBe(true)
  })

  test('render component without error', () => {
    const glowingSpinner = wrapper.find('svg.glowing-spinner')
    expect(glowingSpinner.exists()).toBe(true)
    expect(glowingSpinner.props().width).toEqual(defaultProps.width)
    expect(glowingSpinner.props().height).toEqual(defaultProps.height)

    const arcFilter = glowingSpinner.find('filter#arc-blur')
    expect(arcFilter.find('feGaussianBlur').exists()).toBe(true)

    const glowArcFilter = glowingSpinner.find('filter#glow-arc-blur')
    expect(glowArcFilter.find('feGaussianBlur').exists()).toBe(true)

    const circularArcs = glowingSpinner.find('CircularArc')
    expect(circularArcs.length).toEqual(12)

    circularArcs.forEach((circularArc) => {
      expect(circularArc.prop('x')).toEqual(defaultProps.width / 2)
      expect(circularArc.prop('y')).toEqual(defaultProps.height / 2)
    })
  })
})
