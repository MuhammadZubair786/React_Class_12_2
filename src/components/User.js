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
                    <div style={{border:"2px solid red"}}>
                        <h1>{v.name}</h1>
                        <b>{v.course}</b>
                    </div>
                )
            })
        }
        </>
    )
}

export default  User