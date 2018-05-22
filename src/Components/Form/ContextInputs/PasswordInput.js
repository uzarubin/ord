/*
  EmailInput.js
  Components/Form/ContextInputs/EmailInput.js
*/
import React from 'react'
import { View, StyleSheet } from 'react-native'

import FormContext from '../../../Contexts'
import BasicInput from '../../Inputs/BasicInput'


const passwordInputStyles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 20,
  },
})

export default () => (
  <FormContext.Consumer>
    {context => (
      <View>
        <BasicInput
          style={passwordInputStyles.input}
          name="password"
          placeholder="Password"
          onChangeText={context.onChangeText}
          secureTextEntry
        />
      </View>
    )}
  </FormContext.Consumer>
)
