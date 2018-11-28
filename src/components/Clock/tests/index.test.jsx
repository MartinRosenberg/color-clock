import { shallow } from 'enzyme'
import React from 'react'

import { Clock } from '..'

describe('Clock component', function () {
  test('should render correctly', () => {
    const wrapper = shallow(<Clock color={'#123456'} time={'12:34:56'}/>)
    expect(wrapper).toMatchSnapshot()
  })
})
