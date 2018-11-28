import { shallow } from 'enzyme'
import React from 'react'

import { Body } from '..'

describe('Body component', function () {
  test('should render correctly', () => {
    const wrapper = shallow(<Body color={'#123456'}/>)
    expect(wrapper).toMatchSnapshot()
  })
})
