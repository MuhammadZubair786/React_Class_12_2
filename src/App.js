import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      value: 0,
      data: [],
      user: []
    }
    console.log("first run constructor")  //=>not run again
  }

  componentDidMount() { //first time only run
    console.log("third Run  componentDidMount")

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setState({
        data: json

      }))

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => this.setState({
        data: [...this.data, json]

      }))

  }

  shouldComponentUpdate() {
    //not update state  
    // firebase=>network
    return true
  }

  static getDerivedStateFromProps(props, state) {  // CHECK state or Props 
    console.log("Get Derived State From Props == >", state)
    // return null 
  }

  getSnapshotBeforeUpdate(preprops, prestate) {  //State  update or props

    //state before update
    console.log(" getSnapshotBeforeUpdate:", prestate)

  }

  // componentDidUpdate(postprops, post, get) {
  //   console.log("New Value", post)
  // }






  render() {
    console.log("second run render , " + this.state.data[0])

    return (
      <div>
        <h1>CLASS COMPONENT dONE{this.state.value}</h1>
        <button onClick={() => this.setState({ value: this.state.value + 1 })}>INC</button>

        <hr />
        {this.state.data.map((v1, i) => {
          //  console.log(v1)
          return (
            <div key={i}>
              <b >user id : {v1.userId} </b>
              <b>title : {v1.title}</b>
              <hr />

            </div>
          )

        })

        }


      </div>
    )
  }
}

export default App;
