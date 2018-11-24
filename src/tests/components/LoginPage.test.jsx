import { shallow } from 'enzyme'
import React from 'react'

import { BaseLoginPage } from '../../components/LoginPage'

let startLogIn, wrapper

beforeEach(() => {
  startLogIn = jest.fn()
  wrapper = shallow(<BaseLoginPage startLogIn={startLogIn} />)
})

test('Should render LoginPage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should call startLogIn on button click', () => {
  wrapper.find('button').prop('onClick')()
  expect(startLogIn).toHaveBeenCalled()
})
