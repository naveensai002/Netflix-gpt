import React, { useCallback, useState } from 'react';

import { LOGO } from '../utils/constant';
import Input from './Input';
import { checkValidData } from '../utils/validate';

const Header = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);

  const [variant, setVariant] = useState('login');

  /* login form toggle */
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === 'login' ? 'register' : 'login'
    );
  }, []);

  /*login and register button handle function */

  const submitHandler = (e) => {
    e.preventDefault();
    /* checking the validations of form*/

    const message = checkValidData(email, password);
    setError(message);
  };

  return (
    <div
      className='bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg)] w-full
    h-screen relative bg-fixed bg-cover bg-no-repeat '
    >
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav className=' py-5 px-12'>
          <img src={LOGO} alt='logo' className='h-12' />
        </nav>

        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-70 px-16 py-15 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
            <h2 className='text-white text-4xl mb-8  mt-2 font-semibold'>
              {variant === 'login' ? 'Sign In' : 'Create an account'}
            </h2>
            <div className='flex flex-col gap-4 mb-8'>
              {variant === 'register' && (
                <Input
                  id='name'
                  type='text'
                  label='Username'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <Input
                id='email'
                type='email'
                label='Email address or phone number'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                type='password'
                id='password'
                label='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className='text-red-500 text-sm p-1 font-bold  capitalize tracking-tighter'>
                {error}
              </p>
            </div>
            {/* Button */}
            <button
              type='submit'
              className='lg:w-full bg-red-600 mb-6 p-2 rounded-md hover:bg-red-400 text-white text-md font-semibold transition'
              onClick={submitHandler}
            >
              {/* Sign up and register button */}

              {variant === 'login' ? 'Login' : 'Register'}
            </button>
            <p className='mb-6 ml-1  text-white text-semibold  '>
              {variant === 'login' ? 'New to Netflix? ' : 'Already a member ?'}
              <span
                onClick={toggleVariant}
                className=' items-center text-bold text-red-500 cursor-pointer'
              >
                <button className=' transition hover:-translate-y-1 text-white ml-1 hover:text-red-700 hover:underline cursor-pointer'>
                  {' '}
                  {variant === 'login' ? 'create an account' : 'Login'}
                </button>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
