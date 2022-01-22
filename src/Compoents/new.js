import React from "react";
// import Child2 from "./new";

class Child extends React.Component{
   constructor(props){
       super(props)
       console.log(props)
       this.state={n1:2,
    p:"Omer",
    p2:"smit"
    }

   }

   data(){
      this.props.newdata(
        {
            n1:"asad",
            n3 : "omer"
        }
      )
   }


    render(){
        return(
            <> 
             <h1>Child child  Componets</h1> 
             <h2> new child : {this.props.child}</h2>
             <h2> new child up : {this.props.p1}</h2>
             
           <button onClick={()=>this.props.newdata(
        {
            n1:"asad",
            n3 : "omer"
        }
      )}>data update Child</button>
             

             
            </>
        )
    }
}

export default Child