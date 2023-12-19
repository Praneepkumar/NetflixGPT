import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { toggleShowGptSearch } from "../utils/redux/gptSlice";
import { LANGUAGE_CONFIG, LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { getLanguage } from "../utils/redux/languagesSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const language = useSelector((store) => store.setLanguage.language);
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
  const handleLanguageChange = (e) => {
    dispatch(getLanguage(e.target.value));
  };

  return (
    <div className='flex flex-col justify-center items-center gap-6 py-5 md:flex-row md:justify-between md:px-5 md:py-1  '>
      <div className='flex max-w-[45%] md:max-w-[15%]'>
        <img className='w-full' src={LOGO} alt='logo' />
      </div>

      {user && (
        <div className='flex w-full px-8 justify-between md:gap-3 md:w-auto md:px-0'>
          {showGptSearch && (
            <select
              className='bg-transparent text-white'
              onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((obj) => (
                <option
                  className='text-black focus:border-none'
                  key={obj.identifier}
                  value={obj.identifier}>
                  {obj.language}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={toggleGPTView}
            className='rounded-lg text-white border border-white px-6 py-2 text-lg md:text-base md:px-4 md:py-1'>
            {!showGptSearch
              ? "GPT Search"
              : LANGUAGE_CONFIG?.[language].homeBtn}
          </button>

          <button
            className='rounded-lg text-white bg-[#e50914] px-6 py-2 text-lg md:text-base md:px-4 md:py-1 hover:bg-[#e50914d8] active:translate-y-[-2px]'
            onClick={handleSignout}>
            {LANGUAGE_CONFIG?.[language].signOut}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
