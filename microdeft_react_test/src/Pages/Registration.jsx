import React, { useState } from "react";
import Container from "../Components/Container";
import axios from "axios";
import { Link } from "react-router-dom";

const Registration = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("https://react-interview.crd4lc.easypanel.host/api/register", {
        name,
        email,
        password,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section>
      <Container>
        <div className="border rounded-xl shadow-2xl   bg-red-200 mt-[50px] w-[60%] mx-auto pb-10 ">
          <h2 className="text-2xl font-bold text-[#1b5fe8] font-serif text-center pt-7 uppercase">
            wellc<span className="text-red-600">o</span>me
          </h2>
          <h3 className="text-2xl font-bold text-[#1b5fe8] font-serif text-center pt-4 uppercase">
            Registrat<span className="text-red-600">io</span>n here
          </h3>
          <div className="flex justify-center pt-5">
            <input
              onChange={(e) => setName(e.target.value)}
              className="w-[40%] py-3 px-4 rounded-lg outline-none "
              type="text"
              placeholder="Name"
            />
          </div>
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
              onClick={handleRegister}
              className="w-[40%] py-3 px-4 rounded-lg bg-[#bea6c4] hover:bg-[#e589c2] text-xl font-midium hover:font-bold font-serif text-white duration-500"
            >
              Register{" "}
            </button>
          </div>
          <p className="text-base text-rose-500 font-medium capitalize text-center mt-4">
            {" "}
            do you have an accounnt ?
            <Link to ="/login">
            <span className="text-green-500 font-bold hover:cursor-pointer hover:underline duration-500">
              Login
            </span>
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Registration;
