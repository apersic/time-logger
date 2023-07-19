import React from "react";
import RegisterForm from "./components/RegisterForm";
import AuthenticationBanner from "../shared/components/AuthenticationBanner/AuthenticationBanner";

function Register() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="mt-24 flex flex-col justify-center items-center bg-[#F9F9FD] w-[320px] py-[20px] px-[16px] rounded">
          <h4 className="text-lg text-center font-bold mb-6">Register</h4>
          <RegisterForm />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="mt-12 flex flex-col justify-end items-start bg-[#F9F9FD] pt-[20px] w-[320px] px-[30px] rounded">
          <AuthenticationBanner
            title="Have an account?"
            buttonText="Login here"
            route="/login"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
