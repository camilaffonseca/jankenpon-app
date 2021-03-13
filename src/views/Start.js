import React from 'react'
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native'

const logoImage = require('../images/logo.png')

const StartPage = ({pageActionStartClickCallback}) => {
  const handleStartClick = () => {
    if (pageActionStartClickCallback) {
      pageActionStartClickCallback()
    }
  }

  return (
    <View style={styles.viewStyle}>
      <Image source={logoImage} />
      <TouchableOpacity onPress={handleStartClick}>
        <Text style={styles.textButtonStyle}>START</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#5E153C',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonStyle: {
    fontSize: 30,
    fontFamily: 'Montserrat-Black',
    color: '#ddd',
    marginTop: 40,
  },
})

export default StartPage
