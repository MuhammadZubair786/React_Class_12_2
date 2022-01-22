import React from "react";
import Slider from './Slider'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 0

        }
    }
    render() {

        return (
            <div>
                <Slider />
                <h1 style={{ backgroundColor: "red", textAlign: "center" }}>Header</h1>
                <h3>{this.state.name}</h3>
                <button onClick={()=>this.setState(
                    {
                       name : --this.state.name            
                    }
                )}>change value</button>
            </div>
        )
    }

}

export default App;