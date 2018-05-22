import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextInput } from 'react-native'


export default class BasicInput extends Component {
  updateFormState = (text) => {
    const { name, onChangeText } = this.props
    if (name) {
      onChangeText({ [name]: text })
    } else {
      onChangeText(text)
    }
  }
  render() {
    return (
      <TextInput {...this.props} onChangeText={this.updateFormState} />
    )
  }
}

BasicInput.defaultProps = {
  name: '',
}

BasicInput.propTypes = {
  name: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
}
