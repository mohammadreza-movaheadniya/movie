import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className=" text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-2">
      <div className="flex items-center justify-center gap-4">
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </div>
      <p className="text-sm">created mohammadreza movaheadniya</p>
      <p className="text-sm">email :mr.movaheadniya.81@gmail.com </p>
    </footer>
  );
};

export default Footer;
