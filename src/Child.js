import { useState } from 'react'

function Child(props) {
    console.log(props)

    let [name,nameset] = useState()
    let [age,setage] = useState()

   const AddData=()=>{
       console.log(name)
       console.log(age)

       props.setdataobj(
          
    [
        ...props.dataobj,{
           name ,
           age
       }
    ]
    )
       nameset("")
       setage("")


    }


    return (
        <div>
            <h1>Child Components</h1>
            
            <input type="text" placeholder="Enter name " 
            value={name|| ""}
            onChange={(e)=>nameset(e.target.value)}
            />
            <input type="text" placeholder="Enter Age "
            value={age || ""}
            onChange={(e)=>setage(e.target.value)}
            />
            <button onClick={()=>AddData()}>Add Data</button>


            <h2>{props.getdata}</h2>
            <button onClick={() => props.setfunc(0)}>Null</button>

            {props.dataobj.map((v, i) => {
                return (
                    <div key={i}>
                        {v.name} + {v.age}
                    </div>
                )
            })}


        </div>
    )

}

export default Child