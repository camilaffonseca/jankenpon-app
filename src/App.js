import React, {useState} from 'react'

import Start from './views/Start'
import PlayerOption from './views/PlayerOption'
import Countdown from './views/Countdown'
import ComputerResult from './views/ComputerResult'
import FinalResult from './views/FinalResult'

const App = () => {
  const [currentPage, setCurrentPage] = useState('start')
  const [currentOption, setCurrentOption] = useState()
  const [currentComputerOption, setCurrentComputerOption] = useState()

  const resetCallback = () => {
    setCurrentPage('playerOption')
    setCurrentOption(undefined)
    setCurrentComputerOption(undefined)
  }

  if (currentPage === 'start')
    return (
      <Start
        pageActionStartClickCallback={() => setCurrentPage('playerOption')}
      />
    )

  if (currentPage === 'playerOption')
    return (
      <PlayerOption
        currentOption={currentOption}
        setCurrentOption={setCurrentOption}
        setCurrentPage={setCurrentPage}
      />
    )

  if (currentPage === 'countdown')
    return (
      <Countdown
        setCurrentPage={setCurrentPage}
        currentOption={currentOption}
      />
    )

  if (currentPage === 'computerResult')
    return (
      <ComputerResult
        currentComputerOption={currentComputerOption}
        setCurrentComputerOption={setCurrentComputerOption}
        currentOption={currentOption}
        setCurrentPage={setCurrentPage}
      />
    )

  if (currentPage === 'finalResult')
    return (
      <FinalResult
        currentOption={currentOption}
        currentComputerOption={currentComputerOption}
        resetCallback={resetCallback}
      />
    )
}

export default App
