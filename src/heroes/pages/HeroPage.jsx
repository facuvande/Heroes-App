import { useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById"
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

export const HeroPage = () => {

    // Para extraer los parametros
    const { heroId } = useParams()
    const navigate = useNavigate()

    const hero = useMemo(() => getHeroById(heroId), [heroId]); 

    const onNavigateBack = () => {
        // return <Navigate to="/marvel"/>
        navigate(-1)
    }

    if(!hero){
        return <Navigate to="/marvel"/>
    }
    
    return (
        <div className="row mt-5">
            <div className="col-12 col-md-4 mb-3">
                <img src={`/heroes/${heroId}.jpg`} alt={hero.superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
            </div>
            <div className="col-12 col-md-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: </b>
                        {hero.alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b>
                        {hero.publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First appearance: </b>
                        {hero.first_appearance}
                    </li>
                </ul>
                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>

                <button className="btn btn-outline-primary" onClick={onNavigateBack}>
                    Regresar
                </button>
            </div>
        </div>
    )
}
