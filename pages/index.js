import Team from "./Team";
import ContactUs from "./ContactUs";
import Navbar from "@/components/Navbar/Navbar";
import Start from "@/components/Start/Start";
import { useEffect, useState } from "react";

export default function Home() {
  const [isServer, setIsServer] = useState(false);

  useEffect(() => {
    setIsServer(true);
  }, []);

  if (!isServer) {
    return null;
  }

  return (
    <>
      <ContactUs />
      <Team />
      <Navbar />
      <Start />
    </>
  );
}
