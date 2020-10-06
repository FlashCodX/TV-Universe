import React from "react";
import StarIcon from '@material-ui/icons/Star';

export default class Media extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            media: props.media,
            hovered: {key: 0},
        }
    }
    returnMedia() {
        let items = []
        this.state.media.map((item) => {
            // eslint-disable-next-line no-unused-expressions
            item['poster_path'] && item['overview'] ?
                items.push(<div key={item.id} onMouseOver={(e) => this.setState({hovered: {key: item.id}})}
                                onMouseLeave={() => this.setState({hovered: {key: 0}})}>
                    <img src={'https://image.tmdb.org/t/p/w500/' + item['poster_path']} alt=""/>
                    <section>
                        <span>{item.name ? item.name : item['original_title']}</span>
                        <section>
                            <StarIcon/>
                            <div>{item['vote_average']}</div>
                        </section>
                    </section>
                    <div className={this.state.hovered.key !== item.id ? 'overlay' : 'overlay slide-in'}>
                        <h1>OverView: </h1>
                        <div>{item['overview']}</div>
                    </div>

                </div>)
                : null
        })
        return items.length===0 ? <p>No Results were found.</p> : items
    }
    render() {
        return (
            <section className={'media'}>
                {this.returnMedia()}
            </section>
        )
    }
}