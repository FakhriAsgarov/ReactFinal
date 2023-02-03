import React, { useState } from 'react'
import './login.css'
const Login = (props) => {
  const users=[{username:'fakhri',
password:'12345'},
{username:'sevinc',
password:'1345'}];
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      let user=users.find(item=>username===item.username);
      if(!user){
         
      document.querySelector('.username-tip').classList.add('warning');
       
      }
      else{
        if(password!==user.password){
          document.querySelector('.password-tip').classList.add('warning');
        }
        else{
          console.log('siz artiq daxil olduz');
        }
       
      }
      
    };
  console.log(props)
    return (
      <form onSubmit={handleSubmit} className={'login-form ' +props.title}>
        <div>
       
          <input
            type="text"
            placeholder='Username...'
            id="username"
            value={username}
            onChange={(event) =>{setUsername(event.target.value);
              document.querySelector('.username-tip').classList.remove('warning') }}
          />
          <span className='username-tip'>There is not such user.</span>
        </div>
        <div>
        
          <input
          placeholder='Password...'
            type="password"
            id="password"
            value={password}
            onChange={(event) => {setPassword(event.target.value)
            document.querySelector('.password-tip').classList.remove('warning')
            }}
          />
          <span className='password-tip'>Password is incorrect.</span>
        </div>
        <button type="submit" className='form-button hover'>Login</button>
      </form>
    );
  };

export default Login
