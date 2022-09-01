import React, { useState, useEffect } from "react";
import PokeCard from "../components/PokeCard";
import { getPokemons } from "../services/pokeApi.service";
import colors from "../colors";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((response) => {
      setPokemons(response);
    });
  }, []);

  return (
    <div className="home">
      {pokemons.map((item) => (
        <PokeCard
          id={item.id}
          key={item.name}
          color={colors[item.types[0].type.name]}
          name={item.name}
          imageUrl={item.sprites.other["official-artwork"].front_default}
        />
      ))}
    </div>
  );
};

export default Home;
