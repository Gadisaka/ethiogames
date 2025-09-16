import React from "react";
import Header from "./components/Header";
import AdSpace from "./components/AdSpace";
import GameList from "./components/GameList";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div className="h-screen bg-gradient-to-b from-ethio-dark to-gray-800 overflow-hidden">
      {/* Phone Frame Container */}
      <div className="max-w-sm mx-auto bg-gradient-to-b from-ethio-dark to-gray-800 h-full flex flex-col">
        {/* Header with Logo */}
        <div className="flex-shrink-0">
          <Header />
        </div>

        {/* Advertisement Space */}
        <div className="flex-shrink-0">
          <AdSpace />
        </div>

        {/* Game Selection List */}
        <div className="flex-1 overflow-y-auto">
          <GameList />
        </div>

        {/* Social Media Links */}
        <div className="flex-shrink-0">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default App;
