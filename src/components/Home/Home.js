import React, { useEffect, useState } from "react";
import "./Home.css";
import fakeData from "../../fakeData/fakeData.json";
import Player from "../Player/Player";
import Cart from "../Cart/Cart";

const Home = () => {
  const [players, setPlayers] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    setPlayers(fakeData);
    // console.log(fakeData);
  }, []);
 
  const handleClick = (player) => {
    const newCart = [...cart, player];
    setCart(newCart);
  }

  return (
    <div className="players-container">
      <div className="players">
        {players.map((player) => (
          <Player player={player} handleClick={handleClick} key={player.id}></Player>
        ))}
      </div>

      <div className="players-cart">
            <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
