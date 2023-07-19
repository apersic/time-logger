"use client";

import { useState } from "react";
import signIn from "@/firebase/auth/signIn";
import { useRouter } from "next/navigation";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);
    if (error) {
      console.log(error);
      return;
    }

    router.push("/");
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
        Login
      </button>
    </form>
  );
}

export default LoginForm;
