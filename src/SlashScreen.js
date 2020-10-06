import React from "react";
import {useDataValue} from "./Data/DataProvider";
const logo = require('./assets/logo.png')
export default function  SlashScreen() {
    const [{progress,c_state}, dispatch] = useDataValue();
        return (
            <main id={'splash'}>
                <img src={logo} alt=""/>
                <section className={'progress-bar'}>
                    <div style={{width: progress + "%"}}/>
                </section>
                <span>{c_state}</span>
            </main>
        )
}