import React from 'react'

import { Image } from 'react-native'

const rockImage = require('../images/rock.png')
const paperImage = require('../images/paper.png')
const scissorsImage = require('../images/scissors.png')

const ResolvedImage = ({option, sizeImage, style}) => {
  switch (option) {
    case 'rock':
      return (
        <Image
          style={{height: sizeImage, width: sizeImage, ...style}}
          source={rockImage}
        />
      )
    case 'paper':
      return (
        <Image
          style={{height: sizeImage, width: sizeImage, ...style}}
          source={paperImage}
        />
      )
    case 'scissors':
      return (
        <Image
          style={{height: sizeImage, width: sizeImage, ...style}}
          source={scissorsImage}
        />
      )

    default:
      return (
        <Image
          style={{height: sizeImage, width: sizeImage, ...style}}
          source={rockImage}
        />
      )
  }
}

export default ResolvedImage
