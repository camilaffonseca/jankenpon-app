import React from 'react'

import {View, Text, StyleSheet} from 'react-native'

import ResolvedImage from '../components/ResolveImage'

const PlayerSelectedOption = ({currentOption}) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>YOUR OPTION</Text>
      <ResolvedImage option={currentOption} sizeImage={50} />
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#ddd',
    paddingHorizontal: 30,
    paddingVertical: 10,
    flexDirection: 'row',
    position: 'absolute',
    top: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '75%',
  },
  textStyle: {
    fontSize: 15,
    color: '#5E153C',
    fontFamily: 'Montserrat-Bold',
  },
})

export default PlayerSelectedOption
