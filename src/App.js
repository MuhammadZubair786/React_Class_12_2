import { useState } from "react"
import firebase from "./config/firebase"
import Homne from "./home"

function App() {

  let [user, setuser] = useState(false)
  let [data,senddata] = useState(false)
  let [img,setimg] = useState(null)
  let [url,seturl]  = useState()

  let [email,setemail] = useState()
  let [password,setpassword] = useState()
  let [name,setname] = useState()

  const signup = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((data) => {
        console.log(data.user.uid)
        
        firebase.database().ref("users").child(data.user.uid).set({
          name : name,
          email:email,
          password:password
        })
        setuser(true)


      })
      .catch((err) => console.log(err))
  }

  const googlesigin=()=>{
    var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user)
        console.log(user.displayName)
        // setname(user.displayName)
        setuser(true)
  
        console.log(token)
  
        console.log(user.photoURL)
   
  
  
      }).catch(function (error) {
        
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
  
        console.log("Error code :", errorCode, "Error Message :", errorMessage,"Error Email :",email,"Credential :",credential)
        // ...
      });
  
     
      // this.setState({
      //   SigIn:true
      // })
  }

  const imgdata=(e)=>{
    console.log(e.target.files[0])
    setimg(e.target.files[0])

  }

  const uplaodfile=()=>{
    console.log(img)
    console.log("Image"+img.name)



    const upload = firebase.storage().ref(`pak/karachi/${img.name}`).put(img)
    upload.on(
      "state_changed",
      snapshot => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
          console.log(progress)
          },
          error => {
            console.log(error);
          }
          ,
          () => {
            firebase.storage()
              .ref("pak/karachi")
              .child(img.name)
              .getDownloadURL()
              .then(url => {
                  console.log(url)
                 
                  seturl(url)
                  senddata(true)
               
              });
          }
         
  
        );

        
  }

  const uploaddata=()=>{
    console.log(url)

    var sel = "pak"

    var key = firebase.database().ref(`Dishes/${sel}`).push().key

    var obj = {
      "product_id":1,
      "product_name":"data",
      "url":url,
      key:key
    }

    firebase.database().ref(`Dishes/${sel}`).child(key).set(obj)

  }


  return (
    <div>
      {user  ?
        <Homne />
        :
        <>
          <h1>hello</h1>
          <input type="text" placeholder="enter data " value={name}  onChange={(e)=>setname(e.target.value)}/>


          <input type="email" placeholder="enter data " value={email} onChange={(e)=>setemail(e.target.value)}/>
          <input type="password" placeholder="enter password " value={password} onChange={(e)=>setpassword(e.target.value)}/>

          <button onClick={()=>signup()}>email Click</button>
          <button onClick={()=>googlesigin()}>google Click</button>

          <input type="file" accept="image/*" onChange={(e)=>imgdata(e)}/>
          <button onClick={()=>uplaodfile()}>Upload</button>


          
          {data ? 
           <button onClick={()=>uploaddata()}>Data Send In Firebase</button>  
           :
           <button disabled>Data Send In Firebase</button>
        }

         
           

           
         

                  
            
          
      

        </>

      }

    </div>
  )
}

export default App
