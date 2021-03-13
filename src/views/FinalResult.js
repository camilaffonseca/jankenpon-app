import React from 'react'

import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'

import ResolveImage from '../components/ResolveImage'

const reloadImage = require('../images/reload.png')

const FinalResult = ({currentOption, currentComputerOption, resetCallback}) => {
  const getFinalResult = () => {
    if (currentOption === currentComputerOption) return 'TIE GAME'
    const victory =
      (currentOption === 'rock' && currentComputerOption === 'scissors') ||
      (currentOption === 'paper' && currentComputerOption === 'rock') ||
      (currentOption === 'scissors' && currentComputerOption === 'paper')
    if (victory) return 'YOU WON!'
    if (!victory) return 'YOU LOST!'
  }

  return (
    <View style={styles.background}>
      <View style={styles.resultView}>
        <View style={styles.imageBackground}>
          <ResolveImage option={currentOption} sizeImage={80} />
        </View>
        <Text style={styles.textResult}>X</Text>
        <View style={styles.imageBackground}>
          <ResolveImage option={currentComputerOption} sizeImage={80} />
        </View>
      </View>
      <Text style={styles.result}>{getFinalResult()}</Text>
      <TouchableOpacity
        style={styles.reloadButton}
        onPress={() => resetCallback()}>
        <Image source={reloadImage} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#5E153C',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageBackground: {
    backgroundColor: '#ddd',
    height: 100,
    width: 100,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textResult: {
    fontFamily: 'Montserrat-Black',
    color: '#ddd',
    fontSize: 40,
    marginHorizontal: 20,
  },
  result: {
    fontFamily: 'Montserrat-Bold',
    color: '#ddd',
    fontSize: 30,
    marginTop: 30,
  },
  reloadButton: {
    position: 'absolute',
    bottom: 70,
  },
})

export default FinalResult
