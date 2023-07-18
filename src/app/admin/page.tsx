"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../context/AuthContext";

function Page() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user === null) router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return <h1>Only logged in users can view this page</h1>;
}

export default Page;
