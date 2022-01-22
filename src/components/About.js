import { useLocation ,Link} from "react-router-dom";

function About() {

    let loc = useLocation()
    console.log(loc)

    return (
        <>

        <h1>About {loc.state.name}</h1>
        <Link to={"/User"}>
            Go To uSER
        </Link>
        </>


    )
}

export default About;