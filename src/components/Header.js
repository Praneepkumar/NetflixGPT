import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { toggleShowGptSearch } from "../utils/redux/gptSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //user sign in
        const { uid, email, displayName } = user;

        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const toggleGPTView = () => {
    dispatch(toggleShowGptSearch());
  };
  return (
    <div className='flex justify-between px-5 py-2 items-center  bg-gradient-to-b from-black'>
      <div className='max-w-[15%] '>
        <img className='w-full' src={LOGO} alt='logo' />
      </div>
      {user && (
        <div className='flex gap-3'>
          <button
            onClick={toggleGPTView}
            className='rounded-lg text-white border border-white px-4 py-1'>
            GPT Search
          </button>
          <button
            className='rounded-lg text-white bg-[#e50914] px-4 py-1'
            onClick={handleSignout}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
