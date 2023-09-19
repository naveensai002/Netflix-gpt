import React, { useCallback, useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

import { LOGO } from '../utils/constant';
import Input from './Input';
import { checkValidData } from '../utils/validate';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';

import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);

  const [variant, setVariant] = useState('login');
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    if (message) return;

    /* create a new user  sign in/ sign up */

    /* Sign Up logic*/

    const images = [
      '../../public/default-blue.png',
      '../../public/default-green.png',
      '../../public/default-red.png',
      '../../public/default-slate.png',
    ];
    const imgsrc = images[Math.floor(Math.random() * 4)];
    // console.log(imgsrc);

    if (variant === 'register') {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential?.user;

          /* update the profile*/
          updateProfile(user, {
            displayName: name,
            photoURL: imgsrc,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setError(error);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + ' ' + errorMessage);
          // ..
        });
    }
    /* end of signup logic */

    /* sign IN logic*/
    if (variant === 'login') {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + '' + errorMessage);
        });
    }
    /* end of login logic*/

    /* end of submit handler function */
  };

  /* Google auth logic*/

  const googleAuth = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  /* end of google auth */

  /* */
  const githubAuth = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  /*end of github auth */

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        /* dispatch the action to store*/
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate('/browse');
        /* navigate to the browse page*/
      } else {
        /* User is signed out */

        dispatch(removeUser());
        navigate('/');

        /* navigate to login/signup page*/
      }
    });
  }, []);

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
            {/* Google auth button */}
            <div
              className='
                  flex 
                  flex-row
                  mt-4
                  mb-4
                  justify-center
                 items-center 
                 '
            >
              <div
                className='
                  w-10
                  h-10
                  bg-white
                  flex 
                  items-center 
                  mt-4
                  mb-4
                  mr-4
                  justify-center
                  cursor-pointer
                  rounded-full
                  transition
                  hover:opacity-80
                  gap-3
                   '
              >
                <button
                  className='
              '
                  onClick={googleAuth}
                >
                  <FcGoogle size={30} />
                </button>
              </div>

              {/* end of google auth button */}

              {/* github auth button */}

              <div
                className='
                  w-10
                  h-10
                  bg-white
                  flex 
                  items-center
                  mt-4
                  mb-4
                  justify-center
                  cursor-pointer
                  rounded-full
                  transition
                  hover:opacity-80
                  gap-3         '
              >
                <button
                  className='
              '
                  onClick={githubAuth}
                >
                  <FaGithub size={30} />
                </button>
              </div>
            </div>

            {/* end of github auth button */}

            {/* end of google auth button */}
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
