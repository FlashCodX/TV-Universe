import React from 'react'
import Media from "./Media";
import {useDataValue} from "../Data/DataProvider";


export default function (props) {
    const [{search}, dispatch] = useDataValue();

    return (
            <section className={'sec'}>
                <header>
                    <div>{props.title}</div>
                </header>
                <Media  media={search}/>

            </section>
        )
}