"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@mui/material";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-auto flex flex-col md:flex-row justify-between items-center py-4 px-12 bg-white shadow-md relative">
      <div className="navbar__logo-container">
        <img src="/favicon1.ico" alt="Logo"  className="navbar__logo-img"  style={{marginLeft: "50px"}}/>
      </div>

      {/* Hamburger menu icon */}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* This is the hamburger icon (three horizontal lines) */}
      </div>

      {/* Links section (shown on mobile when hamburger is clicked) */}
      <div className={`nav-links ${isMenuOpen ? "active" : ""} flex space-x-8`}>
        <Link
          href="/"
          className="text-gray-600 hover:text-#0978FE-600 transition duration-300"
          style={{ fontFamily: "Sen, sans-serif", textDecoration: "none" }}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-gray-600 hover:text-#0978FE-600 transition duration-300"
          style={{ fontFamily: "Sen, sans-serif", textDecoration: "none" }}
        >
          About Us
        </Link>
        <Link
          href="/services"
          className="text-gray-600 hover:text-#0978FE-600 transition duration-300"
          style={{ fontFamily: "Sen, sans-serif", textDecoration: "none" }}
        >
          Services
        </Link>
      </div>

      {/* Contact Button with marginLeft */}
      <Button
        variant="contained"
        style={{
          backgroundColor: "#3f51b5",
          color: "white",
          borderRadius: "25px",
          padding: "0.6rem 2rem",
          fontFamily: "Sen, sans-serif",
          textTransform: "none",
          marginRight: "100px", 
        }}
        className="contact-button"
      >
        Contact us
      </Button>
    </nav>
  );
}
