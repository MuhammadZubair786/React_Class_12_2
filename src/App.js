import React from "react";
import Hr from './Compoents/Child'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      name: "hello",
      course: "smit"
    }
  }

  abc() {
    this.setState({
      name: "new value"
    })
  }

  render() {
    return (
      <>
        <b>
          <h1>parent : {this.state.name}</h1>
        </b>
        <button onClick={() => this.abc()}>Click ME</button>
        <Hr data={this.state.name}  />

      </>
    )
  }
}

export default App;
