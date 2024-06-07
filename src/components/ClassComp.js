import { Component } from "react";
class ClassComp extends Component {
  
    state = {
        count : 0,
        id:0,
        status:true
    }

    increase()
    {
        this.setState(
            {
            ...this.state,
            count : this.state.count+1
            }
        )
    }

    decrease()
    {
        this.setState ({
            count : this.state.count-1
        })
    }

  
    render() {
    return (
      <div>
        <h1>Class Component</h1>

        <button onClick={() => this.increase()}>+</button>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.decrease()}>-</button>
      </div>
    );
  }
}

export { ClassComp };
