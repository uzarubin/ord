/*
  EmailInput.js
  Components/Form/ContextInputs/EmailInput.js
*/
import React from 'react'
import PropTypes from 'prop-types'

import FormContext from '../../../Contexts'
import Button from '../../Inputs/Button'


export default function SubmitButton(props) {
  return (
    <FormContext.Consumer>
      {context => (
        <Button onPress={context.onSubmit}>
          {props.children}
        </Button>
      )}
    </FormContext.Consumer>
  )
}

SubmitButton.propTypes = {
  children: PropTypes.object.isRequired,
}
