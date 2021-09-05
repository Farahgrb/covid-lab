import { useRef , useContext} from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import {AuthContext} from "../../context/AuthContext";
import {CircularProgress} from "@material-ui/core" ;
import { Link } from "react-router-dom";
import axios from "axios";


export default function Login() {
  const email = useRef();
  const password = useRef();
  const {user,isFetching  , dispatch} = useContext(AuthContext);

 const handleClick = async(e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
    const newConnexion = {
      email : email.current.value,
     
    };
    try {
        await axios.post("/connections", newConnexion);
        
      } catch (err) {
        console.log(err);
      }
  };
    
  
    
     
  console.log(user);
    return (
        <div className="login">
      <div className="loginWrapper">
      
        <div className="loginMiddle">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Email" type="email" required className="loginInput" ref={email} />
            <input placeholder="Password" type ="password" required minLength="6" className="loginInput" ref={password}/>
           
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? <CircularProgress color="secondary" size="20px"/> : "Log In"}
              </button>
            
           
            <button className="loginRegisterButton"disabled={isFetching}>
               <Link to="/register" style={{ textDecoration: "none" }}>
              {isFetching ? <CircularProgress color="white" size="20px"/> : "Sign Up"}
             </Link>
            </button>
            
          </form>
        </div>
      </div>
    </div>
    )
}
