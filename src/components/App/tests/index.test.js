import { shallow } from 'enzyme'
import React from 'react'

import { App } from '../index'

beforeEach(() => {
  // Moment uses `Date` internally, so overwriting `Date.now` is a simple mock
  Date.now = jest.fn(() => 0)
})

test('App should render correctly', () => {
  const wrapper = shallow(<App/>)
  expect(wrapper).toMatchSnapshot()
})
