import React, { Component } from 'react'

export class ChildrenProps extends Component {
  render() {
   let children = this.props.children

    return (
      <div>
       
        {children}
      
      
      </div>
    )
  }
}
