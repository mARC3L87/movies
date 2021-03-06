import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.scss';

const Landing = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '') {
      console.log('enter your email');
    } else {
      navigate('/movies');
    }
  };
  return (
    <div className='landing'>
      <header>
        <h1 className='header'>See what's next.</h1>
        <p>Enter your email and enjoy.</p>
        <form onSubmit={onSubmit}>
          <input
            type='email'
            placeholder='Email address'
            name='email'
            value={email}
            onChange={onChange}
          />
          <input className='btn btn-submit' type='submit' value='Get Started' />
        </form>
      </header>
    </div>
  );
};

export default Landing;
