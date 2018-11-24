import { shallow } from 'enzyme'
import React from 'react'

import { BaseHeader } from '../../components/Header'

let startLogOut, wrapper

beforeEach(() => {
  startLogOut = jest.fn()
  wrapper = shallow(<BaseHeader startLogOut={startLogOut} />)
})

test('Should render Header correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should call startLogOut on button click', () => {
  wrapper.find('button').prop('onClick')()
  expect(startLogOut).toHaveBeenCalled()
})
