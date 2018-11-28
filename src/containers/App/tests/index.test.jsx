import { shallow } from 'enzyme'
import React from 'react'

import { App } from '..'

describe('App container', () => {
  beforeEach(() => {
    // Moment uses `Date` internally, so overwriting `Date.now` is a simple mock
    Date.now = jest.fn(() => 0)
  })

  test('should render correctly', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper).toMatchSnapshot()
  })
})
