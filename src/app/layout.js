import "../app/globals.css";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Testimonial from "../Components/Testimonial";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sen:wght@400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <Testimonial />
        <Footer />
        {children}
      </body>
    </html>
  );
}