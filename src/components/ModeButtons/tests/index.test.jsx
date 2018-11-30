import { shallow } from 'enzyme'
import React from 'react'

import { ModeButtons } from '../index'

let handleSetMode

beforeEach(() => {
  handleSetMode = jest.fn()
})

describe('ModeButtons component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<ModeButtons handleSetMode={handleSetMode}/>)
    expect(wrapper).toMatchSnapshot()
  })
})


describe(`button`, () => {
  test('should call handleSetMode with correct mode', () => {})
})
