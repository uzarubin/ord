/*
  EmailInput.js
  Components/Form/ContextInputs/EmailInput.js
*/
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import FormContext from '../../../Contexts'
import BasicInput from '../../Inputs/BasicInput'


const emailInputStyles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 20,
  },
})

export default class EmailInput extends Component {
  validateInput = () => {
    // Will be input validation
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // const validationError = regex.test(e.nativeEvent.text)
  }

  render() {
    return (
      <FormContext.Consumer>
        {context => (
          <View>
            <BasicInput
              style={emailInputStyles.input}
              name="email"
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={context.onChangeText}
              onBlur={this.validateInput}
            />
          </View>
        )}
      </FormContext.Consumer>
    )
  }
}

