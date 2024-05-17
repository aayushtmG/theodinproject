import React, { Component } from "react"

class Count extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
      </div>
    )
  }
}

export default Count
