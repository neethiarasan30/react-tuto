import React, { Component } from 'react'

export default class ClassChildComp extends Component {
    static defaultProps = {
        data : "Mani"
      }
  render() {
    let{data} =  this.props
    
    
    
    return (
      <div>
        <h1>{data}</h1>
      </div>
    )
  }
}
