import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

import Form from '../Form/Form'
import {
  EmailInput,
  PasswordInput,
  SubmitButton,
} from '../../Components/Form/ContextInputs'

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250,
  },
})


// eslint-disable-next-line
export default class LoginForm extends Component {
  submit = (payload) => {
    console.log('Inside form submit', payload)
  }

  render() {
    return (
      <View style={styles.container}>
        <Form style={styles.container} onSubmit={this.submit}>
          <EmailInput />
          <PasswordInput />
          <SubmitButton>
            <Text>Login</Text>
          </SubmitButton>
        </Form>
      </View>
    )
  }
}
