import {
    HomeView
} from "./components/home"
import {
    FavoriteView
} from "./components/favorite"
import {
    Route,
    Routes
} from 'react-router-dom'
import "./app.css";


function App() {
    return(
        <>
        <div className="menu">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/favorite">Favorite</a>
                </li>
            </ul>
        </div>
        <div >
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/favorite" element={<FavoriteView />} />
            </Routes>
        </div>
        </>
    )
}

export default App
