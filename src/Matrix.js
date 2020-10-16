import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#FFF'
    }
  }
  //In src/Matrix.js, there is no state set up. As we need a place to keep track of
  //the selected color, let's add it above

  //With a default color value set in state, we now need to add a method that
  //can change that state value:
  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }



  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor = {this.state.selectedColor}/>)
  )
  //for values, make a new array such that the key of the cell component is the index
  //and the color of the Cell component is the value

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )
  //As mentioned, ColorSelector is the interface where users will be able to select a color,
  //so it will need access to setSelectedColor. We can pass the needed function down as a prop:


  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}

//Matrix, as seen above, renders a div containing the ColorSelector component and another
//div. Within this nested div is a function call to this.genMatrix(). In this function,
//this.props.values is used to return a map of JSX divs.
