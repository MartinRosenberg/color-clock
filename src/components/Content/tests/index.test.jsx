import { shallow } from 'enzyme'
import React from 'react'
import { Content } from '../index'

describe('Content component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<Content/>)
    expect(wrapper).toMatchSnapshot()
  })
})
