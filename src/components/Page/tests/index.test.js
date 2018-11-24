import { shallow } from 'enzyme'
import React from 'react'

import { Page } from '../index'

test('Page should render correctly', () => {
  const wrapper = shallow(<Page/>)
  expect(wrapper).toMatchSnapshot()
})
