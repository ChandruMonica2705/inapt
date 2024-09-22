import Link from "next/link";
import { Button } from "@mui/material";


export default function Navbar() {
  return (
    <nav className="w-full h-16 flex justify-between items-center py-4 px-12 bg-white shadow-md">
      <div className="flex items-center space-x-3" style={{ marginLeft: "80px" }}>
        <img src="../" alt="Logo" className="h-10 w-10 object-contain" />
        <span
          className="font-bold text-xl text-gray-700"
          style={{ fontFamily: "Sen, sans-serif" }}
        >
          Inayit
        </span>
      </div>

      <div className="flex space-x-8">
        <Link
          href="/"
          className="text-gray-600 hover:text-blue-600 transition duration-300"
          style={{ fontFamily: "Sen, sans-serif",textDecoration: "none" }}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-gray-600 hover:text-blue-600 transition duration-300"
          style={{ fontFamily: "Sen, sans-serif",textDecoration: "none" }}
        >
          About Us
        </Link>
        <Link
          href="/services"
          className="text-gray-600 hover:text-blue-600 transition duration-300"
          style={{ fontFamily: "Sen, sans-serif",textDecoration: "none" }}
        >
          Services
        </Link>
      </div>

      <Button
        variant="contained"
        style={{
          backgroundColor: "#3f51b5",
          color: "white",
          borderRadius: "25px",
          padding: "0.6rem 2rem",
          fontFamily: "Sen, sans-serif",
          textTransform: "none",
           marginRight: "80px",
           marginTop: "20px"
        }}
      >
        Contact us
      </Button>
    </nav>
  );
}