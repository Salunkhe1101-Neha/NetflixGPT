import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidateData } from "../utils/validate"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"
const Login = () => {
 
  const [isSignInForm, setIsSignInForm] = useState(true)
  const[errorMsg, setErrorMsg]=useState(null);
  const email=useRef(null);
  const password=useRef(null);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const toggle = () => {
    setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick=()=>
  {
    
      const massage=checkValidateData(email.current.value,password.current.value)
      setErrorMsg(massage)
      // if(massage) return

      if(!isSignInForm)
      {
        // Sign Up Logic
        createUserWithEmailAndPassword(auth,email.current.value,password.current.value)

        .then((useCredential)=>{
          const user=useCredential.user;
          console.log(user);
        
         
        })
        .then(()=>
              {
                const{uid,email,userName}=auth.currentUser;
                dispatch(addUser({
                  uid:uid,
                  email:email,
                  userName:userName
                }))

              }
        )
        .catch((error)=>{
          const errorCode=error.code;
          const errorMessage=error.massage;
          setErrorMsg(errorCode+"-"+ errorMessage)
        })
      }
      else
        {
          // Sign In Logic

          signInWithEmailAndPassword(auth,email.current.value,password.current.value)

        .then((useCredential)=>{
          const user=useCredential.user;
          console.log(user);

          
         
        })
        .catch((error)=>{
          const errorCode=error.code;
          const errorMessage=error.massage;
          setErrorMsg(errorCode+"-"+ errorMessage)
        })
        }
  }
  console.log(isSignInForm)
  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="backGroundImg"></img>
      </div>

      <form className="bg-black w-3/12 absolute my-36 mx-auto left-0 right-0 flex flex-col py-6 px-10 h-auto bg-opacity-70"
      onSubmit={(e)=> e.preventDefault()}
      >
        <h1 className="font-bold text-white  text-[30px]">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm &&
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-4 " />
        }
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="p-2 m-4 " />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-4" />
        <p className="font-bold text-lg text-red-600">{errorMsg}</p>
        <button className="p-2 m-6 bg-red-700" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

        <h2 className="text-white cursor-pointer" onClick={toggle}> {isSignInForm ? "New to Netflix? Sign up now." : "Already Sign Up Sign In"}</h2>
      </form>

    </div>
  )
}

export default Login