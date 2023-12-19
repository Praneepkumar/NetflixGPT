import React, { useRef, useState } from "react";
import Header from "./Header.js";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/validate.js";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/redux/userSlice";

const Login = () => {
  const [isSignInPage, setIsSignInPage] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const dispatch = useDispatch();

  const toggleisSignInPage = () => {
    setIsSignInPage(!isSignInPage);
    setErrorMessage(null);
  };

  const handleButtonSignin = () => {
    if (errorMessage) setErrorMessage(null);

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInPage) {
      //config signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName }),
              );
            })
            .catch((error) => {
              const errorMessage = error.message;
              setErrorMessage(errorMessage);
            });
          setIsSignInPage(true);
        })
        .catch((error) => {
          console.error(error);
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      //config signin
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          console.error(error);
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };
  return (
    <div id='login'>
      <header
        id='header'
        className='w-full header-gradient py-4 absolute z-[999]'>
        <Header />
      </header>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='absolute w-[80%] top-[30%] left-[10%] right-[10%] px-7 py-8 md:w-[35%] bg-[#000000b4] border-[1px] border-[#ffffff1a] md:px-16 md:py-12 md:left-[50%] md:right-[50%] md:top-[22%] z-[999] md:translate-x-[-50%] flex flex-col  '>
        <div className='flex flex-col gap-9 pb-8'>
          <h2 className='text-white text-[32px] font-medium'>
            {isSignInPage ? "Sign In" : "Sign Up"}{" "}
          </h2>
          <div className='flex flex-col gap-5'>
            {!isSignInPage && (
              <input
                ref={name}
                type='text'
                placeholder='Name'
                className='rounded-md p-4 text-white bg-[#333] placeholder:text-[#8c8c8c]'
              />
            )}
            <input
              ref={email}
              type='email'
              placeholder='Email '
              className='rounded-md p-4 text-white bg-[#333] placeholder:text-[#8c8c8c]'
            />
            <div className='flex flex-col gap-3'>
              <input
                ref={password}
                type='password'
                placeholder='Password'
                className='rounded-md p-4 text-white bg-[#333] placeholder:text-[#8c8c8c]'
              />
            </div>
            <p className='text-[#e87c03]'>{errorMessage}</p>
          </div>
          <div className='flex flex-col gap-5'>
            {!isSignInPage && (
              <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    name='remember'
                    className='default:ring-2 indeterminate:bg-gray-300'
                  />
                  <label className='text-gray-400 text-sm'>
                    I agree to the terms & conditions
                  </label>
                </div>
              </div>
            )}
            <button
              className='rounded-md p-4 text-white bg-[#e50914]'
              onClick={handleButtonSignin}>
              {isSignInPage ? "Sign In" : "Sign Up"}
            </button>
            {isSignInPage && (
              <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    name='remember'
                    className='default:ring-2 indeterminate:bg-gray-300'
                  />
                  <label className='text-gray-400 text-sm'>Remember me</label>
                </div>
                <Link to='' className='text-gray-400 text-sm hover:underline'>
                  Need help?
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className='pt-8 pb-12 flex flex-col gap-3'>
          <div className='text-md text-gray-400'>
            {isSignInPage ? (
              <>
                New to Newflix?{" "}
                <span
                  onClick={toggleisSignInPage}
                  className='text-white text-lg hover:underline cursor-pointer'>
                  Sign up now
                </span>
              </>
            ) : (
              <>
                Already a member?{" "}
                <span
                  onClick={toggleisSignInPage}
                  className='text-white text-lg hover:underline cursor-pointer'>
                  Sign in now
                </span>
              </>
            )}
          </div>
        </div>
      </form>
      <div
        id='login-bg'
        className='w-[100%] h-[880px] bg-black  overflow-x-hidden'>
        <img
          className='w-full h-full block bg-cover object-cover opacity-40'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
        />
      </div>
    </div>
  );
};

export default Login;
