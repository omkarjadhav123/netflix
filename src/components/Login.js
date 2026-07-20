import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.app.isLoading);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("Please fill all fields");
    }

    if (!isLogin && !fullname) {
      return toast.error("Please enter full name");
    }

    dispatch(setLoading(true));

    try {
      const url = isLogin
        ? `${API_END_POINT}/login`
        : `${API_END_POINT}/register`;

      const body = isLogin
        ? { email, password }
        : { fullname, email, password };

      const res = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      console.log(res.data);

      if (res.data.success) {
        toast.success(res.data.message);

        if (isLogin) {
          dispatch(setUser(res.data.user));
          navigate("/browse");
        } else {
          setIsLogin(true);
        }

        setFullname("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.log(error);

      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="w-full">
      <Header />

      <div className="absolute top-0 left-0 w-full h-screen">
        <img
          className="w-full h-screen object-cover"
          src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg"
          alt="banner"
        />
      </div>

      <form
        onSubmit={submitHandler}
        className="flex flex-col md:w-3/12 w-11/12 p-12 my-36 left-0 right-0 mx-auto items-center justify-center absolute bg-black rounded-md opacity-90"
      >
        <h1 className="text-3xl text-white mb-5 font-bold">
          {isLogin ? "Login" : "Sign Up"}
        </h1>

        <div className="flex flex-col w-full">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="outline-none p-3 my-2 rounded-sm bg-gray-700 text-white"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none p-3 my-2 rounded-sm bg-gray-700 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none p-3 my-2 rounded-sm bg-gray-700 text-white"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="bg-red-600 mt-6 p-3 rounded-sm text-white"
          >
            {isLoading ? "Loading..." : isLogin ? "Login" : "Signup"}
          </button>

          <p className="text-white mt-4">
            {isLogin ? "New to Netflix?" : "Already have an account?"}

            <span
              onClick={() => setIsLogin(!isLogin)}
              className="ml-1 text-blue-500 cursor-pointer"
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
