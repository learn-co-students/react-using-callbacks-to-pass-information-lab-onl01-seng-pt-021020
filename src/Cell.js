import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }

  render() {
    return (
      <div onClick={this.handleClick} className="cell"
        style={{backgroundColor: this.state.color}}
      >
      </div>
    )
  }

}

//So, to summarize, data is passed into Matrix as an array of arrays of strings. On render, this data is mapped to JSX elements. (With some CSS help,) these elements form rows of squares on the screen.
