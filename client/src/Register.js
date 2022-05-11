import React,{useState,useRef} from 'react';
import App from'./App';
import { Redirect,Link,useHistory } from 'react-router-dom';
import icon3 from './img/img2.gif';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';




const Register=(props)=>{
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [name,setName]=useState('');
  // const [image,setImage]=useState('');
  // const imageRef= useRef(null);
  // const [imagePreview,setImagePreview]=useState(null);
  const signup=()=>{
    axios.post('/register', {
      email: email,
      password: password,
      name:name
    })
    .then(function (response) {
      if(response.status===200){
       
        props.history.push('/');

      }
      else{
        alert('Some error please write on abc@gmail.com');
      }
    })
    .catch(function (error) {
      console.error(error);
      
    });

  }
  // const handlepic=(e)=>{
 
  //   let image_as_base64 = URL.createObjectURL(e.target.files[0])
  //   let image_as_files = e.target.files[0];
  //   setImage(image_as_files);
  // }










    return(
        
         <>
<section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src={icon3} className="img-fluid"
          alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit={(e)=>{e.preventDefault();
        signup();
        }}>
          <div className="d-flex  align-items-center justify-content-center justify-content-lg-around ">
            <h1 className="fw-bold mb-4 me-3">Join Us</h1>
          </div>

         
        
          <div className="form-outline mb-4">
          <label className="form-label" for="email">Email address</label>
            <input type="email" id="email" className="form-control form-control-lg"
              placeholder="Enter a valid email address" autoComplete='on' onChange={(e)=>setEmail(e.target.value)} />
           
          </div>
          <div className="form-outline mb-4">
          <label className="form-label" for="name">Display Name</label>
            <input type="text" id="name" className="form-control form-control-lg"
              placeholder="Enter your Name" autoComplete='on' onChange={(e)=>setName(e.target.value)} />
           
          </div>

        
          <div className="form-outline mb-3">
          <label className="form-label" for="password">Password</label>
            <input type="password" id="password" className="form-control form-control-lg"
              placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />
            
          </div>
          <div className="form-outline mb-3">
          <label className="form-label" for="cpassword">Confirm Password</label>
            <input type="password" id="cpassword" className="form-control form-control-lg"
              placeholder="Confirm password" />
            
          </div>
          {/* <div className="form-outline mb-3">
          <label className="form-label" for="profile_pic">Upload Pic</label>
            <input type="file" id="profile_pic" className="form-control form-control-lg"
              placeholder="Upload your pic" onChange={handlepic} />
            
          </div> */}


          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="submit" className="btn btn-primary btn-lg mb-1"
              >Register</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <Link to="/"
                className="link-danger">SignIn</Link></p>
          </div>

        </form>
      </div>
    </div>
  </div>
</section>

</>
        
      
    )
}
export default Register;
