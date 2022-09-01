const PokemonTypePill = (props) => {
  return (
    <div className="pokemon-type-pill" style={{ backgroundColor: props.color }}>
      <p className="pokemon-type-pill__text">{props.type}</p>
    </div>
  );
};

export default PokemonTypePill;
