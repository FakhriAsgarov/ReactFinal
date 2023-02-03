import React, { useState } from 'react';
import './login.css'
const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    username:''
  });

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <input
      placeholder='Fullname...'
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
         <input
      placeholder='Username...'
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />

      <input
      placeholder='Email...'
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
      placeholder='Password...'
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <button type="submit" className='form-button hover'>Create Account</button>
    </form>
  );
};

export default CreateAccount;