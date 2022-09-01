import { getPokemonById } from "../services/pokeApi.service";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import colors from "../colors";
import pokemonImageUrl from "../assets/pokeball.png";
import rule from "../assets/rule.svg";
import balance from "../assets/balance.svg";
import PokemonTypePill from "../components/PokemonTypePill";

const PokemonDetails = () => {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [pokemonColor, setPokemonColor] = useState("");

  useEffect(() => {
    getPokemonById(params.id).then((response) => {
      setPokemon(response);
      setPokemonColor(colors[response.types[0].type.name]);
    });
  }, []);

  if (!pokemon) return null;

  return (
    <div
      className="pokemon-details"
      style={{
        backgroundColor: pokemonColor,
      }}
    >
      <img className="pokemon-details__pokeball-img" src={pokemonImageUrl} />
      <div className="pokemon-details__left-container">
        <p className="pokemon-details__left-container__name">{pokemon.name}</p>
        <img
          className="pokemon-details__left-container__pokemon-img"
          src={pokemon.sprites?.other["official-artwork"].front_default}
        />
      </div>
      <div className="pokemon-details__right-container">
        <div className="pokemon-details__right-container__header">
          <div className="pokemon-details__right-container__header__pills-container">
            {pokemon.types?.map((item) => (
              <PokemonTypePill
                key={item.type.name}
                type={item.type.name}
                color={colors[item.type.name]}
              />
            ))}
          </div>
          <p
            className="pokemon-details__right-container__header__title"
            style={{ color: pokemonColor }}
          >
            About
          </p>
        </div>
        <div className="pokemon-details__right-container__body">
          <div className="pokemon-details__right-container__body__info-grid">
            <div className="grid-item">
              <img className="grid-item-img" src={balance} />
              <p className="grid-item-value">{`${pokemon.weight} kg`}</p>
            </div>
            <div className="grid-item">
              <img className="grid-item-img" src={rule} />
              <p className="grid-item-value">{`${pokemon.height} m`}</p>
            </div>
            <p className="grid-item-value">
              {pokemon.moves
                .slice(0, 2)
                .map(
                  (item) =>
                    `${item.move.name
                      .charAt(0)
                      .toUpperCase()}${item.move.name.slice(1)}`
                )
                .join(" / ")}
            </p>
            <p className="grid-item-label">Weight</p>
            <p className="grid-item-label">Height</p>
            <p className="grid-item-label">Moves</p>
          </div>
        </div>
        <div className="pokemon-details__right-container__footer">
          <p
            className="pokemon-details__right-container__header__title"
            style={{ color: pokemonColor }}
          >
            Base Stats
          </p>
          <div className="pokemon-details__right-container__footer__stats-container">
            {pokemon.stats
              ?.filter((item) => item.base_stat < 100)
              .map((item) => (
                <div className="stat-item" key={item.stat.name}>
                  <p
                    className="stat-item__name"
                    style={{ color: pokemonColor }}
                  >
                    {item.stat.name}
                  </p>
                  <p>{item.base_stat}</p>
                  <div className="stat-item__bar-container">
                    <div
                      className="stat-item__bar-container__placeholder"
                      style={{ backgroundColor: pokemonColor }}
                    />
                    <div
                      className="stat-item__bar-container__value"
                      style={{
                        backgroundColor: pokemonColor,
                        width: `${item.base_stat}%`,
                        height: "10px ",
                      }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
