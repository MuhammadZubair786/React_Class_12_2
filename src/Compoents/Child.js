import React from "react";
import Child2 from "./new";

class Child extends React.Component{
   constructor(props){
       super(props)
       console.log(props)
       this.state={
           data : "child data"
       }



   }
  setdata =(e)=> {
     console.log(this.state,e.n3)
    this.setState({
        data : e.n3

    })

 
  }
    render(){
        return(
            <> 
             <h1>Child Componets</h1>
             <h2>{this.state.data}</h2>
             <h2> child up : {this.props.data}</h2>
             <Child2 child={this.state.data} p1={this.props.data}  newdata={this.setdata} />
             
            </>
        )
    }
}

export default Child