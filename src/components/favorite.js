import {
    useState,
    useEffect
} from 'react'

import './favorite.css'


const removeItem = (oldFavs = [], id) => {
    const favoriteIds = JSON.parse(localStorage.getItem("favorite") || []);
    const newFavorites = favoriteIds.filter(fId => fId !== id)
    localStorage.setItem("favorite", JSON.stringify(newFavorites))

    return oldFavs.filter(fav => fav.id !== id)
}

export const FavoriteView = () => {
    const [favorites, setFavorites] = useState([]);
    const remove = (id) => {
        setFavorites(oldFavs => removeItem(oldFavs, id))
    }

    useEffect(() => {
        const favoriteIds = JSON.parse(localStorage.getItem("favorite") || []);

        favoriteIds.forEach(id => {
            fetch(`https://www.superheroapi.com/api.php/10157652346894910/${id}`)
                .then(res => res.json())
                .then(res => setFavorites(oldItems => ([res, ...oldItems]))
        )
    })
    }, [])

    return(
    <div className='parent'>
        <div className='container'>
            {favorites.map(hero =>(
                        <div key={hero.id} className=''>
                            <img src={hero.image.url} alt="" className="image" />
                            <h1 className="name">Name: {hero.name}</h1>
                            {hero.biography[`full-name`] ? (<div><p className="full_name">Actor: {hero.biography[`full-name`]}</p></div>) : (null) }
                            <p className="alignment">Alignment: {hero.biography.alignment}</p>
                            <p className="race">Race: {hero.appearance.race}</p>
                            <button onClick={() => remove(hero.id)}>-</button>
                        </div>
                    )
                )}
        </div>
    </div>
    );
}


