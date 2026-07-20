import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import { API_END_POINT } from "../utils/constant";
import { setUser } from "../redux/userSlice";
import { setToggleHandler } from "../redux/MovieSlice";

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.showSearch);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`, {
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success("Logout Successful");
        dispatch(setUser(null));
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Logout Failed");
    }
  };

  const toggleHandler = () => {
    dispatch(setToggleHandler());
  };

  return (
    <header className="absolute top-0 left-0 z-50 w-full bg-gradient-to-b from-black to-transparent px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Netflix Logo */}
        <img
          className="w-36 md:w-48"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />

        {/* User Section */}
        {user && (
          <div className="flex items-center gap-5 text-white">
            {/* Profile */}
            <div className="flex items-center gap-3 cursor-pointer">
              {user?.profilePic ? (
                <img
                  src={user.profilePic}
                  alt="Profile"
                  className="w-11 h-11 rounded-md object-cover border border-white"
                />
              ) : (
                <FaUserCircle className="text-4xl text-gray-300" />
              )}

              <div className="flex items-center gap-1">
                <span className="font-semibold text-lg">
                  {user?.fullname || user?.name || "User"}
                </span>
                <IoIosArrowDropdown className="text-xl" />
              </div>
            </div>

            {/* Search/Home Button */}
            <button
              onClick={toggleHandler}
              className="bg-red-600 hover:bg-red-700 transition duration-300 px-4 py-2 rounded-md font-semibold"
            >
              {toggle ? "Home" : "Search Movie"}
            </button>

            {/* Logout Button */}
            <button
              onClick={logoutHandler}
              className="bg-red-600 hover:bg-red-700 transition duration-300 px-4 py-2 rounded-md font-semibold"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
