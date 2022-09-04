import image from './loginlogo.jpg'
import './signup.css'
import {useNavigate} from "react-router-dom"

function Login(){

  const Navigate = useNavigate();

  const register=()=>{
    alert("Sucessfully Registered");
    Navigate("/home")
  }
  return(
    <div className='logo-body'>
      <img src={image} alt="logo" className='logo'></img>
      <div className='cartbox'>
        <form onSubmit={register}>
        <div className='box'>
           <div className='box1'>
               <label for="email">Email</label>
               <input type="text" id="email" placeholder='Enter your Email' required={true}></input>
          </div>
          <div className='box2'>
               <label for="user" className='userbox'>User Name</label>
               <input type="text" id="user" placeholder='Enter your User Name' required={true}></input>
          </div>
          <button className='regbutton' type='submit'>Register</button>
      </div>
      </form>
    </div>
    </div>
  )
}

export default Login;