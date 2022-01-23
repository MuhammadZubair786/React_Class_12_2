import { Link } from "react-router-dom"

function User(){

    let a = [
        {
            name : "asad",
            course : "Ai"
        },
        {
            name : "omer",
            course : "Flutter"
        },
        {
            name : "Ali",
            course : "Mern"
        },
        {
            name : "Zohaib",
            course : "Jam Stack"
        }
    ]

    return(
        <>
        <h1>User Data</h1>
        {
            a.map((v,i)=>{
                return(
                    <div style={{border:"2px solid red"}} key={i}>
                       <Link  to={
                           {pathname : `/User/${v.name}/${i}`
                           }
                           }
                           >
                        <h1>{v.name}</h1>
                        <b>{v.course}</b>
                        </Link>
                    </div>
                )
            })
        }
        </>
    )
}

export default  User