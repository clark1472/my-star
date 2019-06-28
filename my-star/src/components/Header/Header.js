import React from "react";
import "./Header.css"; 

const Header = () => (
    <header className="header">
        <h1>Clicky Game!</h1>
         {/* want to include logo on js or css file= http://localhost:3007/images/stargateLogo.jpg */}
        <h2>Click an image. Earn a point. Click each image only once. If you pick image more than once you loose game. If pick all 12 images you win.</h2>
    </header>
);

export default Header;