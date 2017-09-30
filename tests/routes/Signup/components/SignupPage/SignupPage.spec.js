import React from 'react'
import { SignupPage } from 'components/SignupPage/SignupPage'
import { shallow } from 'enzyme'

describe('(Component) SignupPage', () => {
  let _component

  beforeEach(() => {
    _component = shallow(<SignupPage />)
  })

  it('Renders div', () => {
    const firstDiv = _component.find('div')
    expect(firstDiv).to.exist
  })

})
