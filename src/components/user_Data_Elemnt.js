import { useParams ,useLocation} from "react-router-dom"

function User_Render(){
    let data = useParams()
    let loc = useLocation()
    console.log(loc)
    console.log(data)
    return(
        <h1>User Data {data.name}</h1>
    )
}

export default User_Render
