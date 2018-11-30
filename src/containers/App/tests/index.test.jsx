import { shallow } from 'enzyme'
import React from 'react'

import { App } from '..'

beforeEach(() => {
  Date.now = jest.fn(() => 0)
})

describe('App container', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper).toMatchSnapshot()
  })
})
