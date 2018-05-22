import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import FormContext from '../../Contexts'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  submitForm = () => {
    // calling the submit function
    this.props.onSubmit()
  }

  render() {
    const context = {
      onChangeText: value => this.setState({ ...value }),
      onSubmit: this.submitForm,
    }
    return (
      <FormContext.Provider value={context}>
        <View style={this.props.style}>
          {this.props.children}
        </View>
      </FormContext.Provider>
    )
  }
}


Form.propTypes = {
  style: PropTypes.number.isRequired, // Because style is a StyleSheet object
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
}
