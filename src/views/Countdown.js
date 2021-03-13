import React, {useEffect, useState} from 'react'

import {Text, StyleSheet, View} from 'react-native'

import PlayerSelectedOption from '../components/PlayerSelectedOption'

const Countdown = ({setCurrentPage, currentOption}) => {
  const [count, setCount] = useState(3)

  useEffect(() => {
    if (count === 0) {
      setCurrentPage('computerResult')
    } else {
      const timer = setTimeout(() => {
        setCount(count - 1)
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [count])

  return (
    <View style={styles.viewStyle}>
      <PlayerSelectedOption currentOption={currentOption} />
      <Text style={styles.countStyle}>{count || ''}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#5E153C',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countStyle: {
    fontSize: 100,
    color: '#ddd',
  },
})

export default Countdown
