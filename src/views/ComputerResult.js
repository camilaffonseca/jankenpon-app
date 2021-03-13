import React, {useEffect} from 'react'

import {Text, StyleSheet, View} from 'react-native'

import ResolveImage from '../components/ResolveImage'
import PlayerSelectedOption from '../components/PlayerSelectedOption'

const ComputerResult = ({
  currentComputerOption,
  setCurrentComputerOption,
  currentOption,
  setCurrentPage,
}) => {
  const randomNumber = parseInt(Math.random() * 3) + 1

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPage('finalResult')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    switch (randomNumber) {
      case 1:
        setCurrentComputerOption('rock')
        break
      case 2:
        setCurrentComputerOption('paper')
        break
      case 3:
        setCurrentComputerOption('scissors')
        break
      default:
        setCurrentComputerOption('rock')
        break
    }
  }, [])

  return (
    <View style={styles.background}>
      <PlayerSelectedOption currentOption={currentOption} />
      <View style={styles.imageBackground}>
        <ResolveImage option={currentComputerOption} sizeImage={110} />
      </View>
      <Text style={styles.optionText}>
        {currentComputerOption?.toUpperCase()}!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#5E153C',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    backgroundColor: '#ddd',
    borderRadius: 100,
    height: 160,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    fontFamily: 'Montserrat-Bold',
    color: '#ddd',
    fontSize: 35,
    marginTop: 25,
  },
})

export default ComputerResult
