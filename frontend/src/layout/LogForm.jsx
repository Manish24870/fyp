import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
function LogForm({ isLogin }) {
  if (isLogin) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col items-center w-full h-screen justify-center space-y-10 bg-gray-700 px-28 text-white">
          <h1 className="text-3xl font-pacifico">
            Log into Digi<span className="text-yellow-500">Dalal</span>
          </h1>
          <p>
            Don't have an account yet?
            <Link
              to="/signup"
              className="text-yellow-500 hover:text-yellow-300 hover:underline"
            >
              Sign up Free
            </Link>
          </p>
          <button className="px-3 py-3 bg-white shadow-lg rounded-lg flex items-center gap-x-2 w-2/3 text-gray-500 justify-center">
            <FcGoogle />
            Log in with Google
          </button>
          <div className="flex justify-between items-center gap-x-4 w-2/3">
            <hr className="w-full border-yellow-500" />
            or
            <hr className="w-full border-yellow-500" />
          </div>
          <div className="flex flex-col w-full items-center justify-center gap-y-4">
            <input
              type="text"
              placeholder="name@email.com"
              className="px-3 py-3 w-2/3 rounded-lg text-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="px-3 py-3 w-2/3 rounded-lg text-black"
            />
            <Link to="/forgotpasswords" className="text-gray-300">
              Forgot Password
            </Link>
            <button className="px-3 py-3 bg-yellow-500 w-2/3 rounded-lg">
              Login
            </button>
          </div>
        </div>
        <img
          src="https://hotelkantipur.com/wp-content/uploads/2020/02/IMG_2033.jpg"
          alt="house"
          className="w-full h-screen object-cover hidden lg:block"
        />
      </div>
    )
  } else {
    return <div>Muji Paila Login gar</div>
  }
}

export default LogForm
