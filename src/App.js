import logo from './logo.svg';
import './App.css';
import firebase from './config/firebase'
import React, { useState } from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todo: [
      
      ],
      value: "",
      first_data: ''

    }
  }



  // componentDidMount ()




  addTodo() {
    console.log(this.state.value)
    if (this.state.value == "") {
      alert("Enter Data ")
    }
    else {
      //make key
      var key = firebase.database().ref("/Todo_data").push().key;
      console.log(key)

      var obj = {
        name: this.state.value,
        s: 1,
        key: key
      }

      firebase.database().ref("/Todo_data").child(key).set(obj)//send data in db


      this.setState({
        value: "",
        todo: [...this.state.todo, obj],
      })
    }


  }

  deletetodo(i) {
    console.log(i)
    this.state.todo.splice(i, 1)
    console.log(this.state.todo)
    this.setState({
      todo: this.state.todo
    })
  }

  getdata(){
    firebase.database().ref('/Todo_data').once('value',(snap)=>{
      console.log(snap.val())

      var value = Object.values(snap.val())
      console.log(value[0].name)
      })
  }

  editTodo(i) {
    // console.log(this.state.todo[i].name)
    // var b = prompt("Enter Update Value", this.state.todo[i].name)
    // this.state.todo[i].name = b;
    // this.setState({
    //   todo: this.state.todo
    // })
    for (var j = 0; j < this.state.todo.length; j++) {
      this.state.todo[j].s = 1
    }
    this.setState({
      todo: this.state.todo,

    })
    console.log(this.state.todo)
    this.state.todo[i].s = 0;


    this.setState({
      todo: this.state.todo,
      first_data: this.state.todo[i].name
    })



  }

  dataChange(e, i) {
    this.state.todo[i].name = e.target.value
    this.setState({
      todo: this.state.todo
    })

  }

  updateTodo(i) {
    this.state.todo[i].s = 1
    this.setState({
      todo: this.state.todo
    })
  }

  cancelTodo(i) {
    console.log(this.state.first_data)
    this.state.todo[i].name = this.state.first_data
    this.state.todo[i].s = 1
    this.setState({
      todo: this.state.todo
    })

  }


  render() {
    console.log(this.state)
    return (


      <div className='App'>
        <input type="text" placeholder='Enter Todo' size={30}
          value={this.state.value}
          style={{ marginTop: 30 }} onChange={(e) => this.setState({ value: e.target.value })} />
        <button onClick={() => this.addTodo()} >Add Todo</button>


        {

          this.state.todo.map((v, i) => {
            console.log(i)
            return (

              <h1 key={i}>

                {
                  v.s == 0 ?
                    <>
                      <input type="text" placeholder='Enter Todo' size={30}
                        value={v.name}
                        style={{ marginTop: 30 }}
                        onChange={(e) => this.dataChange(e, i)}
                      />
                      <button onClick={() => this.updateTodo(i)} >UPDATE Todo</button>
                      <button onClick={() => this.cancelTodo(i)} >Cancel </button>

                    </>
                    :
                    <>
                      {v.name}
                      <button onClick={() => this.editTodo(i, v)}>Edit</button>
                      <button onClick={() => this.deletetodo(i)}>Delete</button>
                    </>
                }

              </h1>
            )

          })
        }

        <button onClick={()=>this.getdata()}>Click</button>


      </div>

    )
  }
}
export default App;

