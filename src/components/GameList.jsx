import React from "react";
import GameItem from "./GameItem";
import ludo from "../assets/ludo icon.png";
import bingo from "../assets/bingo.png";
import latlat from "../assets/latlat.png";
import dama from "../assets/dama.png";
import kano from "../assets/keno.png";
import chess from "../assets/chess.png";

const GameList = () => {
  const games = [
    {
      id: "ludo",
      name: "ETHIO LUDO",
      icon: ludo,
      available: true,
      url: "https://play.ludo.ethiobingo.net/", // Adjust this to your ludo game URL
    },
    {
      id: "bingo",
      name: "ETHIO BINGO",
      icon: bingo,
      available: false,
    },
    {
      id: "latlat",
      name: "ETHIO LATLAT",
      icon: latlat,
      available: false,
    },
    {
      id: "dama",
      name: "ETHIO DAMA",
      icon: dama,
      available: false,
    },
    {
      id: "kano",
      name: "ETHIO KANO",
      icon: kano,
      available: false,
    },
    {
      id: "chess",
      name: "ETHIO CHESS",
      icon: chess,
      available: false,
    },
  ];

  return (
    <div className="px-4 space-y-3">
      {games.map((game) => (
        <GameItem key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameList;
