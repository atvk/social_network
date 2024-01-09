import React from "react";
import s from "./Navbar.module.css";
import "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.Nav}>
      <div className={`${s.Item} ${s.Active}`}>
        <a>Profile</a>
      </div>
      <div className={s.Item}>
        <a>Massages</a>
      </div>
      <div className={s.Item}>
        <a>News</a>
      </div>
      <div className={s.Item}>
        <a>Music</a>
      </div>
      <div className={s.Item}>
        <a>Setting</a>
      </div>
    </nav>
  );
};

export default Navbar;
