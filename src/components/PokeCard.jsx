import { useNavigate } from "react-router-dom";

const PokeCard = (props) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/pokemon/${props.id}`)}
      className="card"
      style={{ borderColor: props.color }}
    >
      <img className="card__image" src={props.imageUrl} alt="Pokemon" />
      <div className="card__footer" style={{ backgroundColor: props.color }}>
        <span className="card__name">{props.name}</span>
      </div>
    </div>
  );
};

export default PokeCard;
