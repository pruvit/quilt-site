import React from 'react'
import { SignupPage } from 'routes/Signup/components/SignupPage/SignupPage'
import { shallow } from 'enzyme'

describe('(Route:Signup Component) SignupPage', () => {
  let _component

  beforeEach(() => {
    _component = shallow(
      <SignupPage
        emailSignup={() => {}}
        googleLogin={() => {}}
        onSubmitFail={() => {}}
      />
    )
  })

  it('Renders div', () => {
    const firstDiv = _component.find('div')
    expect(firstDiv).to.exist
  })

})
