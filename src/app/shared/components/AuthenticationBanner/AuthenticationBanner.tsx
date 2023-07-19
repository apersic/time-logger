"use client";

import { useRouter } from "next/navigation";

interface AuthenticationBannerProps {
  title: string;
  buttonText: string;
  route: string;
}

function AuthenticationBanner({
  title,
  buttonText,
  route,
}: AuthenticationBannerProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <div className="flex items-center justify-between gap-[32px]">
      <i
        className="pi pi-user-plus"
        style={{ color: "#616B87", fontSize: "4rem" }}
      ></i>
      <div className="flex flex-col">
        <span className="font-bold text-[#616B87]">{title}</span>
        <button
          type="button"
          onClick={handleClick}
          className="text-[#ec6336] text-left underline text-sm"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default AuthenticationBanner;
