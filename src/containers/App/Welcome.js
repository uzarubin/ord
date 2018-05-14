/*
  @flow
*/

import React from 'react'

import { Text } from 'react-native'

type Props = {
  msg: string,
}

export default function (props: Props) {
  return <Text> {props.msg ? props.msg : 'Welcome to React Native'} </Text>
}
