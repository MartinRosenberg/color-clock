import { shallow } from 'enzyme'
import React from 'react'

import { NotFoundPage } from '../../components/NotFound'

test('Should render NotFoundPage correctly', () => {
  const wrapper = shallow(<NotFoundPage />)
  expect(wrapper).toMatchSnapshot()
})
