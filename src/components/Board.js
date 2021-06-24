import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components

  // // const test = [].concat(...squares)
  // // console.log('test' + test)
  // console.log('square'+squares)
  // const squareComponents = squares.reduce((square, val) => square.concat(val), [])
  
  // Flatten array out
  const squareComponents = [].concat(...squares)

  // console.log('SC'+squareComponents);
  // // return squareComponents;
  return squareComponents.map((square) => {
    // console.log('square'+square)
    return <Square 
        value = {square.value}
        onClickCallback = {onClickCallback}
        id = {square.id}
        key = {square.id}
      />
  })
  // const squareComponentsUpdated = squareComponents.forEach((square) => {
  //   console.log('square'+square);
  //     return (
  //     <Square 
  //       value = {square.value}
  //       onClickCallback = {onClickCallback}
  //       id = {square.id}
  //     />
  //   )
  // })

}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
  return <div className="grid" >
    {squareList}
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
