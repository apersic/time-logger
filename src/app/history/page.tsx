"use client";

import { useRouter } from "next/navigation";
import { useAuthContext } from "../context/AuthContext";
import { useEffect } from "react";

function History() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      return router.push("/signIn");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return <div>History</div>;
}

export default History;
