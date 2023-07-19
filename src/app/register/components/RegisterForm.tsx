"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import signUp from "@/firebase/auth/signUp";

function RegisterForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      console.log(error);
    }

    router.push("/login");
  };

  return (
    <form className="flex flex-col gap-4 w-[100%]" onSubmit={handleForm}>
      <InputText
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <Password
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button
        type="submit"
        className="bg-[#EC6336] p-2 rounded-sm text-white text-sm mt-4"
      >
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
