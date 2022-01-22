import { Link, useNavigate } from "react-router-dom";
function Home() {
    let navigate = useNavigate()
    
    return (
        <>

        <h1>Home</h1>
      {/* <Link to={"/about"} > <button  >Go To About
        </button>
        </Link>  */}
        <button onClick={()=>navigate("/about",{
           state : {
               name : "asad",
               email : "asad@gmail.com"
           }
        }
        )}>onClick</button>
        </>

    )
}

export default Home;