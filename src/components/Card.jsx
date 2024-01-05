import { useNavigate } from "react-router-dom";

function Card ({ logement }) {
    const navigate = useNavigate()
    
    const handleClick = (event) => {
        const id = event.target.id;
        navigate(`/logement/${id}`)
    };

    return (
        <div className="card">
            <img id={logement.id} src={logement.cover} alt={logement.title} onClick={handleClick} className="card__picture" />
            <h2 className="card__title">{logement.title}</h2>            
        </div>
    );
}

export default Card;