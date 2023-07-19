import React from "react";
import LoginForm from "./components/LoginForm";
import AuthenticationBanner from "../shared/components/AuthenticationBanner/AuthenticationBanner";

function Login() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="mt-24 flex flex-col justify-center items-center bg-[#F9F9FD] w-[320px] py-[20px] px-[16px] rounded">
          <h4 className="text-lg text-center font-bold mb-6">Login</h4>
          <LoginForm />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="mt-12 flex flex-col justify-end items-start bg-[#F9F9FD] pt-[20px] w-[320px] px-[30px] rounded">
          <AuthenticationBanner
            title="Need an account?"
            buttonText="Register here"
            route="/register"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
