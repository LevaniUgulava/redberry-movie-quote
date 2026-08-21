import Header from "./components/Header/Header.tsx";
import {TestMovies} from "@/pages/Movies/TestMovies.ts";
import MovieCard from "@/pages/Movies/components/MovieCard/MovieCard.tsx";

function Movies() {
    return <div>
        <Header/>
        <div className="grid grid-cols-3 gap-10 mt-13">
            {TestMovies.map((movie) => (
                <MovieCard movie={movie}/>
            ))}
        </div>
    </div>
}

export default Movies;
