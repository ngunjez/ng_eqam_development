import { useEffect, useRef, useState } from "react";
import styles from "./Start.module.css";
import Typed from "typed.js";
import { Logo } from "../EqamLogo";

const TypedMessage = ({ text }) => {
  const elRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(elRef.current, {
      strings: [text],
      typeSpeed: 90,
    });

    return () => {
      typed.destroy();
    };
  }, [text]);

  return <h1 ref={elRef} />;
};

const Start = () => {
  const { StartPage, EqamLogo } = styles;

  const [isServer, setIsServer] = useState(false);
  useEffect(() => {
    setIsServer(true);
  }, []);

  if (!isServer) {
    return null;
  }

  return (
    <div className={StartPage}>
      <div className={EqamLogo}>
        <Logo src="/EQLogo.png" alt="EQAM Logo" />
      </div>
      <TypedMessage
        text="We back visionary teams building the next generation of decentralized
        technologies"
      />
    </div>
  );
};

export default Start;
