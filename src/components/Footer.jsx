
import React from "react";

//Footer part component
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Kartik {year}</p>
    </footer>
  );
}

export default Footer;
