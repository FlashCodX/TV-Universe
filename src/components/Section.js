import React from 'react'
import Media from "./Media";
export default class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            media: props.media,
        }
    }
    render() {
        return (
            <section className={'sec'}>
                <header>
                    <div>{this.state.title}</div>
                </header>
                <Media media={this.state.media} search={false}/>
            </section>
        )
    }
}