function Card ({ logement }) {
    return (
        <div className="card">
            <h2 className="card__title">{logement.title}</h2>            
        </div>
    );
}

export default Card;