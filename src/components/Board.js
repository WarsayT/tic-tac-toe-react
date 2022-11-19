import React from 'react'
import "./board.css"
import Box from './Box'

const Board = ({board, onClick}) => {
  return (
    <div className='board'>
        {
            board.map((value, index) => {
                return (
                    <Box value={value} onClick={() => value === null && onClick(index)} />
                )
            })
        }
    </div>
  )
}

export default Board