import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";
import { checkValidData } from "../../utils/validate.js";
import { auth } from "../../utils/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/redux/userSlice.js";
import usegetErrorMessage from "../../custom-hooks/usegetErrorMessage.js";
const Login = () => {
  const [isSignInPage, setIsSignInPage] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const [email, setEmail] = useState("test@gpt.com");
  const [password, setPassword] = useState("Test@123456");
  const [showPassword, setShowPassword] = useState(false);
  const name = useRef(null);

  const dispatch = useDispatch();

  const toggleisSignInPage = () => {
    setIsSignInPage(!isSignInPage);
    setErrorMessage(null);
  };

  const handleButtonSignin = () => {
    if (errorMessage) setErrorMessage(null);

    const message = checkValidData(email, password);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInPage) {
      //config signup
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              if (displayName === null || "")
                throw new Error("Name should not be empty");
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName }),
              );
            })
            .catch((error) => {
              const errorMessage = usegetErrorMessage(error.message);
              setErrorMessage(errorMessage);
            });
          setIsSignInPage(true);
        })
        .catch((error) => {
          console.error(error);
          const errorCode = error.code;
          const errorMessage = usegetErrorMessage(error.message);
          setErrorMessage(errorMessage);
        });
    } else {
      //config signin
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          console.error(error);
          const errorCode = error.code;
          const errorMessage = usegetErrorMessage(error.message);
          setErrorMessage(errorMessage);
        });
    }
  };
  return (
    <div id='login'>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              placeholder='Email '
              className='rounded-md p-4 text-white bg-[#333] placeholder:text-[#8c8c8c]'
            />
            <div className='relative flex flex-col gap-3'>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={!showPassword ? "password" : "text"}
                placeholder='Password'
                className='rounded-md p-4 text-white bg-[#333] placeholder:text-[#8c8c8c]'
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-5 cursor-pointer'>
                {!showPassword ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='22'
                    fill='#ffffff75'
                    viewBox='0 0 256 256'>
                    <path d='M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z'></path>
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='22'
                    fill='#ffffff75'
                    viewBox='0 0 256 256'>
                    <path d='M53.92,34.62A8,8,0,1,0,42.08,45.38L61.32,66.55C25,88.84,9.38,123.2,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208a127.11,127.11,0,0,0,52.07-10.83l22,24.21a8,8,0,1,0,11.84-10.76Zm47.33,75.84,41.67,45.85a32,32,0,0,1-41.67-45.85ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.16,133.16,0,0,1,25,128c4.69-8.79,19.66-33.39,47.35-49.38l18,19.75a48,48,0,0,0,63.66,70l14.73,16.2A112,112,0,0,1,128,192Zm6-95.43a8,8,0,0,1,3-15.72,48.16,48.16,0,0,1,38.77,42.64,8,8,0,0,1-7.22,8.71,6.39,6.39,0,0,1-.75,0,8,8,0,0,1-8-7.26A32.09,32.09,0,0,0,134,96.57Zm113.28,34.69c-.42.94-10.55,23.37-33.36,43.8a8,8,0,1,1-10.67-11.92A132.77,132.77,0,0,0,231.05,128a133.15,133.15,0,0,0-23.12-30.77C185.67,75.19,158.78,64,128,64a118.37,118.37,0,0,0-19.36,1.57A8,8,0,1,1,106,49.79,134,134,0,0,1,128,48c34.88,0,66.57,13.26,91.66,38.35,18.83,18.83,27.3,37.62,27.65,38.41A8,8,0,0,1,247.31,131.26Z'></path>
                  </svg>
                )}
              </div>
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
