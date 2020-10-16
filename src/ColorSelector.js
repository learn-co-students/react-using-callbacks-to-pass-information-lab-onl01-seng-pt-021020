import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      let callback = () => this.props.setSelectedColor(str)
      return <div onClick={callback} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )
  //Each div element is rendered from an array of hexadecimal color strings, with its backgroundColor set to the value of
  //the current string in the mapping process.

  //So far, we've used class methods as callbacks, this.handleClick and
  //this.handleSubmit. This time is a little different - we'll need to write
  //the function inside the map to access the color values needed

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
}

//The ColorSelector component provides the user interface
//to select a specific color. When a particular Cell is
//clicked, its background color becomes whatever the current
//selected color is. To achieve this behavior, we need some
//way for Cell to know about the currently selected color
//and we also need a way for ColorSelector to modify the
//selected color based on user input. To do this, we will
//have the parent component, Matrix, keep track of the
//current selected color.


//Because passing information between children components is taboo in React,
//(i.e. passing information between ColorSelector and a Cell),
//we need to make sure that the following is implemented:

//ColorSelector has a way to set some 'selected color' in Matrix when a user
//selects a color
//Cell has a way to know what the current selected color is when it is clicked
//Using callbacks as props, we can do both of these things pretty easily!
