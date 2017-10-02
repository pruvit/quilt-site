import React from 'react'
import { LoginPage } from 'routes/Login/components/LoginPage/LoginPage'
import { shallow } from 'enzyme'

describe('(Route:Login Component) LoginPage', () => {
  let _component

  beforeEach(() => {
    _component = shallow(
      <LoginPage
        emailLogin={() => {}}
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
