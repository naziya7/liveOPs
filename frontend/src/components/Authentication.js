import React, { useState } from 'react';

const Authentication = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // handle login functionality
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
  
    // perform input validation
    if (!name.value || !email.value || !password.value) {
      alert('Please enter all fields.');
      return;
    }
  
    // make API call to sign up user
    const newUser = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
  
    AuthService.signup(newUser)
      .then(() => {
        alert('Signup successful. Please log in.');
        history.push('/login');
      })
      .catch((error) => {
        alert('Signup failed. Please try again.');
        console.error(error);
      });
  };
  

  return (
    <div>
      <h2>Authentication</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup}>Sign up</button>
    </div>
  );
};

export default Authentication;
