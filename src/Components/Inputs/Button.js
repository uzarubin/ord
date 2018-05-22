import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity } from 'react-native'


const buttonStyles = StyleSheet.create({
  button: {
    width: 200,
    height: 40,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
})

export default function Button(props) {
  return (
    <TouchableOpacity {...props} style={props.style ? props.style : buttonStyles.button}>
      {props.children}
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  style: null,
}

Button.propTypes = {
  children: PropTypes.object.isRequired,
  style: PropTypes.object,
}
