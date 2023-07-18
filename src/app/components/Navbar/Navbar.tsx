"use client";

import { Menubar } from "primereact/menubar";
import Logo from "../Logo/Logo";
import { PrimeIcons } from "primereact/api";
import logout from "@/firebase/auth/logout";
import { useAuthContext } from "@/app/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
  const { user } = useAuthContext();
  const router = useRouter();
  const pathname = usePathname();

  const items = [
    {
      label: "Trackers",
      icon: PrimeIcons.CLOCK,
      command: () => router.push("/"),
      className: pathname === "/" ? "active" : "",
    },
    {
      label: "History",
      icon: PrimeIcons.HISTORY,
      command: () => router.push("/history"),
      className: pathname === "/history" ? "active" : "",
    },
    {
      label: "Logout",
      icon: PrimeIcons.POWER_OFF,
      command: () => logout(),
    },
  ];

  if (user) {
    return <Menubar start={<Logo />} model={items} />;
  }

  return <Menubar start={<Logo />} />;
}

export default Navbar;
