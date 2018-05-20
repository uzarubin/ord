import React from 'react'
import {
  StyleSheet,
  TexInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Field, reduxForm } from 'redux-form/immutable'

const submit = values => {
  console.log('submitting form', values.toJS())
}

const renderInput = ({ input: { onChange, ...restInput }}) => {
  return
}
