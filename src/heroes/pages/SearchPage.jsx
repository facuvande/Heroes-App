import {HeroCard} from '../components/HeroCard'
import {useForm} from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'
import { getHeroesByName } from '../helpers/getHeroesByName';

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search)
    const heroes = getHeroesByName(q);

    const showSearch = (q.length === 0) ;
    const showError = (q.length > 0) && heroes.length === 0;

    const {searchText, onInputChange} = useForm({
        searchText: q
    })


    const onSearchSubmit = (e) => {
        e.preventDefault()
        // if(searchText.trim().length <= 1) return

        navigate(`?q=${searchText.toLowerCase().trim()}`)
    }

    return (
        <>
            <h1 className="mb-4">Search</h1>
            <div className="row">
                <div className="col-lg-5">
                    <h4>Searching</h4>
                    <form onSubmit={onSearchSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Search a hero"
                                className="form-control"
                                name="searchText"
                                autoComplete="off"
                                value={searchText}
                                onChange={onInputChange}
                            />
                            <button className="btn btn-outline-primary" type="submit">
                                Search
                            </button>
                        </div>
                    </form>
                </div>

                <div className="col-lg-7 mt-4 mt-lg-0">
                    <h4>Results</h4>
                    <div className={`alert alert-primary ${showSearch ? 'd-block' : 'd-none'}`}>
                        Search a hero
                    </div>
                    <div className={`alert alert-danger ${showError ? 'd-block' : 'd-none'}`}>
                        No hero with <b>{q}</b>
                    </div>
                    <div className="row">
                        {heroes.map((hero) => (
                            <div className="col-6 col-md-4 col-lg-3" key={hero.id}>
                                <HeroCard {...hero} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
