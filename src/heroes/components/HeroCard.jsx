import { Link } from "react-router-dom"

const CharactersByHero = ({alter_ego, characters}) => {
    if(alter_ego === characters) return (<></>);
    return <p>{characters}</p>
}

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
    const heroImageUrl = `/heroes/${id}.jpg`

    return (

        <div className="card">
        <img src={heroImageUrl} className="card-img-top" alt={superhero} />

        <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>

            <CharactersByHero characters={characters} alter_ego={alter_ego} />

            <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
            </p>

            <Link to={`/hero/${id}`} className="btn btn-primary">
                Más...
            </Link>
        </div>
    </div>
    )
}
