import React, { useState } from "react";
import Container from "../Components/Container";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [data, setData] = useState("");

  let handleLogin = () => {
    axios
      .post("https://react-interview.crd4lc.easypanel.host/api/login", {
        email,
        password,
      })
      .then((data) => {
        console.log(data.data.status_message);
        localStorage.setItem("token", data.data.data.token);
        toast(data.data.status_message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section>
      <Container>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="border rounded-xl shadow-2xl   bg-red-200 mt-[50px] w-[60%] mx-auto pb-10 ">
          <h2 className="text-2xl font-bold text-[#1b5fe8] font-serif text-center pt-7 uppercase">
            wellc<span className="text-red-600">o</span>me
          </h2>
          <h3 className="text-2xl font-bold text-[#1b5fe8] font-serif text-center pt-4 uppercase">
            Log<span className="text-red-600">in</span> here
          </h3>

          <div className="flex justify-center pt-5">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-[40%] py-3 px-4 rounded-lg outline-none "
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="flex justify-center pt-5">
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-[40%] py-3 px-4 rounded-lg outline-none "
              type="text"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-center pt-7 ">
            <button
              onClick={handleLogin}
              className="w-[40%] py-3 px-4 rounded-lg bg-[#bea6c4] hover:bg-[#e589c2] text-xl font-midium hover:font-bold font-serif text-white duration-500"
            >
              Login{" "}
            </button>
          </div>
          <p className="text-base text-rose-500 font-medium capitalize text-center mt-4">
            {" "}
            do you have no account ?
            <Link to="/">
              <span className="text-green-500 font-bold hover:cursor-pointer hover:underline duration-500">
                rigistration
              </span>
            </Link>
          </p>
          <Link to ="/coursefrom">
          <p className="text-xl font-medium text-red-500 text-center mt-7 hover:underline capitalize cursor-pointer">course From</p>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Login;
