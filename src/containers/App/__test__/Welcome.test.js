import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Welcome from '../Welcome'

// Snapshot testing
describe('Testing Welcome text component', () => {
  it('renders default message without msg prop', () => {
    const tree = renderer.create(<Welcome />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders msg when msg prop is passed', () => {
    const wrapper = shallow(<Welcome msg="Hello from tests!" />)
    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ msg: 'Hello World from tests!' })
    expect(wrapper).toMatchSnapshot()
  })
})
