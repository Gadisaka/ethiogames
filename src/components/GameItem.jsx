import React from "react";

const GameItem = ({ game }) => {
  const handleGameClick = () => {
    if (game.available && game.url) {
      // Use Telegram WebApp API instead of window.open
      if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.openLink(game.url, { try_instant_view: true });
      } else {
        // Fallback if Telegram API is not available (open in same tab)
        window.location.href = game.url;
      }
    }
  };

  return (
    <div className="flex items-center justify-between">
      {/* Game Icon */}
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-lg shadow-md">
        <img src={game.icon} alt="icon" />
      </div>

      {/* Game Button */}
      <div className="flex-1 ml-3">
        <button
          onClick={handleGameClick}
          disabled={!game.available}
          className={`
            w-full text-left px-4 py-3 rounded-full font-semibold text-base transition-all duration-300
            ${
              game.available
                ? "bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-blue-600 hover:to-blue-700 hover:scale-105 cursor-pointer border-2 border-gray-600 hover:border-blue-500"
                : "bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 cursor-not-allowed border-2 border-gray-500"
            }
          `}
        >
          <div className="flex items-center justify-between">
            <span>{game.name}</span>
            {!game.available && (
              <span className="text-yellow-400 text-xs font-bold">
                COMING SOON
              </span>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default GameItem;
