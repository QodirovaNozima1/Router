import React from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container flex items-center  mt-6">
      <div className="flex items-center justify-center w-full gap-6 flex-col ">
        <b className="text-2xl">LOG IN</b>
        <form className="flex items-center justify-center flex-col p-5 rounded-3xl shadow-md gap-4">
          <input
            className="shadow-sm bg-slate-100 outline-none border-spacing-1  p-2 w-70 pl-2"
            type="text"
            placeholder="Email"
          />
          <input
            className="shadow-sm bg-slate-100 outline-none border-spacing-1  p-2 w-70 pl-2"
            type="password"
            required
            placeholder="Пароль"
          />
          <NavLink to={"/admin"}>
            <button
              type="submit"
              required
              className="btn w-60 bg-slate-800  p-2 text-fuchsia-50"
              onClick={() => navigate("/admin")}
            >
              Сохранить
            </button>
          </NavLink>
          <button
            className="border-1 border-slate-200 hover:bg-slate-800 duration-700 transition-all hover:shadow-lg hover:text-white  w-60  p-2"
            onClick={() => navigate("/")}
          >
            Выход
          </button>
          <p>or</p>
          <button
            className="border-2 border-slate-800   w-60  p-2 flex items-center justify-center gap-2"
          >
            <FcGoogle />
            Sign in with Google
          </button>
        </form>
        <b className="pb-3">Мы в социальных сетях!</b>
      </div>
    </div>
  );
};

export default Login;