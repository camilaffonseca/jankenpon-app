import React, { useEffect } from 'react'

import { TouchableOpacity, StyleSheet, View, Image } from 'react-native'

const rockImage = require('../images/rock.png')
const paperImage = require('../images/paper.png')
const scissorsImage = require('../images/scissors.png')

const PlayerOption = ({ currentOption, setCurrentOption, setCurrentPage }) => {
    const handleOptionPressed = option => {
        setCurrentOption(option)
    }

    useEffect(() => {
        if (currentOption) {
            setCurrentPage('countdown')
        }
    }, [currentOption])

    return (
        <View style={styles.viewStyle}>
            <TouchableOpacity style={styles.optionButtonStyle} onPress={() => handleOptionPressed('rock')}>
                <Image style={styles.buttonImageStyle} source={rockImage} />
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.optionButtonStyle, ...styles.buttonMargin}} onPress={() => handleOptionPressed('paper')}>
                <Image style={styles.buttonImageStyle} source={paperImage} />
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.optionButtonStyle, ...styles.buttonMargin}} onPress={() => handleOptionPressed('scissors')}>
                <Image style={styles.buttonImageStyle} source={scissorsImage} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#5E153C',
        alignItems: 'center'
    },
    optionButtonStyle: {
        backgroundColor: '#ddd',
        height: 130,
        width: 130,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonImageStyle: {
        height: 70,
        width: 70
    },
    buttonMargin: {
        marginTop: 60
    }
})

export default PlayerOption
