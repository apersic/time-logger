"use client";

import React from "react";
import { useEffect } from "react";
import { useAuthContext } from "./context/AuthContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      return router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return <div>Home</div>;
}
