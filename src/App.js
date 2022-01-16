import { useState } from 'react'
import Child from './Child'
function App() {

  let [data, setdata] = useState(20)
  let [arr, setarray] = useState([1, 2, 3, 4, 5, 6])
  let [arrobj, setarrayobj] = useState(
   [ 
     { name: "asad", age: "12" },
    { name: "omer", age: "12" },
    { name: "Ali", age: "15" },
    { name: "Smit", age: "no age" },
  ]
  
  )

  console.log("|data ",arrobj)

  return (
    <div>
      <h1>Topic Function Based</h1>
      {/* <h2>{data}</h2>
      <button onClick={() => setdata(++data)}>Change Data</button>

      
      {arr.map((v, i) => {
        return (
          <div key={i}>
            {v}
          </div>
        )
      })} */}

      {/* {arrobj.map((v,i)=>{
        return(
          <div>
            {v.name} + {v.age}
          </div>
        )
      })} */}
      <button onClick={()=>setdata(++data)}>Add</button>
      <Child getdata={data} 
      setfunc={setdata}
       dataobj={arrobj }
        setdataobj={setarrayobj}
        
        />


    </div>
  )
}

export default App;