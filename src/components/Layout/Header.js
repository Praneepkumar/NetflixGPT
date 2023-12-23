import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../../utils/redux/userSlice";
import { LOGO, USER_AVATAR } from "../../utils/constants";
import DropdownMenu from "./DropdownMenu";
import { useRef } from "react";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  const [showDropdown, setShowDropdown] = useState(false);
  const [isGPTSearch, setIsGPTSearch] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [navbarOpacity, setNavbarOpacity] = useState(0);

  const showTrailerPopup = useSelector(
    (store) => store.movies.trailerVideo.showTrailerPopup,
  );

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > 768);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = 75;
    const opacity = Math.min((scrollPosition / maxScroll) * 90 + 0, 100);
    setNavbarOpacity(opacity);
  };

  const handleShowSearch = () => {
    setIsGPTSearch(true);
    navigate("/browse/gpt-search");
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target))
      setShowDropdown(false);
    console.log("clicked");
  };

  useEffect(() => {
    showDropdown && document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showDropdown]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        navigate("/login");
      }
    });
    return () => unSubscribe();
  }, []);

  return (
    <header
      id='header'
      className={`w-full py-3 fixed ${!showTrailerPopup ? "z-[999]" : "z-10"}`}
      style={{
        backgroundColor: !isLargeScreen && "rgba(0, 0, 0, 0.5)",
        backgroundImage: isLargeScreen
          ? `linear-gradient(180deg, #141414 ${navbarOpacity}%,transparent)`
          : `linear-gradient(180deg, #000 ${navbarOpacity}%,transparent)`,
      }}>
      <div className='flex flex-col gap-2 px-3 transition-all duration-300 md:block md:px-0'>
        <div className='flex items-center py-5 md:flex-row justify-between md:px-10 md:py-1  '>
          <div className='w-40 md:w-auto md:flex md:flex-row md:gap-24 md:items-center'>
            <div className=' md:max-w-[9rem]'>
              <Link to={"/browse"}>
                <img className='w-full' src={LOGO} alt='logo' />
              </Link>
            </div>
            {user && (
              <ul
                className='hidden md:flex md:gap-8 '
                onClick={() => setIsGPTSearch(false)}>
                <li className='text-white text-[0.97rem] hover:text-white/70'>
                  <Link to={"/browse"}>Home</Link>
                </li>
                <li className='text-white text-[0.97rem] hover:text-white/70'>
                  <Link to={"/browse"}>TV Shows</Link>
                </li>
                <li className='text-white text-[0.97rem] hover:text-white/70'>
                  <Link to={"/browse"}>Movies</Link>
                </li>
                <li className='text-white text-[0.97rem] hover:text-white/70'>
                  <Link to={"/browse"}>Trending</Link>
                </li>
              </ul>
            )}
          </div>

          {user && (
            <div className='flex gap-4 md:w-auto md:px-0'>
              {!isGPTSearch && (
                <div
                  className='flex gap-2 items-center'
                  onClick={handleShowSearch}>
                  <svg
                    className='fill-white hover:fill-white/70'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='#000000'
                    viewBox='0 0 256 256'>
                    <path d='M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z'></path>
                  </svg>

                  <button
                    className='hidden md:block text-white  hover:text-white/70'
                    onClick={handleShowSearch}>
                    GPT Search
                  </button>
                </div>
              )}

              <div className='flex relative' ref={dropdownRef}>
                <button onClick={() => setShowDropdown(!showDropdown)}>
                  <img src={USER_AVATAR} alt='user-avatar' />
                </button>
                {showDropdown && <DropdownMenu />}
              </div>
            </div>
          )}
        </div>
        {user && (
          <div className='mobile-nav translate-y-0 md:translate-y-[-170px] md:opacity-0 md:h-0'>
            <ul
              className='flex justify-around'
              onClick={() => setIsGPTSearch(false)}>
              <li className='text-white text-sm px-3 py-1 rounded-2xl border border-white/70 hover:text-white/70'>
                <Link to={"/browse"}>Home</Link>
              </li>
              <li className='text-white text-sm px-3 py-1 rounded-2xl border border-white/70 hover:text-white/70'>
                <Link to={"/browse"}>TV Shows</Link>
              </li>
              <li className='text-white text-sm px-3 py-1 rounded-2xl border border-white/70 hover:text-white/70'>
                <Link to={"/browse"}>Movies</Link>
              </li>
              <li className='text-white text-sm px-3 py-1 rounded-2xl border border-white/70 hover:text-white/70'>
                <Link to={"/browse"}>Trending</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
