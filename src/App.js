import React, {useEffect} from 'react';
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import {useDataValue} from "./Data/DataProvider";
import Search from "./components/Search";
import SlashScreen from "./SlashScreen";

let interval
let progressI
export default function App() {
    let [{search, popular_movies, popular_tv, ready, progress}, dispatch] = useDataValue();
    const key = process.env.REACT_APP_TMD_KEY
    const TvPopular = 'https://api.themoviedb.org/3/tv/popular?api_key='
    const MoviesPopular = 'https://api.themoviedb.org/3/movie/popular?api_key='
    useEffect(() => {
        fetch(TvPopular + key).then(async (response) => {
            response.json().then((TV) => {
                dispatch({
                    type: "SET_POPULAR_TV",
                    popular_tv: TV.results,
                });
                fetch(MoviesPopular + key).then((response) => {
                    response.json().then((MOVIES) => {
                        dispatch({
                            type: "SET_POPULAR_MOVIES",
                            popular_movies: MOVIES.results,
                        });
                    })
                })
            })
        })
        let i = 0
        clearInterval(interval)
        let states = ['Loading Assets', 'Getting Data', 'Starting']
        interval = setInterval(() => {
            dispatch({
                type: "SET_C_STATE",
                c_state: states[i],
            });
            states[i + 1] ? i++ : clearInterval(interval)
        }, 250)
        clearInterval(progressI)
        progressI = setInterval(() => {
            if (progress<100){
                progress=progress+1.5
                console.log(progress)
                dispatch({
                    type: "SET_PROGRESS",
                    progress: progress,
                });
            }else {
                clearInterval(progressI)
                dispatch({
                    type: "SET_READY",
                    ready: true,
                });
            }
        }, 20)
    }, [ready, dispatch])

    function mode() {
        if (!search) {
            return (
                <div className="App">
                    <Navbar/>
                    <Section media={popular_movies} title={'Popular Movies'} n={0}/>
                    <Section media={popular_tv} title={'Popular Tv Shows'} n={1}/>
                </div>
            )
        } else {
            return (
                <div className="App">
                    <Navbar/>
                    <Search title={'Results :'} n={0} key={Date.now()}/>
                </div>
            )
        }
    }
    return (
        <main>
            {!ready ? <SlashScreen/> : mode()}
        </main>
    );
}
