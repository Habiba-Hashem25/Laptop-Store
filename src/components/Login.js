import { useNavigate } from "react-router-dom";
const Login = () => {
  const navie = useNavigate();
function handeeClick(){
  navie("/store")
}
    return (
      <div className='container'>
          <div className='mb-3' style={{position:" absolute",
      top:"50%",
      left:"50%",
      transform: "translate(-50%,-50%)",
      width: "50%",
      height: "50%",
      textAlign: "center",
      backgroundColor: "slategray",
      padding: "20px"}}>
       
        <label htmlFor='email'> Email:</label>
              <input id='email' type='text' placeholder='Enter your Email..' style={{width:"100%"}}></input>
        <label htmlFor='password'> Password:</label>
              <input id='password' type='text' placeholder='Enter your Password..' style={{width:"100%"}}></input>  
        <div>
            <br></br>
        <label htmlFor='password'>Don't Have an Account?</label>
        <br></br>
        <br></br>
        <button onClick={handeeClick}><a >Register</a>  </button>

        </div>
        </div>
  
      </div>
    )
  }
  
  export default Login