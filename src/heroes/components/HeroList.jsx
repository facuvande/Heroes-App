import React from 'react'
import { HeroCard } from './HeroCard'

import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { useMemo } from 'react'

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {heroes.map((heroe) => (
                <div key={heroe.id} className="col">
                    <HeroCard {...heroe} />
                </div>
            ))}
        </div>
    )
}
