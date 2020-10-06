import React from "react";
import {useDataValue} from "../Data/DataProvider";
const logo = require('../assets/logo.png')
export default function Navbar() {
    const [{}, dispatch] = useDataValue();
    const makeSearch = (input) => {
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=cd6319103952e65efcf4a0327d570504&language=en-US&query=${input}&page=1&include_adult=false`).then((result) => {
            result.json().then((data) => {
                dispatch({
                    type: "SET_SEARCH",
                    search: data.results,
                });
            })
        })
    }
    async function handleSearch(e) {
        if (e.target.value === '') {
            dispatch({
                type: "SET_SEARCH",
                search: false,
            });
        }
        // eslint-disable-next-line no-unused-expressions
        e.keyCode === 13 ? makeSearch(e.target.value) :null
    }
    return <nav>
        <div onClick={() => window.location.reload()}><img src={logo} alt="logo"/>TV Universe</div>
        <input type="text" placeholder={'Search'} onKeyUp={(e) => handleSearch(e)}/>
    </nav>
}