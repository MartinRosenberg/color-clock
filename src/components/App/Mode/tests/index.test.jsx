import { shallow } from 'enzyme'
import React from 'react'

import { Mode } from '..'

let handleSetMode

beforeEach(() => {
  handleSetMode = jest.fn()
})

describe('Mode component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<Mode handleSetMode={handleSetMode}/>)
    expect(wrapper).toMatchSnapshot()
  })
})


describe(`button`, () => {
  test('should call handleSetMode with correct mode', () => {})
})
