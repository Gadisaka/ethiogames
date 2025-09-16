import React from "react";
import logo from "../assets/LOGO.png";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center pt-8 pb-4">
      {/* Logo Container */}
      <div className="relative mb-3">
        <div className="w-32 h-32 bg-none  flex items-center justify-center shadow-lg">
          {/* Game Controller Icon */}
          <div className="relative">
            <img src={logo} alt="logo" />
          </div>
        </div>
        {/* Letter "E" in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-black text-ethio-dark">E</span>
        </div>
      </div>

      {/* App Title */}
      <h1 className="text-2xl font-black text-white tracking-wider mb-2">
        ETHIO GAMES
      </h1>
    </header>
  );
};

export default Header;
